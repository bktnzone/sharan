const buildingModel = require("../models/building.model.js");


const buildingService = {
    getList: getList,
    getById:getById,
    add: addbuilding,
    update:updatebuilding,
    delete:removebuilding,
    addFloor:addFloor,
    addFloor:updateFloor,
    addFloor:removeFloor,
}

function addbuilding(entityData) {
    return new Promise((resolve,reject) => {
        buildingModel.add(entityData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}


function updatebuilding(id,userData,callback) {
    return new Promise((resolve,reject) => {
        buildingModel.update(id,entityData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}

function removebuilding(id) {
    return new Promise((resolve,reject) => {
        buildingModel.remove(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

function getList() {
    return new Promise((resolve,reject) => {
        buildingModel.getList().then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

function getById(id) {
    return new Promise((resolve,reject) => {
        buildingModel.getById(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}


module.exports = buildingService;

