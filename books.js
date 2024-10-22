// Schema Validation 
const mongoose = require('mongoose');
main()
    .then(()=>{
        console.log("connection successful!");
    })
    .catch((err) => console.log(err));
async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/amazon"); 
}
const bookSchema = new mongoose.Schema({
    // title: String, or if we have to give many conditions(Constraint)
    title: {
        type:String,
        required:true,
        maxLength:20,
        uppercase:true,
    },
    // author:String,
    author: {
        type:String,
    },
    // price:Number,
    price: {
        type: Number,
    },
    discount:{
        type:Number,
        default:0,
    }
});
const Book = mongoose.model("Book" , bookSchema);
let book1 = new Book({
    title:"Mathematics XII",
   
    price: "2",
})
book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
