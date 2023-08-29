//import the model
const ProductTag = require("../models/productTag");

//define route handler
const createProductTag = async (req, res) => {
  try {
    //extract title and desxcription from reauest body
    const { ptagname, ptagvalue, pid } = req.body;
    //create a new ProductTag Obj and insert in DB
    const response = await ProductTag.create({
      ptagname,
      ptagvalue,
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

const deleteProductTag = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductTag.findByIdAndDelete(id);
    // await Customer.deleteOne({_id: new mongoose.Types.ObjectId(email)});
    res.json({
      success: true,
      message: "ProductTag deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

const getProductTag = async (req, res) => {
  try {
    const productTags = await ProductTag.find({});
    res.status(200).json({
      success: true,
      data: productTags,
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

const getProductTagById = async (req, res) => {
  try {
    const id = req.params.id;
    const productTag = await ProductTag.findById({ _id: id });

    if (!productTag) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: productTag,
      message: `ProductTag ${id} data fetch successfuly`,
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

const updateProductTag = async (req, res) => {
  try {
    const { id, ptagname, ptagvalue, pid } = req.body;
    const productTag = await ProductTag.findByIdAndUpdate(
      { _id: id },
      { ptagname, ptagvalue, pid },
      { new: true }
    );

    if (!productTag) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: productTag,
      message: `ProductTag ${id} data updated successfully`,
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
  createProductTag,
  deleteProductTag,
  getProductTag,
  getProductTagById,
  updateProductTag,
};
