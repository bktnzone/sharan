var venueModel = require("../models/venue.model.js");


var venueService = {
    getList: getList,
    getById:getById,
    add: addReg,
    update:updateReg,
    delete:removeReg
}

function addReg(entityData) {
    return new Promise((resolve,reject) => {
        venueModel.add(entityData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}


function updateReg(id,userData,callback) {
    return new Promise((resolve,reject) => {
        venueModel.update(id,entityData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}

function removeReg(id) {
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

