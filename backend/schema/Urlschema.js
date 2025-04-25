import mongoose from "mongoose";

const Urlschema = new mongoose.Schema({
    oldurl: {type: String, required: true},
    newurl: {type: String, required: true}
})

const UrlDB = mongoose.model('UrlDB',Urlschema)

// module.exports = {UrlDB}  used in commonjs

export default UrlDB;