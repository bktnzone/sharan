import api from './init'

const RES_BASE_NAME="/regs";


function getList(params) {
  const resource=`${RES_BASE_NAME}/?event_id=${params.event_id}`;
  return api.get(resource).then(res => res.data)
}

function getInfo(params) {
  const resource=`${RES_BASE_NAME}/${params.id}`;
  return api.get(resource).then(res => res.data)
}


function patch(params) {
  const resource=`${RES_BASE_NAME}/${params.id}`;
  return api.put(resource,params).then(res => res.data);

}

function save(params) {
  const resource=`${RES_BASE_NAME}/${params.id}`;
  if(params.id>0)
    return api.put(resource,params).then(res => res.data);
  else
    return api.post(`${RES_BASE_NAME}`,params).then(res => res.data)
}

function remove(params) {
  const resource=`${RES_BASE_NAME}/${params.id}`;
  return api.delete(resource).then(res => res.data)
}

function apply(params) {
  const resource=`${RES_BASE_NAME}/${params.id}`;
  return api.post(resource).then(res => res.data)
}

export  { getInfo,getList,save,remove,apply,patch};
