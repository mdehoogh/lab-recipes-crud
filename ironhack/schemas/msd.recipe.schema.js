/*
 * Generated by: Office Vitae Mongoose Schema Designer
 * At: 13 december 2019
 * Author: Marc de Hoogh
 */

const mongoose=require('mongoose');
// Comment out the following lines if you're not using the integer data types provided by the mongoose-long and mongoose-int32 libraries.
require('mongoose-long')(mongoose);
var Int32=require('mongoose-int32');

const recipeSchema=mongoose.Schema({
                                    title:{type:mongoose.Schema.Types.String,unique:true},
                                    level:{type:mongoose.Schema.Types.String,required:true,enum:['Easy Peasy','Amateur Chef','UltraPro Chef']},
                                    ingredients:[String],
                                    cuisine:{type:mongoose.Schema.Types.String,required:true},
                                    dishType:{type:mongoose.Schema.Types.String,enum:['Breakfast','Dish','Snack','Drink','Dessert','Other']},
                                    image:{type:mongoose.Schema.Types.String,default:'https://images.media-allrecipes.com/images/75131.jpg'},
                                    duration:{type:mongoose.Schema.Types.Number,min:0.0},
                                    creator:mongoose.Schema.Types.String,
                                    created:{type:mongoose.Schema.Types.Date,default:Date.now}
                                   });
module.exports=recipeSchema;
