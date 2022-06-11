const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require ("./routes/user");

const app = express();
const port = process.env.PORT || 9000;  //default service port or 9000
const uri = "mongodb+srv://admin:admin123@cluster0.miu7zc6.mongodb.net/?retryWrites=true&w=majority";

// middlewares
app.use(express.json());
app.use('/api', userRoutes);

// server routes
app.get('/', (req, res) => {
    res.send("Social network RES API test")
})

// mongodb connections
mongoose
    .connect(uri).then(() => console.log("Successfully connected to MongoDB"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('Server listening on port', port));