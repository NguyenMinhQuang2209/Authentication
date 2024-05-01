const mongoose = require('mongoose');
const schema = require('mongoose').Schema;
const itemModel = new schema({
    itemName:{
        type:String
    },
    itemType:{
        type:String
    },
    datas:{
        type:[
            {
                key:String,
                value:String
            }
        ]
    }
},{
    timestamps:true
});

module.exports = mongoose.model("item",itemModel);