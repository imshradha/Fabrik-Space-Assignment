import mongoose from'mongoose';

const modelSchema = mongoose.Schema({
    image: String
})

const user = mongoose.model("Model",modelSchema);
export default user;