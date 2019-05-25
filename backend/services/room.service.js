var roomModel = require("../models/room.model.js");


var roomService = {
    getList: getList,
    getById:getById,
    add: addRoom,
    update:updateRoom,
    delete:removeRoom,
    addEvtRoom: getById,
    updateEvtRoom:getById,
    deleteEvtRoom:getById
}

function addRoom(roomInfo) {
    return new Promise((resolve,reject) => {
        roomModel.add(roomInfo).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}


function updateRoom(id,roomInfo) {
    return new Promise((resolve,reject) => {
        roomModel.update(id,roomInfo).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}

function removeRoom(id) {
    return new Promise((resolve,reject) => {
        roomModel.remove(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

function getList() {
    return new Promise((resolve,reject) => {
        roomModel.getList().then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

function getById(id) {
    return new Promise((resolve,reject) => {
        roomModel.getById(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}


module.exports = roomService;

