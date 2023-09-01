
const express = require("express");
const app = express();
const cors = require('cors')
var bodyParser= require('body-parser');
const ejs= require('ejs');
// const customFunctions = require('./controllers/paymentController');
// //load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.use(cors())
//middleware to parse json request body
app.use(express.json());
// app.use(express.static());
app.use('/uploads', express.static('uploads'));
//import routes for TODO API
const routes = require("./routes/routes");
// const imageUpload = require("./maincomponent/imageUpload");

//mount the todo API routes
app.use("/api/v1", routes);
// app.use("/api/v1", imageUpload);


//start server
app.listen(PORT, ()=>{
    console.log("Server running")
})

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route

app.use(express.static(__dirname + '/views'));
app.engine('html', require('ejs').renderFile);
app.set("view engine", "html"); 
app.set("views", __dirname + "/views"); 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/', require('./routes/server'));



