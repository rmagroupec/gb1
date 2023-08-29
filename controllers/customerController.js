//import th model
const customer = require("../models/customer");
const Customer = require("../models/customer");

const otpGenerator = require('otp-generator')
//define route handler

const customerRegistration = async (req, res) => {
  try {
    const { phone } = req.body;
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    const creatUser = await Customer.findOne({ phone });
    if (!creatUser) {
      const newCustomer = await Customer.create({ phone, otp });

      res.status(200).json({
        success: true,
        phone: otp,
        message: "regiseterd successfully",
      });

    }
    else {
      const newCustomer = await Customer.updateOne({ phone: phone, otp: otp });


      res.status(200).json({
        success: true,
        phone: otp,
        message: "regiseterd successfully",
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
}

const optVerfication = async (req, res) => {

  //extract title and desxcription from reauest body
  const { otp, phone, mob_notification } = req.body;

  const user = await validateUserSignUp(phone, otp, mob_notification);
  res.send(user);

}
const validateUserSignUp = async (phone, otp, mob_notification) => {
  const user = await Customer.findOne({
    phone,
  });
  if (!user) {
    return [false, 'User not found'];
  }
  if (user && user.otp !== otp) {
    return [false, 'Invalid OTP'];
  }
  const updatedUser = await Customer.findByIdAndUpdate(user._id, {
    $set: { status: "active", mob_notification: mob_notification },
  });
  return [true, updatedUser,];
}
const createCustomerProfile = async (req, res) => {

  const { name, email, phone, } = req.body;
  const user = await updateCustomerProfile(phone, name, email);
  res.send(user);
};

const updateCustomerProfile = async (phone, name, email) => {
  const user = await Customer.findOne({
    phone,
  });
  if (!user) {
    return [false, 'User not found'];
  }

  const updatedUser = await Customer.findByIdAndUpdate(user._id, {
    $set: { name: name, email: email },
  });
  return [true, updatedUser];

}

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    await Customer.findByIdAndDelete(id);
    // await Customer.deleteOne({_id: new mongoose.Types.ObjectId(email)});
    res.json({
      success: true,
      message: "Customer deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

const getCustomer = async (req, res) => {
  const phone = req.params.phone
  const customer = await Customer.findOne({ phone: phone });
  if (!customer) {
    res.send([false, "not found"])
  } else {
    res.send([true, customer])
  }


};

const getCustomerById = async (req, res) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findById({ _id: id });

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: customer,
      message: `Customer ${id} data fetch successfuly`,
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

const updateCustomer = async (req, res) => {
  try {
    const { id, name, email, phone, photo_url, role, mob_notification } =
      req.body;
    const customer = await Customer.findByIdAndUpdate(
      { _id: id },
      { name, email, phone, photo_url, role, mob_notification },
      { new: true }
    );

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "No data found with right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: customer,
      message: `Customer ${id} data updated successfully`,
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
  updateCustomer,
  createCustomerProfile,
  // createCustomer,
  deleteCustomer, getCustomer, getCustomerById, customerRegistration, optVerfication
}
