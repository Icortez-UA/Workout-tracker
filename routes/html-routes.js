var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
// this serves our index page 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  app.get("/profile",function(req,res){
    res.sendFile(path.join(__dirname, "./public/profile.html"));
  });

 

};





