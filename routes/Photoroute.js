const express = require('express');
const Prouter = express.Router()
const Model = require('../model/Photomodel');

Prouter.post('/postphoto', async (req, res) => {
    console.log(req.body)
    const photo = new Model({
        // Album_id:req.body.Album_id,
        // User_id:req.body.User_id,
        Name: req.body.Name,
        ImageUrl:req.body.ImageUrl,
    })
    console.log(photo);
    try {
        const photoToSave = await photo.save();
        res.status(200).json(photoToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get All Users
Prouter.get('/getAllphoto', async (req, res) => {
    try{
        const photo = await Model.find();
        res.json(photo)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})


//Get one photo by ID
Prouter.get('/getOne/:id', async (req, res) => {
    try{
        const photo = await Model.findById(req.params.id);
        res.json(photo)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//get photo by user ID









//Updating the photo data using Patch
Prouter.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedphoto = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedphoto, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
Prouter.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const photo = await Model.findByIdAndDelete(id)
        res.send(`Document with ${photo.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
module.exports = Prouter;