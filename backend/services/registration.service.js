var regModel = require("../models/registration.model");


var regService = {
    getList: getList,
    getById:getById,
    add: addReg,
    update:updateReg,
    delete:removeReg
}


function getList(params) {
    return new Promise((resolve,reject) => {
        regModel.getList(params).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

function addReg(entityData) {
    return new Promise((resolve,reject) => {
        regModel.add(entityData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}


function updateReg(id,userData,callback) {
    return new Promise((resolve,reject) => {
        regModel.update(id,entityData).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}

function removeReg(id) {
    return new Promise((resolve,reject) => {
        regModel.remove(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}


function getById(params) {
    return new Promise((resolve,reject) => {
        regModel.getById(params).then((data)=>{
            const actualData=data.length>0?data[0]:{};
            resolve(actualData);
        }).catch((err) => {
            console.log(err);
            reject(err);
        })
    });
}


module.exports = regService;

