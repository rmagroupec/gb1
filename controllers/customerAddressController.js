const CustomerAddress = require("../models/customerAddress");

//define route handler

const createCustomerAddress = async (req, res) => {
    try {
        //extract title and desxcription from reauest body
        const { name, address, city, state, complete_address, latitude, longitude, cid } = req.body;
        //create a new CustomerAddress Obj and insert in DB
        const response = await CustomerAddress.create({
            name,
            address,
            city,
            state,
            complete_address,
            latitude,
            longitude,
            cid,
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

const deleteCustomerAddress = async (req, res) => {
    try {
        const { id } = req.params;
        await CustomerAddress.findByIdAndDelete(id);
        // await Customer.deleteOne({_id: new mongoose.Types.ObjectId(email)});
        res.json({
            success: true,
            message: "CustomerAddress deleted",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        });
    }
};

const getCustomerAddress = async (req, res) => {
    try {
        const customerAddresses = await CustomerAddress.find({});
        res.status(200).json({
            success: true,
            data: customerAddresses,
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

const getCustomerAddressById = async (req, res) => {
    try {
        const id = req.params.id;
        const customerAddress = await CustomerAddress.findById({ _id: id });

        if (!customerAddress) {
            return res.status(404).json({
                success: false,
                message: "No data find right Id",
            });
        }
        res.status(200).json({
            success: true,
            data: customerAddress,
            message: `CustomerAddress ${id} data fetch successfuly`,
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

const updateCustomerAddress = async (req, res) => {
    try {
        const { id, name, address, city, state, complete_address, latitude, longitude, cid } = req.body;
        const customerAddress = await CustomerAddress.findByIdAndUpdate(
            { _id: id },
            { name, address, city, state, complete_address, latitude, longitude, cid },
            { new: true }
        );

        if (!customerAddress) {
            return res.status(404).json({
                success: false,
                message: "No data found with right Id",
            });
        }
        res.status(200).json({
            success: true,
            data: customerAddress,
            message: `CustomerAddress ${id} data updated successfully`,
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
    createCustomerAddress, deleteCustomerAddress, getCustomerAddress, getCustomerAddressById, updateCustomerAddress
};
