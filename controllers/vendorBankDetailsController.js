const VendorBankDetails = require("../models/vendorBankDetails");

const updateVendorBankDetails = async (req, res) => {
  try {
    const {
      id, vid, bankname, accountholdername, accountnumber, ifsccode, branchname, upiid
    } = req.body;
    const vendorBankDetails = await VendorBankDetails.findByIdAndUpdate(
      { _id: id },
      {
        vid, bankname, accountholdername, accountnumber, ifsccode, branchname, upiid
      },
      { new: true }
    );

    if (!vendorBankDetails) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendorBankDetails,
      message: `Vendor Bank Details ${id} data updated successfully`,
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

const getVendorBankDetails = async (req, res) => {
  try {
    const vendorBankDetailss = await VendorBankDetails.find({});
    res.status(200).json({
      success: true,
      data: vendorBankDetailss,
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

const getVendorBankDetailsById = async (req, res) => {
  try {
    const id = req.params.id;
    const vendorBankDetails = await VendorBankDetails.findById({ _id: id });

    if (!vendorBankDetails) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendorBankDetails,
      // message: `VendorBankDetails ${id} data fetch successfuly`,
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

const deleteVendorBankDetails = async (req, res) => {
  try {
    const { id } = req.params;
    await VendorBankDetails.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Vendor bank details deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

const createVendorBankDetails = async (req, res) => {
  try {
    // extract title and description from request body
    const {
      vid, bankname, accountholdername, accountnumber, ifsccode, branchname, upiid
    } = req.body;
    // create a new VendorBankDetails Obj and insert in DB
    const response = await VendorBankDetails.create({
      vid, bankname, accountholdername, accountnumber, ifsccode, branchname, upiid
    });
    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "vendor bank details Created Successfully",
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
  updateVendorBankDetails,
  createVendorBankDetails,
  getVendorBankDetails,
  getVendorBankDetailsById,
  deleteVendorBankDetails,
};
