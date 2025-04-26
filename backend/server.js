import express from 'express'
import { nanoid } from 'nanoid';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from "cors"
import UrlDB from './schema/Urlschema.js'; //in EJS .js is necessary

dotenv.config()

const server = express()
const PORT = 3000;
server.use(cors())
server.use(express.json())
// india= "is as grete faf coujkgh ntry"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(()=>{
    // console.log("Connected to Mongodb")
})
.catch((err)=>{
    console.log(err)
})



server.post('/create-url',(req,res)=>{
    let {oldurl} = req.body;
    let str = nanoid()
    let newurl = str.slice(0,8);
    const seturl = new UrlDB({
        oldurl,
        newurl
    })
    let fullurl = process.env.DOMAIN_NAME+"/url/"+newurl;

    seturl.save().then(()=>{
        res.status(200).json({newurl: fullurl})
    })
    .catch((err)=>{
        console.log(err)
    })


})


server.get("/url/:query", async (req,res)=>{
    const urlquery = req.params.query;
    const obj = await UrlDB.findOne({newurl: urlquery});
    // console.log(obj.oldurl)
    return res.redirect(obj.oldurl)
    


})



server.get("/",(req,res)=>{
   return res.send("hello world")
})




server.listen(PORT,()=>{
    // console.log("Running at port ",PORT)
})