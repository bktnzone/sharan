var roomModel = require("../models/room.model.js");


var roomService = {
    getList: getList,
    getAll:getAll,
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
        roomModel.getList(roomInfo).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}


function updateRoom(id,roomInfo) {
    return new Promise((resolve,reject) => {
        roomModel.getList(id,roomInfo).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}

function removeRoom(id) {
    return new Promise((resolve,reject) => {
        roomModel.getList(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}


function getAll() {
    return new Promise((resolve,reject) => {
        roomModel.getAll().then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
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
        roomModel.getList(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}


module.exports = roomService;

