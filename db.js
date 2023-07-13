const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/KeeperDB')
    .then(()=>{
        console.log("Database is connected !");
    })


//Note Schema
const noteSchema = new mongoose.Schema(
    {
        title : String,
        content : String
    }
)

const Note = mongoose.model('Note',noteSchema);

//List Schema
const listSchema = new mongoose.Schema(
    {
        note : [noteSchema]
    }
);

const List = mongoose.model('List',listSchema);

//User Schema
const userSchema = new mongoose.Schema(
    {
        email : String,
        password : String,
        notes : listSchema
    }
);

const note = new Note({
    title : "Pakaya",
    content : "Ado"
})


const User = mongoose.model('User',userSchema);

module.exports = { User, Note, List };

