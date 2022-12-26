// here we will keep all the web related routes

const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')

// function initRoutes(app){
//     app.get('/', (req, res) => {
//         // res.send('Hello From Server')
//         res.render('home')
//         // res.render('Hello from server')
//         //we have set the path to render for the express in the app.set
//         //we can simply render the file in that location
//     })


function initRoutes(app) {
    app.get('/',homeController().index)

    
    //this will render the cart page
    
    //process.env is outside the app
    
    // it will firstly check the process.env
    // if it has the variable PORT it will run on that port
    // otherwise it will run on port 3000
    
    
    app.get('/login', authController().login)
    
    app.get('/register', authController().register)
    

    app.get('/cart', cartController().index)
    app.post('/update-cart',cartController().update)
    
}

//this exported module would be imported in the server.js
module.exports = initRoutes