const mongoose=require('mongoose')
const productCategory = mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    categoryImage:{
        type:String,
        required:true
    },
    categoryDescription:{
        type:String,
    },
    categoryPrice:{
        type:Number,
    },
    categoryQuantity:{
        type:Number,
    },
    categoryStatus:{
        type:String,
    }
})
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productCode: {
        type: String,
        required: true
    },
    productImages: {
        type: [String],
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory',
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productDiscount: {
        type: Number,
        default: 0
    },
    productStock: {
        type: Number,
        required: true
    },
    productType: String,
    productMfg: Date,
    productExpiry: Date,
    productTags: [String],
    productRatings: {
        type: String // Array of Rating subdocuments
    }
});

const userSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true
    }
})
const ProductCategory=mongoose.model("ProductCategory",productCategory)
const Product=mongoose.model("Product",productSchema)
const User=mongoose.model("User",userSchema)
module.exports={
    ProductCategory,
    Product,
    User

}