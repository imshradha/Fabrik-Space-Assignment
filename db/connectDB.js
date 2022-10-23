import mongoose from "mongoose";

const connection = async (username, password) => {
    let URL = `mongodb+srv://${username}:${password}@cluster0.tovfx.mongodb.net/3D-models-db?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, {useNewURLParser:true});
        console.log("MongoDB connected successfully...")

    }catch(error){
        console.log("Error while connecting to the database", error);
    }
}

export default connection;


//shradha_24:Ourcloudy007  
//mongodb+srv://shradha_24:Ourcloudy007 @cluster0.tovfx.mongodb.net/3D-models-db?retryWrites=true&w=majority
