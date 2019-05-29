import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Util from "../Shared/Util";
import Select from "react-select";
import { AppSwitch } from "@coreui/react";
import { apiServices as apiSvc } from "../../api-svc";
import confirm from "reactstrap-confirm";
import {  Modal, ModalBody, ModalFooter, ModalHeader,Button,Collapse, CardBody, CardHeader, Col, Card, Row } from "reactstrap";
import paginationFactory from "react-bootstrap-table2-paginator";

export default function ImportDataModal({showModal}){

  const {modalToggle,setModalToggle}=useState(showModal);

  return (
    <>
        <Modal isOpen={showModal} toggle={()=>{setModalToggle(false);}}
        className={'modal-primary '}>
        <ModalHeader toggle={()=>{setModalToggle(false);}}  >Modal title</ModalHeader>
        <ModalBody>

        </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={()=>modalToggle(!modalToggle)}>Do Something</Button>{' '}
        <Button color="secondary" onClick={()=>modalToggle(!modalToggle)}>Cancel</Button>
        </ModalFooter>
        </Modal>
    </>
 );
 }

