/*
 * Generated by: Office Vitae Mongoose Schema Designer
 * At: 13 december 2019
 * Author: Marc de Hoogh
 */

const recipeSchema=require('../schemas/msd.recipe.schema.js');

module.exports=(conn)=>{
  return(conn?conn:require('mongoose')).model('recipe',recipeSchema);
}