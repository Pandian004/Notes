const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const salt = bcrypt.genSaltSync(10);
const secret = "gsdg23734dfhhjsqdq";
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(cookieParser())

mongoose.connect("mongodb+srv://pandiaan1969:gTDNx1OVZxMhFnty@cluster0.etlji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");




app.post('/signup', async (req, res) => {
    const {name, email, password} = req.body;
    try{
        const UserDoc = await UserModel.create({
            name, 
            email, 
            password: bcrypt.hashSync(password, salt)
        })
        res.status(200).json("Success");
    }
    catch(e){
        res.status(400).json(e);
    }
        
});

app.post('/login', async(req, res) => {
    const {email, password} = req.body;

    const userDoc = await UserModel.findOne({email})
    if(userDoc){
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if(passOk){
            jwt.sign({email, name: userDoc.name, id: userDoc._id}, secret,{}, (err, token) =>{
                if(err) throw err;
                res.cookie('token', token).json("success");
            })
        }
        else{
            res.status(400).json("Password is incorrect");

        }
    }
    else{
        res.status(400).json("Email not found");
    }
    
});

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if(err) throw err;
        res.json(info);
    });
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json("logged out!").status(200);
})

app.listen(5000, () => {
    console.log("server running in  port 5000");
});


























// mongodb+srv://pandiaan1969:gTDNx1OVZxMhFnty@cluster0.etlji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0