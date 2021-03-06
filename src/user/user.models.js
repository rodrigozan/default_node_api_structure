import mongoose from "mongoose"
const Schema  = mongoose.Schema

const UserSchema = new Schema({
    name: String,
    email: String
})

const UserModel = mongoose.model('UserModel', UserSchema)

export { UserModel }