
const express = require("express");
const app = express();
const cors = require('cors')
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
app.get("/", (req, res) => {
    res.send(`<h1> This is HOMEPAGE</h1>`);
})



