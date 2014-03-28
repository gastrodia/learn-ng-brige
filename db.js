/**
 * Created by gastrodia on 14-3-28.
 */
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/pizza');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var PizzaSchema = new Schema({
    author : {
        type : String
    },
    color : {
        type : String
    },
    size : {
        type : Number
    },
    password : {   // You can hide it from read and write ! (cf after)
        type : String
    }
});

PizzaSchema.methods.query = function(entities) {
    console.log("Queried:");
    console.log(entities);
};

PizzaSchema.methods.get = function(entity) {
    console.log("Got:")
    console.log(entity);
};

PizzaSchema.methods.put = function(entity) {
    console.log("Put:")
    console.log(entity);
};

PizzaSchema.methods.post = function(entity) {
    console.log("Posted:")
    console.log(entity);
};

PizzaSchema.methods.delete = function(entity) {
    console.log("Deleted:")
    console.log(entity);
};

exports.Pizza = mongoose.model('pizzas', PizzaSchema);
