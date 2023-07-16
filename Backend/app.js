const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json());
require('./db/db')
const loginrouter=require("./Router/accountrouter")
app.use(loginrouter);
app.listen(5000);