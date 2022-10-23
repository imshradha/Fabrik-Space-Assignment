import mongoose from'mongoose';

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email_address: String,
    password: String
})

const user = mongoose.model("User",userSchema);
export default user;