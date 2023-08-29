const mongoose = require('mongoose');


// const uri = 'mongodb+srv://yesrohit:Rohit123456@gravitybites.pp9np1t.mongodb.net/GravityBites1?retryWrites=true&w=majority&ssl=false'
const env1 = require("dotenv").config();

const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true

  }).then(() => {
    console.log("connection successfull")
  }).catch((err) => {
    console.log(err)
  })
}

// const client = new MongoClient(process.env.DATABASE_URL,
//   { useNewUrlParser: true, useUnifiedTopology: true });
// const dbConnect = async () => {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("GravityBites1").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

module.exports = dbConnect;