const buildingModel = require("../models/building.model.js");


const buildingService = {
    getList: getList,
    getById:getById,
    add: addBuilding,
    update:updateBuilding,
    delete:removeBuilding,
   // addFloor:addFloor,
   // addFloor:updateFloor,
   // addFloor:removeFloor,
}

function addBuilding(bldgInfo) {
    return new Promise((resolve,reject) => {
        buildingModel.add(bldgInfo).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}


function updateBuilding(id,bldgInfo) {
    return new Promise((resolve,reject) => {
        buildingModel.update(id,bldgInfo).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}

function removeBuilding(id) {
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

