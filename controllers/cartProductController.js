//import the model
const CartProduct = require("../models/cartProduct");

//define route handler
const createCartProduct = async (req, res) => {
  try {
    //extract title and desxcription from reauest body
    const { pid, price, quantity, cart_id, cid } = req.body;
    //create a new CartProduct Obj and insert in DB


    const response = await CartProduct.create({
      pid,
      price,
      quantity,
      cart_id,
      cid
    });
    //send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

const deleteCartProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await CartProduct.findByIdAndDelete(id);
    // await Customer.deleteOne({_id: new mongoose.Types.ObjectId(email)});
    res.json({
      success: true,
      message: "CartProduct deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

const getCartProduct = async (req, res) => {
  try {
    const cartProducts = await CartProduct.find({});
    res.status(200).json({
      success: true,
      data: cartProducts,
      message: "get of Data Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

const getCartProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const cartProduct = await CartProduct.findById({ _id: id });

    if (!cartProduct) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: cartProduct,
      message: `CartProduct ${id} data fetch successfuly`,
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

const updateCartProduct = async (req, res) => {
  try {
    const { id, pid, price, quantity, cart_id } = req.body;
    const cartProduct = await CartProduct.findByIdAndUpdate(
      { _id: id },
      { pid, price, quantity, cart_id },
      { new: true }
    );

    if (!cartProduct) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: cartProduct,
      message: `CartProduct ${id} data updated successfully`,
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};



const increaseDecreaseQuantity = async (req, res) => {
  console.log("ji")
  try {
    const { id, quantity } = req.body;
    const cartProduct = await CartProduct.findById({ _id: id });
    const path = req.params.path;
    console.log(path)
    if (!cartProduct) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }

    // Check if the quantity is valid
    if (quantity < 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity cannot be negative",
      });
    }

    if (path === "add") {
      cartProduct.quantity += quantity;
      await cartProduct.save();

      res.status(200).json({
        success: true,
        data: cartProduct,
        message: `CartProduct ${id} quantity increased successfully`,
      });
    }
    else if (path === "sub") {
      // Decrease the cart product quantity
      cartProduct.quantity -= quantity;
      if (cartProduct.quantity <= 0) {
        await CartProduct.findByIdAndDelete(id);
        return res.status(200).json({
          success: true,
          message: `CartProduct ${id} removed from cart`,
        });
      }
      await cartProduct.save();

      res.status(200).json({
        success: true,
        data: cartProduct,
        message: `CartProduct ${id} quantity decreased successfully`,
      });
    }
    else {
      res.status(400).json({
        success: false,
        // data: cartProduct,
        message: `wrong path`,
      });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};


// const increaseCartProductQuantity = async (req, res) => {
//   try {
//     const { id, quantity } = req.body;
//     const cartProduct = await CartProduct.findById({ _id: id });

//     if (!cartProduct) {
//       return res.status(404).json({
//         success: false,
//         message: "No data found with right Id",
//       });
//     }

//     // Check if the quantity is valid
//     if (quantity < 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Quantity cannot be negative",
//       });
//     }

//     // Increase the cart product quantity
//     cartProduct.quantity += quantity;
//     await cartProduct.save();

//     res.status(200).json({
//       success: true,
//       data: cartProduct,
//       message: `CartProduct ${id} quantity increased successfully`,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       data: "internal server error",
//       message: err.message,
//     });
//   }
// };

// const decreaseCartProductQuantity = async (req, res) => {
//   try {
//     const { id, quantity } = req.body;
//     const cartProduct = await CartProduct.findById({ _id: id });

//     if (!cartProduct) {
//       return res.status(404).json({
//         success: false,
//         message: "No data found with right Id",
//       });
//     }

//     // Check if the quantity is valid
//     if (quantity < 0) {
//       return res.status(400).json({
//         success: false,
//         message: "Quantity cannot be negative",
//       });
//     }

//     // Decrease the cart product quantity
//     cartProduct.quantity -= quantity;
//     if (cartProduct.quantity <= 0) {
//       await CartProduct.findByIdAndDelete(id);
//       return res.status(200).json({
//         success: true,
//         message: `CartProduct ${id} removed from cart`,
//       });
//     }
//     await cartProduct.save();

//     res.status(200).json({
//       success: true,
//       data: cartProduct,
//       message: `CartProduct ${id} quantity decreased successfully`,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       data: "internal server error",
//       message: err.message,
//     });
//   }
// };


module.exports = {
  createCartProduct,
  deleteCartProduct,
  getCartProduct,
  getCartProductById,
  updateCartProduct,
  increaseDecreaseQuantity,
  // increaseCartProductQuantity,
  // decreaseCartProductQuantity,
};
