const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const workoutSchema = new Schema(

    {
        workout: [{
        date: {
            type: String
         
        },
        startTime: {
            type: String

        },
        endTime: {
            type: String
        }
    }]

    }
);



const Workout = mongoose.model("Workout",workoutSchema );

module.exports = Workout;