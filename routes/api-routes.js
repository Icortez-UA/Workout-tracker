
const db = require("../models");

module.exports = function(app) {

app.get("/api/all",function(req,res){
    db.Workout.find({}).then(function(data){
        res.json(data);
    })
})

app.post("/api/new",(req,res)=>{
    db.Workout.create(req.body).then(data =>{
        console.log(data);
    })
})
app.post("/api/delete",(req,res)=>{
    console.log(req.body);
    db.Workout.findByIdAndDelete({
        _id: req.body.data
    }, 
        (error, data)=>{
            if(error){
                console.log("error in deleting yo!");
                throw error;
            } else {
                const response = {
                    message: "workout successfully deleted",
                    _id: req.body.data
                };
                return res.status(200).send(response);
    
            }
            
      })

})
}

