// const { model } = require("mongoose");
const VendorStore = require("../models/vendorStore");
const multer =  require('multer');
const updateVendorStore = async (req, res) => {
  try {
    const {
      id, vid, storename, address, city, state, streetNumber, zipcode, CountryCode, latitude, longitude, storeimage, storeopeningtime, storeclosingtime, sunday, monday, tuesday, wednesday, thursday, friday, saturday, category, storeOwner, services
    } = req.body;
    const vendorStore = await VendorStore.findByIdAndUpdate(
      { _id: id },
      {
        vid, storename, address, city, state, streetNumber, zipcode, CountryCode, latitude, longitude, storeimage, storeopeningtime, storeclosingtime, sunday, monday, tuesday, wednesday, thursday, friday, saturday, category, storeOwner, services
      },
      { new: true }
    );

    if (!vendorStore) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendorStore,
      message: `Vendor Store ${id} data updated successfully`,
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

const getVendorStore = async (req, res) => {
  try {
    const vendors = await VendorStore.find({});
    res.status(200).json({
      success: true,
      data: vendors,
      // message: "get of Data Successfully",
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

const getVendorStoreById = async (req, res) => {
  try {
    const id = req.params.id;
    const vendor = await VendorStore.findById({ _id: id });

    if (!vendor) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendor,
      message: `Vendor ${id} data fetch successfuly`,
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

const deleteVendorStore = async (req, res) => {
  try {
    const { id } = req.params;
    await VendorStore.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Vendor deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

const Storage = multer.diskStorage({
  destination:'./uploads',
  filename:(req, file, cb)=>{
    cb(null, file.originalname)
  },
});

const upload = multer({
  storage:Storage,

}).single('storeimage')
const createVendorStore = async (req, res) => {
  try {
    // extract title and description from request body
    
    // create a new VendorStore Obj and insert in DB
    upload(req, res, async(err) => {
    const vendorStor = new VendorStore({
      address:req.body.address,
      category:req.body.category,
      city:req.body.city,
      CountryCode:req.body.CountryCode,
      friday:req.body.friday,
      latitude:req.body.latitude,
      longitude:req.body.longitude,
      monday:req.body.monday,
      saturday:req.body.saturday,
      services:req.body.services,
      state:req.body.state,
      storename:req.body.storename,
      storeOwner:req.body.storeOwner,
      storeopeningtime:req.body.storeopeningtime,
      storeclosingtime:req.body.storeclosingtime,
      streetNumber:req.body.streetNumber,
      sunday:req.body.sunday,
      thursday:req.body.thursday,
      tuesday:req.body.tuesday,
      vid:req.body.vid,
      wednesday:req.body.wednesday,
      zipcode:req.body.zipcode,
      storeimage:req.file.filename
    })
    // send a json response with a success flag
    vendorStor.save().then(() => res.send({
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
  })
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
  getVendorStore,
  getVendorStoreById,
  createVendorStore,
  updateVendorStore,
  deleteVendorStore,
};
