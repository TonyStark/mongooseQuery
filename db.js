const mongoose=require('mongoose')
mongoose.connect("DATABASE_URI")
    .then(()=>console.log("connected"))
