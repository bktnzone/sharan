import React from 'react'
import moment from 'moment'
import api from './init'

export function getList(params) {
  return api.get('/events').then(res => res.data)
}

export function getInfo(params) {
  return api.get('/events/' + params.id).then(res => res.data)
}

export function save(params) {

  if(params.id>0)
    return api.post('/regs').then(res => res.data)
  else
    return api.put('/regs/' + params.id).then(res => res.data);
}

export function remove(params) {
  return api.delete('/regs/'+params.id).then(res => res.data)
}

export function apply(params) {
  return api.post('/regs/' + params.id).then(res => res.data)
}
