//import the model
const ProductImage = require("../models/productImage");

//define route handler
const createProductImage = async (req, res) => {
  try {
    //extract title and desxcription from reauest body
    const { pimage_name, pimage_path, pid } = req.body;
    //create a new ProductImage Obj and insert in DB
    const response = await ProductImage.create({
      pimage_name,
      pimage_path,
      pid,
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

const deleteProductImage = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductImage.findByIdAndDelete(id);
    // await Customer.deleteOne({_id: new mongoose.Types.ObjectId(email)});
    res.json({
      success: true,
      message: "ProductImage deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

const getProductImage = async (req, res) => {
  try {
    const productImages = await ProductImage.find({});
    res.status(200).json({
      success: true,
      data: productImages,
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

const getProductImageById = async (req, res) => {
  try {
    const id = req.params.id;
    const productImage = await ProductImage.findById({ _id: id });

    if (!productImage) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: productImage,
      message: `ProductImage ${id} data fetch successfuly`,
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

const updateProductImage = async (req, res) => {
  try {
    const { id, pimage_name, pimage_path, pid } = req.body;
    const productImage = await ProductImage.findByIdAndUpdate(
      { _id: id },
      { pimage_name, pimage_path, pid },
      { new: true }
    );

    if (!productImage) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: productImage,
      message: `ProductImage ${id} data updated successfully`,
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
  createProductImage,
  deleteProductImage,
  getProductImage,
  getProductImageById,
  updateProductImage,
};
