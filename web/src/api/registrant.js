import api from './init'

function getList(params) {
  return api.get('/regs').then(res => res.data)
}

function save(params) {
  if(params.id>0)
    return api.put('/regs/' + params.id).then(res => res.data);
  else
    return api.post('/regs').then(res => res.data)
}

function remove(params) {
  return api.delete('/regs/'+params.id).then(res => res.data)
}

function apply(params) {
  return api.post('/regs/' + params.id).then(res => res.data)
}

export  { getList,save,remove,apply};
