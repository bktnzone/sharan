import  api from './init'


const RES_BASE_NAME="/rooms";

function toQryParams(params){
  return Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  }).join('&');

}


function getAllotments(params) {
  const qryParams= toQryParams(params);
  const resource=`${RES_BASE_NAME}/allotments?${qryParams}`;
  return api.get(resource).then(res => res.data)
}

function saveAllotment(params) {
  const {data,...qrys}=params;
  const qryParams= toQryParams(qrys);
  const resource=`${RES_BASE_NAME}/allotments?${qryParams}`;
  return api.post(resource,params.data).then(res => res.data)
}


function getAllRooms(params) {
  const resource=`${RES_BASE_NAME}/?venue_id=1`;
  return api.get(resource).then(res => res.data)
}

function getList(params) {
  const resource=`${RES_BASE_NAME}/?venue_id=1`;
  return api.get(resource).then(res => res.data)
}

function getInfo(params) {
  const resource=`${RES_BASE_NAME}/${params.id}`;
  return api.get(resource).then(res => res.data)
}

function save(params) {
  const resource=`${RES_BASE_NAME}/${params.id}`;
  if(params.id>0)
    return api.put(resource).then(res => res.data);
  else
    return api.post(`${RES_BASE_NAME}`).then(res => res.data)
}

function remove(params) {
  const resource=`${RES_BASE_NAME}/${params.id}`;
  return api.delete(resource).then(res => res.data)
}

function apply(params) {
  const resource=`${RES_BASE_NAME}/${params.id}`;
  return api.post(resource).then(res => res.data)
}

export  { getAllotments,saveAllotment,getAllRooms,getInfo,getList,save,remove,apply};
