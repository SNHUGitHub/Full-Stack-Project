/* GET Login View */
const login = (req, res) => {
    pageTitle = "Travlr Getaways | Login"; 
    res.render("login", { title: pageTitle });
  };
  
  module.exports = {
    login,
  };