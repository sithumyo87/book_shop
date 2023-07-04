const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const customer_routes = require('./router/auth_users.js').authenticated;
const genl_routes = require('./router/general.js').general;
const auth_user = require('./router/auth_users.js').users;

const app = express();

app.use(express.json());

app.use("/customer",session({secret:"fingerprint_customer",resave: true, saveUninitialized: true}))

app.use("/customer/auth/*", function auth(req,res,next){
//Write the authenication mechanism here
    
});

 
const PORT =5000;

app.use("/customer", customer_routes);
app.use("/", genl_routes);
// app.use("/login", auth_user);

app.listen(PORT,()=>console.log("Server is running"));
