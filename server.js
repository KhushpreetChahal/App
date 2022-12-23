// firstly we will create the express server
// for that we will first have to import the express module

//1.
const express = require('express')
const app = express()

//4.
//Configuring the template engine
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3000
//here app and express are random variables
// app is variable
// express is the function used


//Assets
app.use(express.static('public'))
//this will set the public folder as a whole for the designing purpose


//set template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')


//routes should always be after the expressLayout setting

//3.
app.get('/', (req, res) => {
    // res.send('Hello From Server')
    res.render('home')
    // res.render('Hello from server')
    //we have set the path to render for the express in the app.set
    //we can simply render the file in that location
})


app.get('/cart', (req, res) => {
    res.render('customers/cart')
})
//this will render the cart page

//process.env is outside the app

// it will firstly check the process.env
// if it has the variable PORT it will run on that port
// otherwise it will run on port 3000

//2.
app.listen(PORT, () => {

    // it will always print the same line
    //to hardcore it we can use 
    
    console.log(`listening on port ${PORT}`)
})

// to run the above file run the command "node server.js"
// but the problem here is that everytime we change the content of the file we have to run the command 'node server.js' again and again

// now to run the server we just need to give the command as 'yarn serve' which is defined in package.json



//also we have to restart the server evertime
// to handle the issue we have added the scripts menu in the package.json file
// for development we will use the "dev" script
// for deploying on live server we will use the "serve" script


//now to run this scripts present in the package.json file we simply need to type "npm run dev" or "yarn dev"

//now whenever we make any changes the server will restart automatically