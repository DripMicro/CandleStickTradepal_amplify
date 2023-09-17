const mongoose = require("mongoose");

mongoose.connect("mongodb://98.227.46.119:27017/CandleStick_TradePal").then(() => {
    console.log("Database connected!");
}).catch((err) => {
    console.log(err, " error");
})                  
