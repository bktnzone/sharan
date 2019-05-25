const eventModel = require("../models/event.model.js");


const eventService = {
    getList: getList,
    getById:getById,
    add: addEvent,
    update:updateEvent,
    delete:removeEvent
}

function addEvent(entityData) {
    return new Promise((resolve,reject) => {
        eventModel.add(entityData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}


function updateEvent(id,entityData,callback) {
    return new Promise((resolve,reject) => {
        eventModel.update(id,entityData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}

function removeEvent(id) {
    return new Promise((resolve,reject) => {
        eventModel.remove(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

function getList(params) {
    return new Promise((resolve,reject) => {
        eventModel.getList(params).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

function getById(id) {
    return new Promise((resolve,reject) => {
        eventModel.getById(id).then((data)=>{
            resolve(data[0]);
        }).catch((err) => {
            reject(err);
        })
    });
}


module.exports = eventService;

