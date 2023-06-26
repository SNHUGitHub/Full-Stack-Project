/* GET Checkout View */
const checkout = (req, res) => {
    pageTitle = "Travlr Getaways | Checkout"; // process.env.npm_package_description can only be accessed if you use 'npm start' *nodemon will not work
    res.render("checkout", { title: pageTitle });
  };
  
  module.exports = {
    checkout,
  };