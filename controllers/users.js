import user from '../models/user.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try{
        const requestBody = req.body;
        const { firstName, lastName, email_address, password } = requestBody;
        if(Object.keys(requestBody).length == 0){
            return res.status(400).send({message: "Please enter user details.."})
        }
        if(!requestBody.firstName){
            return res.status(400).send({message: "Enter firstname"})
        }
        if(!requestBody.lastName){
            return res.status(400).send({message: "Enter lastname"})
        }
        if(!requestBody.email_address){
            return res.status(400).send({message: "Enter the Email"})
        }
        if(!requestBody.password){
            return res.status(400).send({message: "Enter the password"})
        }
        const newUser = await user.create(requestBody);
        return res.status(201).send({message: "User registered successfully..", data:newUser})

    }catch(error){
        return res.status(500).send({message: error.message});
    }
}

export const login = async (req, res) => {
    try{
        const requestBody = req.body;
        const { email_address, password } = requestBody;
        if(Object.keys(requestBody).length == 0){
            return res.status(400).send({message: "Please enter user details.."})
        }
        if(!requestBody.email_address){
            return res.status(400).send({message: "Enter the Email"})
        }
        if(!requestBody.password){
            return res.status(400).send({message: "Enter the password"})
        }
        const userLogin = await user.findOne({email_address:email_address, password: password});
        if(!userLogin){
            return res.status(404).send({message: "User not found"})
        }
        else {
                const token = jwt.sign({
                user_id : userLogin._id.toString(), 
            }, "fabrik-space")

            return res.status(201).send({message: "Login Successfull", token: token})
        }
    }catch(error){
        return res.status(500).send({message: error.message});
    }
 
}
