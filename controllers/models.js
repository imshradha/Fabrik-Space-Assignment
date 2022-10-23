import dmodel from '../models/model.js';

export const uploadModel = async (req, res) => {
    try{
        const data = req.body;
        const newModel = await dmodel.create(data);
        return res.status(201).send({message: "Model uploaded successfully", data: newModel})

    }catch(error){
        return res.status(500).send({message: error.message});
    }
}

export const showModels = async (req, res) => {
    try{
        const models = await dmodel.find();
        return res.status(200).send(models);
    }catch(error){
        return res.status(500).send({message: error.message});
    }
}


