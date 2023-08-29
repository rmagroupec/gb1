//import th model
const Role = require("../models/role");

//define route handler

const createRole = async (req, res) => {
  try {
    //extract title and desxcription from reauest body
    const { role_name } = req.body;
    //create a new Role Obj and insert in DB
    const response = await Role.create({ role_name });
    //send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Role Created Successfully",
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

const getRole = async (req, res) => {
  try {
    const roles = await Role.find({});
    res.status(200).json({
      success: true,
      data: roles,
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

const getRoleById = async (req, res) => {
  try {
    const id = req.params.id;
    const role = await Role.findById({ _id: id });

    if (!role) {
      return res.status(404).json({
        success: false,
        message: "No data find right Id",
      });
    }
    res.status(200).json({
      success: true,
      data: role,
      message: `Role ${id} data fetch successfuly`,
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
  getRole,
  getRoleById,
  createRole,
};
