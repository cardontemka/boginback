const express = require("express");
const connect = require("./common/config/db");
const cors = require("cors");
const { userRoutes } = require("./routes/userRouter");
const { authRouter } = require("./routes/authRouter");
const { linkRoutes } = require("./routes/linkRouter");
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8080

app.use(cors());
app.use(express.json());

connect();

app.use(userRoutes)
app.use(authRouter)
app.use(linkRoutes)
 
app.get('/', (req, res) => {
    res.send('Wasup Word!')
})

app.listen(port, () => {
    console.log('Server running at:', port)
})