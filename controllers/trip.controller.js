const Validator = require('fastest-validator');
const models = require('../models');

function save(req, res){
    const trip = {
        tripName: req.body.tripName,
        description: req.body.description,
        imageUrl: req.body.image_url,
        tripTypeId: req.body.tripType_id,
        userId: 1
    }

    const schema = {
        tripName: {type:"string", optional: false, max: "100"},
        description: {type: "string", optional: false, max: "500"},
        imageUrl: {type: "string", optional: true},
        tripTypeId: {type: "number", optional: true},
        userId: {type: "number", optional: true}
    }
    
    const v = new Validator();
    const validationResponse = v.validate(trip, schema);

    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }
     
    models.Trip.create(trip).then(result => {
        res.status(201).json({
            message: "Trip created successfully",
            trip: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

function show(req, res){
    const id = req.params.id;

    models.Trip.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Trip not found!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        })
    });
}


function index(req, res){
    models.Trip.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!"
        });
    });
}


function update(req, res){
    const id = req.params.id;
    const updatedPost = {
        tripName: req.body.tripName, 
        description: req.body.description,
        imageUrl: req.body.image_url,
        tripTypeId: req.body.tripType_id,
    }
    
    const userId = 1;

    const schema = {
        tripName: {type:"string", optional: false, max: "100"},
        description: {type: "string", optional: false, max: "500"},
        tripTypeId: {type: "number", optional: false}
    }
    
    const v = new Validator();
    const validationResponse = v.validate(updatedPost, schema);

    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed",
            errors: validationResponse
        });
    }

    models.Trip.update(updatedTrip, {where: {id:id, userId: userId}}).then(result => {
        res.status(200).json({
            message: "Trip updated successfully",
            trip: updatedTrip
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong",
            error: error
        });
    })
}


function destroy(req, res){
    const id = req.params.id;
    const userId = 1;

    models.Trip.destroy({where:{id:id, userId:userId}}).then(result => {
        res.status(200).json({
            message: "Post deleted successfully"
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong",
            error: error
        });
    });
}

 
module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy
}
