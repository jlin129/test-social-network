const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require ("./routes/user");
const postRoutes = require ("./routes/post");
const cors=require("cors");

const app = express();
const port = process.env.PORT || 9000;  //default service port or 9000
//const uri = "mongodb+srv://admin:admin123@cluster0.miu7zc6.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb://mongodb:27017";

// cors settings
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))

// middlewares
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', postRoutes);

// server routes
app.get('/', (req, res) => {
    res.send("Social network RES API test")
})

// mongodb connections
mongoose
    .connect(uri).then(() => console.log("Successfully connected to MongoDB, uri: " + uri))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('Server listening on port', port));