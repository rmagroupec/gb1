//import the model
const VendorCategory = require("../models/vendorCategory");
const multer = require('multer');

//define route handler
const Storage = multer.diskStorage({
  destination:'./uploads',
  filename:(req, file, cb)=>{
    cb(null, file.originalname)
  },
});

const upload = multer({
  storage:Storage,

}).single('catimage')
const createVendorCategory = async (req, res) => {
  try {
    upload(req, res, async(err) => {
    const vcategory = new VendorCategory({
      name: req.body.name,
      catimage:req.file.filename,
      vid:req.body.vid,
      storeid : req.body.storeid,
    });

    vcategory.save().then(() => res.send({
      success: true,
      // data: res,
      message: "creatd successfully",
    })).catch((err) =>{
      res.send({
        success: false,
        data: "internal server error",
        message: err.message,
      });
    })
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

const deleteVendorCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await VendorCategory.findByIdAndDelete(id);
    // await Customer.deleteOne({_id: new mongoose.Types.ObjectId(email)});
    res.json({
      success: true,
      message: "VendorCategory deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

const getVendorCategory = async (req, res) => {
  try {
    const vendorCategories = await VendorCategory.find({});
    res.status(200).json({
      success: true,
      data: vendorCategories,
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

const getVendorCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const vendorCategory = await VendorCategory.findById({ _id: id });

    if (!vendorCategory) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendorCategory,
      message: `VendorCategory ${id} data fetch successfuly`,
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

//  category based on store
const getVendorCategoryByStoreID = async (req, res) => {
  try {
    const id = req.body.storeid;
    const vendorCategory = await VendorCategory.findOne({ storeid: id });

    if (!vendorCategory) {
      return res.status(404).json({
        success: false,
        message: "No data find store Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendorCategory,
      message: `VendorCategory ${id} data fetch successfuly`,
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

const updateVendorCategory = async (req, res) => {
  try {
    const { id, name, catimage, status, vid, storeid } = req.body;
    const vendorCategory = await VendorCategory.findByIdAndUpdate(
      { _id: id },
      { name, catimage, status, vid, storeid },
      { new: true }
    );

    if (!vendorCategory) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendorCategory,
      message: `VendorCategory ${id} data updated successfully`,
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
  createVendorCategory,
  getVendorCategory,
  getVendorCategoryById,
  deleteVendorCategory,
  updateVendorCategory,
  getVendorCategoryByStoreID
};
