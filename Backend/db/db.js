const mongoose=require('mongoose')
mongoose.connect(`mongodb://127.0.0.1:27017/notes`)
.then(()=>{
    console.log("Database Connected Successfully")
})
.catch((e)=>{
    console.log("Database Connection Failed")
})