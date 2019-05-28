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

async function addReg(params) {
    return new Promise(async (resolve,reject) => {
       const inserted=await regModel.add(params);
       resolve(inserted);
});
}


async function updateReg(id,regInfo) {
    return new Promise(async (resolve,reject) => {
        regModel.update(id,regInfo).then((data)=>{
            resolve(data);
        }).catch((err) => {
            reject(err);
        })
    })

}

async function removeReg(id) {
    return new Promise(async (resolve,reject) => {
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

