// for password crypt
// npm i bcryptjs
// for inv file
// npm i dotenv
// for express 
// npm i express
// for mongodb
// npm i mongoose
// for temp;ate of form
// npm i zod

// *************** 1 *******
// for starting file
// npm i init

// for auto save
// npm i nodemon
// npm nodemon FILE
// for  diffrent server
// for connect server on client
// npm i cors

// for start server

// npm i init express bcryptjs dotenv mongoose zod nodemon cors 
// nodemon FILE(server folder(server))
// use dotenv on top
require('dotenv').config()
const express = require('express');
const app = express();
// use express.json after define app 
app.use(express.json())
const cors = require('cors');
const servicesRouter=require('./router/service-router')
const adminRouter=require('./router/admin-router')
// const corsOptions = {
//     origin: "http://localhost:5173",
//    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
//     credentials: true,
// }
// app.use(cors(corsOptions))
app.use(cors())
const connectdb=require('./utils/db')
const run=require('./utils/cloud')

const user=require('./router/user');
const contactRouter=require('./router/contact-router')

const errorMiddleware = require('./middlewares/error-middleware');

app.use('/user',user)
app.use('/form',contactRouter) 
app.get("/", (req, res) => {
 res.status(200).send("Hello World!");
})
app.use('/services',servicesRouter)
app.use('/admin',adminRouter)


app.use(errorMiddleware)

// run().then(()=>{
// app.listen(3000, () => {
//  console.log("Listening on port 3000");
// })


// })




connectdb().then(()=>{
app.listen(3000, () => {
 console.log("Listening on port 3000");
})
})



// const moment=require('moment')
// const todaysDate=moment().format('MMMM Do YYYY, h:mm:ss a')
// console.log(todaysDate)