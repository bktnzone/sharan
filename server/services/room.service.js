var roomModel = require("../models/room.model.js");

var roomService = {
  getList: getList,
  getAll: getAll,
  getById: getById,
  add: addRoom,
  update: updateRoom,
  delete: removeRoom,
  addEvtRoom: getById,
  updateEvtRoom: getById,
  deleteEvtRoom: getById,
  saveAllotment: saveAllotment,
  getAllotments: getAllotments
};

async function addAllotment(params) {
  return new Promise(async (resolve, reject) => {
    try {
        params.data.event_id=params.event_id;
      const inserted = await roomModel.addAllotment(params.data);
      resolve(inserted);
    } catch (ex) {
      reject(ex);
    }
  });
}

async function updateAllotment(id, regInfo) {
  return new Promise(async (resolve, reject) => {
    roomModel
      .updateAllotment(id, regInfo)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function saveAllotment(params) {
  const allotmentId=params.allotment_id;
  const allotmentInfo=params;

  return new Promise((resolve, reject) => {
    if (allotmentId) {
        return Promise.resolve(1);
     // return updateAllotment(allotmentId, allotmentInfo);
    } else {
        let insertedInfo=addAllotment(params);
        resolve(insertedInfo);
    }
  });
}

function getAllotments(params) {
  return new Promise((resolve, reject) => {
    roomModel
      .getAllotments(params)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function addRoom(roomInfo) {
  return new Promise((resolve, reject) => {
    roomModel
      .getList(roomInfo)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function updateRoom(id, roomInfo) {
  return new Promise((resolve, reject) => {
    roomModel
      .getList(id, roomInfo)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function removeRoom(id) {
  return new Promise((resolve, reject) => {
    roomModel
      .getList(id)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getAll() {
  return new Promise((resolve, reject) => {
    roomModel
      .getAll()
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getList() {
  return new Promise((resolve, reject) => {
    roomModel
      .getList()
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getById(id) {
  return new Promise((resolve, reject) => {
    roomModel
      .getList(id)
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = roomService;
