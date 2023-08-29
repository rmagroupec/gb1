const express = require("express");
const router = express.Router();



//cartModel controller
const {
  createCartModel,
  getCartModel,
  getCartModelById,
  deleteCartModel,
  updateCartModel,
} = require("../controllers/cartModelController");

//cartProduct controller
const {
  createCartProduct,
  getCartProduct,
  getCartProductById,
  deleteCartProduct,
  updateCartProduct,
  // increaseCartProductQuantity,
  // decreaseCartProductQuantity,
  increaseDecreaseQuantity
} = require("../controllers/cartProductController");

//productimage controller
const {
  createProductImage,
  getProductImage,
  getProductImageById,
  deleteProductImage,
  updateProductImage,
} = require("../controllers/productImageController");

//Producttag controller
const {
  createProductTag,
  getProductTag,
  getProductTagById,
  deleteProductTag,
  updateProductTag,
} = require("../controllers/productTagController");

//vendorcategory controller
const {
  createVendorCategory,
  getVendorCategory,
  getVendorCategoryById,
  deleteVendorCategory,
  updateVendorCategory,
  getVendorCategoryByStoreID
} = require("../controllers/vendorCategoryController");

//vendorProductModel controller
const {
  createVendorProduct,
  getVendorProduct,
  getVendorProductById,
  deleteVendorProduct,
  updateVendorProduct,
} = require("../controllers/vendorProductController");


//customer controller

const {
  // createCustomer,
  getCustomer,
  getCustomerById,
  deleteCustomer,
  updateCustomer,
  customerRegistration,
  optVerfication,
  createCustomerProfile
} = require("../controllers/customerController");


const {
  createCustomerAddress, deleteCustomerAddress, getCustomerAddress, getCustomerAddressById, updateCustomerAddress

} = require("../controllers/customerAddressController")


//admin controller
const {
  createAdmin,
  getAdmin,
  getAdminById,
  deleteAdmin,
  updateAdmin,
} = require("../controllers/adminController");


//role controller
const {
  createRole,
  getRole,
  getRoleById,
} = require("../controllers/roleController");

// vendor controller
const {
  createVendor,
  getVendor,
  vendorOptVerfication,
  getVendorById,
  deleteVendor,
  updateVendor,
} = require("../controllers/vendorController");

// vendor bank details controller
const {
  createVendorBankDetails,
  getVendorBankDetails,
  getVendorBankDetailsById,
  deleteVendorBankDetails,
  updateVendorBankDetails,
} = require("../controllers/vendorBankDetailsController");

// vendor documents controller
const {
  createVendorDocument,
  getVendorDocument,
  getVendorDocumentById,
  deleteVendorDocument,
  updateVendorDocument,
} = require("../controllers/vendorDocumentsController");

// vendor store controller
const {
  createVendorStore,
  getVendorStore,
  getVendorStoreById,
  deleteVendorStore,
  updateVendorStore,
} = require("../controllers/vendorStoreController");

// main categ. controller
const {
  createMainCategory,
  getMainCategory,
  getMainCategoryById,
  deleteMainCategory,
  updateMainCategory,
  testcategory
} = require("../controllers/mainCategoryController");


const { loginVendor } = require("../controllers/loginController");

//define APi routes

router.post("/loginVendor", loginVendor);

// customer profile 
router.post("/createCustomerProfile", createCustomerProfile);
router.get("/getCustomer/:phone", getCustomer);
router.get("/getCustomer/:id", getCustomerById);
router.delete("/deleteCustomer/:id", deleteCustomer);
router.post("/customerRegistration", customerRegistration)
router.post("/optVerfication", optVerfication)



//customer address
router.post("/createCustomerAddress", createCustomerAddress)
router.get("/getCustomerAddress", getCustomerAddress);
router.get("/getCustomerAddress/:id", getCustomerAddressById);
router.delete("/deleteCustomerAddress/:id", deleteCustomerAddress);

//role
router.post("/createRole", createRole);
router.get("/getRole", getRole);
router.get("/getRole/:id", getRoleById);

//vendor
router.post("/createVendor", createVendor);
router.post("/vendor_otp_varification", vendorOptVerfication);
router.get("/getVendor", getVendor);
router.get("/getVendor/:id", getVendorById);
router.delete("/deleteVendor/:id", deleteVendor);
router.delete("/updateVendor", updateVendor);

//vendorBankDetils
router.post("/createVendorBankDetails", createVendorBankDetails);
router.get("/getVendorBankDetails", getVendorBankDetails);
router.get("/getVendorBankDetails/:id", getVendorBankDetailsById);
router.delete("/deleteVendorBankDetails/:id", deleteVendorBankDetails);
router.delete("/updateVendorBankDetails", updateVendorBankDetails);

//vendor document
router.post("/createVendorDocument", createVendorDocument);
router.post("/updateVendorDocument", updateVendorDocument);
router.get("/getVendorDocument", getVendorDocument);
router.get("/getVendorDocument/:id", getVendorDocumentById);
router.delete("/deleteVendorDocument/:id", deleteVendorDocument);

//vendor Store
router.post("/createVendorStore", createVendorStore);
router.get("/getVendorStore", getVendorStore);
router.get("/getVendorStore/:id", getVendorStoreById);
router.delete("/deleteVendorStore/:id", deleteVendorStore);
router.delete("/updateVendorStore", updateVendorStore);

// admin Controller
router.post("/createAdmin", createAdmin);
router.get("/getAdmin", getAdmin);
router.get("/getAdmin/:id", getAdminById);
router.delete("/deleteAdmin/:id", deleteAdmin);

//main category
router.post("/create_main_category", createMainCategory);
router.post("/create_test_category", testcategory);
router.get("/get_main_category", getMainCategory);
router.get("/getMainCategory/:id", getMainCategoryById);
router.delete("/deleteMainCategory/:id", deleteMainCategory);


//cartModel
router.post("/createCartModel", createCartModel);
router.get("/getCartModel", getCartModel);
router.get("/getCartModel/:id", getCartModelById);
router.delete("/deleteCartModel/:id", deleteCartModel);

//cartProduct
router.post("/createCartProduct", createCartProduct);
router.get("/getCartProduct", getCartProduct);
router.get("/getCartProduct/:id", getCartProductById);
router.delete("/deleteCartProduct/:id", deleteCartProduct);

//productimage
router.post("/createProductImage", createProductImage);
router.get("/getProductImage", getProductImage);
router.get("/getProductImage/:id", getProductImageById);
router.delete("/deleteProductImage/:id", deleteProductImage);

//Producttag
router.post("/createProductTag", createProductTag);
router.get("/getProductTag", getProductTag);
router.get("/getProductTag/:id", getProductTagById);
router.delete("/deleteProductTag/:id", deleteProductTag);

//vendorcategory
router.post("/createVendorCategory", createVendorCategory);
router.get("/getVendorCategory", getVendorCategory);
router.get("/getVendorCategory/:id", getVendorCategoryById);
router.delete("/deleteVendorCategory/:id", deleteVendorCategory);
router.delete("/updatevendorCategory", updateVendorCategory);
router.get("/getCategoryByStore", getVendorCategoryByStoreID);

//vendorProductModel
router.post("/createVendorProduct", createVendorProduct);
router.get("/getVendorProduct", getVendorProduct);
router.get("/getVendorProduct/:id", getVendorProductById);
router.delete("/deleteVendorProduct/:id", deleteVendorProduct);




//update routes
router.put("/updateAdmin", updateAdmin);
router.put("/updateCustomer", updateCustomer);
router.put("/updateCustomerAddress", updateCustomerAddress);
router.put("/updateVendor", updateVendor);
router.put("/updateVendorBankDetails", updateVendorBankDetails);
router.put("/updateVendorDocument", updateVendorDocument);
router.put("/updateVendorStore", updateVendorStore);
router.put("/updateMainCategory", updateMainCategory);
router.put("/updateCartModel", updateCartModel);
router.put("/updateCartProduct", updateCartProduct);
router.put("/updateProductImage", updateProductImage);
router.put("/updateProductTag", updateProductTag);
router.put("/updateVendorCategory", updateVendorCategory);
router.put("/updateVendorProduct", updateVendorProduct);
router.put("/increaseDecreaseQuantity/:path", increaseDecreaseQuantity);


module.exports = router;
