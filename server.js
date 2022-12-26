// firstly we will create the express server
// for that we will first have to import the express module

//1.
require('dotenv').config()    //here config is method and we are calling
const express = require("express");
const app = express();

//4.
//Configuring the template engine
const ejs = require("ejs");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const PORT = process.env.PORT || 3000;
//here app and express are random variables
// app is variable
// express is the function used

//session
const session=require('express-session')

const mongoose = require('mongoose');
const { Store } = require('express-session');
const flash = require('express-flash')
const MongoDbStore = require('connect-mongo')(session)


//Database Connection

//snippet for connection to MongoDB that we use every time
const url = "mongodb://0.0.0.0:27017/pizza";

mongoose.connect(url).then(() => console.log("Connected!"));
// mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true });
 const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('Database connected...');
// }).catch(err => {
//   console.log('Connection failed...')
// });


//session store
let mongoStore=new MongoDbStore({
  mongooseConnection: connection,
  collection:'sessions'
})

//session confi
app.use(flash())
app.use(session({
  secret: 'thisismysecret'||
  process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
 store: mongoStore,

  cookie:{maxAge:1000*60*60*24}   //lifetime 24hrs 
}))


//Assets
app.use(express.static("public"));
//this will set the public folder as a whole for the designing purpose
app.use(express.json())



//GLobal middlewares
app.use((req,res,next)=>{
  res.locals.session = req.session
  next()
})


//set template engine
app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

//routes should always be after the expressLayout setting

//3.
//the route of the / is inside the web.js

require("./routes/web")(app);

//2.
app.listen(PORT, () => {
  // it will always print the same line
  //to hardcore it we can use

  console.log(`listening on port ${PORT}`);
});

// to run the above file run the command "node server.js"
// but the problem here is that everytime we change the content of the file we have to run the command 'node server.js' again and again

// now to run the server we just need to give the command as 'yarn serve' which is defined in package.json

//also we have to restart the server evertime
// to handle the issue we have added the scripts menu in the package.json file
// for development we will use the "dev" script
// for deploying on live server we will use the "serve" script

//now to run this scripts present in the package.json file we simply need to type "npm run dev" or "yarn dev"

//now whenever we make any changes the server will restart automatically
