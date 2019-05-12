const eventModel = require("../models/event.model.js");


const foodReqService = {
    getList: getList,
    getById:getById,
    add: addReq,
    update:updateReq,
    remove:removeReq
}

function addReq(entityData) {
    return new Promise((resolve,reject) => {
        eventModel.add(entityData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}


function updateReq(id,userData,callback) {
    return new Promise((resolve,reject) => {
        eventModel.update(id,entityData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}

function removeReq(id) {
    return new Promise((resolve,reject) => {
        eventModel.remove(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

function getList() {
    return new Promise((resolve,reject) => {
        eventModel.getList().then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

function getById(id) {
    return new Promise((resolve,reject) => {
        eventModel.getById(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}


module.exports = eventService;

