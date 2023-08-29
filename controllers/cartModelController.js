//import the model
const Cart = require("../models/cartModel");

//define route handler
const createCartModel = async (req, res) => {
  try {
    //extract title and desxcription from reauest body
    const { cid, transdate } = req.body;

    // Check if there is already an existing cart with the specified cid
    const existingCart = await Cart.findOne({ cid });

    if (existingCart) {                               //if cart is there it will give error.
      return res.status(400).json({
        success: false,
        message: "Cart with cid already exists",
      });
    }

    const response = await Cart.create({
      cid,
      transdate,
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

const deleteCartModel = async (req, res) => {
  try {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    // await Customer.deleteOne({_id: new mongoose.Types.ObjectId(email)});
    res.json({
      success: true,
      message: "Cart deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

const getCartModel = async (req, res) => {
  try {
    const carts = await Cart.find({});
    res.status(200).json({
      success: true,
      data: carts,
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

const getCartModelById = async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await Cart.findById({ _id: id });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: cart,
      message: `Cart ${id} data fetch successfuly`,
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

const updateCartModel = async (req, res) => {
  try {
    const { id, cid, transdate } = req.body;
    const cart = await Cart.findByIdAndUpdate(
      { _id: id },
      { cid, transdate },
      { new: true }
    );

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: cart,
      message: `Cart ${id} data updated successfully`,
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

module.exports = {
  createCartModel,
  deleteCartModel,
  getCartModel,
  getCartModelById,
  updateCartModel,
};
