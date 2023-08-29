const Vendor = require("../models/vendor");


const loginVendor = async (req, res) => {
    try {
      // extract email and password from request body
      const { email, password } = req.body;
  
      // check if vendor exists with the given email
      const vendor = await Vendor.findOne({ email });
  
      if (!vendor) {
        return res.status(404).json({
          success: false,
          message: "Vendor not found with this email",
        });
      }
  
      // compare the password entered with the vendor's password
      if (vendor.password === password) {
        res.status(200).json({
          success: true,
          data: vendor,
          message: "Login successful",
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Invalid credentials",
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
  
  module.exports = {
    loginVendor,
  };