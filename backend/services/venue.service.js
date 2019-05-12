var venueModel = require("../models/venue.model.js");


var venueService = {
    getList: getList,
    getById:getById,
    add: addVenue,
    update:updateVenue,
    delete:removeVenue
}

function addVenue(entityData) {
    return new Promise((resolve,reject) => {
        venueModel.add(entityData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}


function updateVenue(id,userData,callback) {
    return new Promise((resolve,reject) => {
        venueModel.update(id,entityData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}

function removeVenue(id) {
    return new Promise((resolve,reject) => {
        venueModel.remove(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

function getList() {
    return new Promise((resolve,reject) => {
        venueModel.getList().then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

function getById(id) {
    return new Promise((resolve,reject) => {
        venueModel.getById(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}


module.exports = venueService;

