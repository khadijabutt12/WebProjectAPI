var mongoose=require("mongoose");
const Joi =require("@hapi/joi")
var productSchema = mongoose.Schema({
 BrandName:String,
 Description: String,    

});

var Product =mongoose.model("Product",productSchema);
//should be inside model
function validateProduct(data)
{
 const schema =Joi.object({
     BrandName:Joi.string().min(5).max(100).required(),
     Description:Joi.string().min(5).max(100).required()

 });
 return schema.validate(data,{abortEarly: false});
}
module.exports.Product= Product;
module.exports.validate= validateProduct;