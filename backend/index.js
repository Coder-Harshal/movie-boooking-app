const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const userRouter = require('./routes/user-routes');
// const adminRouter = require('./routes/admin-routes');
// const movieRouter = require('./routes/movie-routes');
// const bookingRouter = require('./routes/booking-routes');


mongoose.connect("mongodb+srv://harshalcoder711:HarCode711@movie-cluster.g7iedds.mongodb.net/")

dotenv.config();
// const cors = require('cors');
// app.use(cors());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// })