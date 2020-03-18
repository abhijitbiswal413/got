const mongoose = require('mongoose');

const battleSchema = new mongoose.Schema({
    name :{
        type:String,
        //required:true,
    },
    year:{
        type:Number,
        //required:true,
    },
    battle_number:{
        type:Number,
        //required:true,
    },
    attacker_king : String,
    defender_king : String,
    attacker_1 : {
        type : String,
        //required : true,
    },
    attacker_2 : String,
    attacker_3 : String,
    attacker_4 : String,
    defender_1 : String,
    defender_2 : String,
    defender_3 : String,
    defender_4 : String,
    attacker_outcome : {
        type : String,
        //default : true,
    },
    battle_type : { // 0=pitched,1=ambush,3=seige
        type : String,
        //required : true,
    },
    major_death : {
        type : Number,
        default : 0,
    },
    major_capture : {
        type : Number,
        default : 0, 
    },
    attacker_size : Number,
    defender_size : Number,
    attacker_commander : String,
    defender_commander : String,
    summer : {
        type : Number,
        //default : true,
    },
    location : String,
    region : String,
});

module.exports = mongoose.model("Battle",battleSchema);