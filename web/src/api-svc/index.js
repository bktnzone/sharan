import React from 'react'
import moment from 'moment'
import api from './init'
import * as event from './event'
import * as reg from './registrant'
import * as venue from './venue'
import * as building from './building'
import * as allotment from './allotment'
import * as foodReq from './food-request'

export const apiServices={

  eventSvc:event,
  regSvc:reg,
  venueSvc:venue,
  buildingSvc:building,
  allotmentSvc:allotment,
  foodReqSvc:foodReq
}

