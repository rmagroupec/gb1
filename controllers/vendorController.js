const Vendor = require("../models/vendor");
const otpGenerator = require('otp-generator');

const createVendor = async (req, res) => {
  try {
    // extract title and description from request body
    const {
      name,
      email,
      password,
      phone,
    } = req.body;
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    // create a new Vendor Obj and insert in DB
    const creatUser = await Vendor.findOne({ email });
    if (!creatUser) {
      const newVendor = await Vendor.create({ name,
        email,
        password,
        phone, otp });

      res.status(200).json({
        success: true,
        phone: otp,
        message: "regiseterd successfully",
      });

    }
    else { res.status(200).json({
        success: false,
        // phone: otp,
        message: "already regiseterd ",
      });
    }
    
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


// vendor otp varification
const vendorOptVerfication = async (req, res) => {

  //extract title and desxcription from reauest body
  const { otp, email } = req.body;

  const user = await validateVendorSignUp(email, otp, );
  res.send(user);

}

const validateVendorSignUp = async (email, otp) => {
  const user = await Vendor.findOne({
    email,
  });
  if (!user) {
    return [false, 'vendor not found'];
  }
  if (user && user.otp !== otp) {
    return [false, 'Invalid OTP'];
  }
  const updatedUser = await Vendor.findByIdAndUpdate(user._id, {
    $set: { status: "active" },
  });
  return [true, updatedUser,];
}
const updateVendor = async (req, res) => {
  try {
    const {
      id,
      name,
      email,
      phone,
    
    } = req.body;
    const vendor = await Vendor.findByIdAndUpdate(
      { _id: id },
      {
        name,
        email,
        phone,
      },
      { new: true }
    );

    if (!vendor) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendor,
      message: `Vendor ${id} data updated successfully`,
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

const getVendor = async (req, res) => {
  try {
    const vendors = await Vendor.find({});
    res.status(200).json({
      success: true,
      data: vendors,
      // message: " Data Successfully",
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

const getVendorById = async (req, res) => {
  try {
    const id = req.params.id;
    const vendor = await Vendor.findById({ _id: id });

    if (!vendor) {
      return res.status(404).json({
        success: false,
        message: "No data found with Id",
      });
    }
    res.status(200).json({
      success: true,
      data: vendor,
      // message: `Vendor ${id} data fetch successfuly`,
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

const deleteVendor = async (req, res) => {
  try {
    const { id } = req.params;
    await Vendor.findByIdAndDelete(id);
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

module.exports = {
  getVendor,
  getVendorById,
  updateVendor,
  createVendor,
  vendorOptVerfication,
  deleteVendor,
};
