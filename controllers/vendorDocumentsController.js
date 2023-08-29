const VendorDocument = require("../models/vendorDocument");

const updateVendorDocument = async (req, res) => {
  try {
    const {
      id,vid,fssailicensenumber, fssaiexpirydate, fssaistatus, Pannumber, Panlegalname, Panaddress, panstatus, Gstnumber, gststatus, druglicensenumber, drugstatus
    } = req.body;
    const vendorDocument = await VendorDocument.findByIdAndUpdate(
      { _id: id },
      {
        vid,fssailicensenumber, fssaiexpirydate, fssaistatus, Pannumber, Panlegalname, Panaddress, panstatus, Gstnumber, gststatus, druglicensenumber, drugstatus
      },
      { new: true }
    );

    if (!vendorDocument) {
      return res.status(404).json({
        success: false,
        message: "No data found with  Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendorDocument,
      // message: `Vendor Document ${id} data updated successfully`,
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

const createVendorDocument = async (req, res) => {
  try {
    // extract title and description from request body
    const {
      vid,fssailicensenumber, fssaiexpirydate, fssaistatus, Pannumber, Panlegalname, Panaddress, panstatus, Gstnumber, gststatus, druglicensenumber, drugstatus
    } = req.body;
    // create a new VendorDocument Obj and insert in DB
    const response = await VendorDocument.create({
      vid,fssailicensenumber, fssaiexpirydate, fssaistatus, Pannumber, Panlegalname, Panaddress, panstatus, Gstnumber, gststatus, druglicensenumber, drugstatus
    });
    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Created Successfully",
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

const getVendorDocument = async (req, res) => {
  try {
    const vendorDocuments = await VendorDocument.find({});
    res.status(200).json({
      success: true,
      data: vendorDocuments,
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

const getVendorDocumentById = async (req, res) => {
  try {
    const id = req.params.id;
    const vendorDocument = await VendorDocument.findById({ _id: id });

    if (!vendorDocument) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendorDocument,
      message: `VendorDocument ${id} data fetch successfuly`,
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

const deleteVendorDocument = async (req, res) => {
  try {
    const { id } = req.params;
    await VendorDocument.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "VendorDocument details deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

module.exports = {
  updateVendorDocument,
  deleteVendorDocument,
  getVendorDocument,
  getVendorDocumentById,
  createVendorDocument,
};
