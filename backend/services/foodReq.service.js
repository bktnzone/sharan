const foodReqModel = require("../models/foodReq.model.js");


const foodReqSvc = {
    getList: getList,
    getById:getById,
    add: addFoodReq,
    update:updateFoodReq,
    delete:removeFoodReq,
   // addFloor:addFloor,
   // addFloor:updateFloor,
   // addFloor:removeFloor,
}

function addFoodReq(foodReqInfo) {
    return new Promise((resolve,reject) => {
        foodReqModel.add(foodReqInfo).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}


function updateFoodReq(id,foodReqInfo) {
    return new Promise((resolve,reject) => {
        foodReqModel.update(id,foodReqInfo).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}

function removeFoodReq(id) {
    return new Promise((resolve,reject) => {
        foodReqModel.remove(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })
}

function getList() {
    return new Promise((resolve,reject) => {
        foodReqModel.getList().then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}

function getById(id) {
    return new Promise((resolve,reject) => {
        foodReqModel.getById(id).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    });
}


module.exports = foodReqSvc;

