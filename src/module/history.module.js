const mongoose = require('mongoose');
const schema = require('mongoose').Schema;
const historyModel = new schema({
    username:{
        type:String
    },
    date:{
        type:Date,
    },
    survivalTime:{
        type:String,
        default:""
    },
    point:{
        type:String,
        default:""
    }
},{
    timestamps:true
});

module.exports = mongoose.model("history",historyModel);