const express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

const checksum_lib = require("../maincomponent/Paytm/checksum");
const PaytmConfig = require("../maincomponent/PaytmConfig");

var txn_url = "https://securegw-stage.paytm.in/order/process"; // for staging

var callbackURL = "http://localhost:5000/paymentReceipt";

//CORS ACCESS CONTROL

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const postPayment =  (req, res) => {
  let paymentData = req.body;
  var params = {};
  params["MID"] = "VtJgIy49344120067825";
  params["WEBSITE"] = "WEBSTAGING";
  params["CHANNEL_ID"] = "WEB";
  params["INDUSTRY_TYPE_ID"] = "Retail";
  params["ORDER_ID"] = paymentData.orderID;
  params["CUST_ID"] = paymentData.custID;
  params["TXN_AMOUNT"] = paymentData.amount;
  params["CALLBACK_URL"] = callbackURL;
  params["EMAIL"] = paymentData.custEmail;
  params["MOBILE_NO"] = paymentData.custPhone;
  // console.log(params);

  checksum_lib.genchecksum(params, "SvRx3!!KFTA7m#VH", (err, checksum) => {
    if (err) {
      console.log("Error: " + e);
    }

    var form_fields = "";
    for (var x in params) {
      form_fields +=
        "<input type='hidden' name='" + x + "' value='" + params[x] + "' >";
    }
    form_fields +=
      "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' +
        txn_url +
        '" name="f1">' +
        form_fields +
        '</form><script type="text/javascript">document.f1.submit();</script></body></html>'
    );
    res.end();
  });
};

const paymentReceipt = (req, res) => {
  let responseData = req.body;
  var checksumhash = responseData.CHECKSUMHASH;
  var result = checksum_lib.verifychecksum(
    responseData,
    PaytmConfig.key,
    checksumhash
  );
  if (result) {
    return res.send({
      status: 0,
      data: responseData
    });
  } else {
    return res.send({
      status: 1,
      data: responseData


    });
  }
};

module.exports={
  postPayment,
paymentReceipt
}
