import mongoose, { Mongoose } from "mongoose";


const BookScheme = new Mongoose.Scheme({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

const book = mongoose.model('book',BookScheme);

export default book;