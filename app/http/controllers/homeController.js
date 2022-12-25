function homeController() {
  //factory functions - pattern for writing functions
  //it is general object creation

  //if we want to fetch the data we need the model
  const Menu = require("../../models/menu");
  return {
    //grouping methods
    //index is the key
    async index(req, res) {
      //Menu.find().then(function (pizzas) {
      const pizzas = await Menu.find()
      console.log(pizzas)
        // find method is used to fetch all the data
        //then executes when data is received
        return res.render("home", { pizzas: pizzas });
        //first pizzas is the key
        //and we are passing the pizzas of the functio to this key which is an array of objects
      }
    }
  }


module.exports = homeController;
