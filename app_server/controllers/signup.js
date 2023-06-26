/* GET Sign Up View */
const signup = (req, res) => {
    pageTitle = "Travlr Getaways | Sign Up"; // process.env.npm_package_description can only be accessed if you use 'npm start' *nodemon will not work
    res.render("signup", { title: pageTitle });
  };
  
  module.exports = {
    signup,
  };