import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { getList } from "../../api/registrant";
import Select from "react-select";
import { AppSwitch } from '@coreui/react'
import {apiServices as apiSvc} from "../../api/service";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  FormText,
  CardFooter,
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import paginationFactory from "react-bootstrap-table2-paginator";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
const { SearchBar } = Search;

const { regSvc, eventSvc}=apiSvc;

const columns = [
  {
    dataField: "id",
    text: "RegId",
    formatter: (cellContent, row) => {

      const path = "/regs/" + row.id + "?event_id=" + row.event_id;
      return (
        <Link to={path} >
          {row.id}
        </Link>
      );
    }
  },
  {
    dataField: "fullname",
    text: "Name",
    searchable: true,
    sort: true
  },
  {
    dataField: "age",
    text: "Age",
    searchable: false
  },
  {
    dataField: "centre",
    text: "Centre",
    searchable: false
  },

  {
    dataField: "arrived_date",
    text: "ArrivedOn",
    searchable: false
  },
  {
    dataField: "gender",
    text: "Gender",
    searchable: false
  },
  {
    dataField: "alotted",
    text: "Room",
    searchable: false
  },
  {
    dataField: "arrived",
    text: "Arrived",
    formatter: (cellContent , row ) => {

      return <React.Fragment>
          <AppSwitch  size="sm" className={'mx-1'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'} />
        </React.Fragment>



    }
  }

];

const pageButtonRenderer = ({
  page,
  active,
  disabled,
  title,
  onPageChange
}) => {
  const handleClick = e => {
    e.preventDefault();
    onPageChange(page);
  };
  // ....
  return (
    <li className="page-item">
      <a href="#" onClick={handleClick} className="page-link active">
        {page}
      </a>
    </li>
  );
};



const options = {
  pageButtonRenderer
};

const selectRow = {
  mode: "checkbox" // multiple row selection
};


const customControlStyles = base => ({
  height: 200,
});

class RegList extends Component {
  state = {
    //decodedToken: getDecodedToken(), // retrieves the token from local storage if valid, else will be null
    regDataList: [],
    selectedEvent:null,
    eventList:[]
  };

  componentDidMount=async ()=> {
    await this.getEvents();
    this.load();
  }

  getEvents=async ()=>{

    eventSvc.getList().then(r=>{
      const events=r.data.items.map(e=> {return {"label":e.title,"value":e.id};});
      this.setState({eventList:events});
    });
  }


  handleChange=(item)=>{
    console.log(item);
   this.setState({selectedEvent:item})
  }

  load() {
    // display loading page
    this.setState({ loading: true });
    // load all of the rooms from the database
    regSvc.getList()
      .then(regs => {
        this.setState({ regDataList: regs.data.items });

        // toggle loading page off
        this.setState({ loading: false });
      })
      .catch(error => {
        console.error("Error loading room data", error);
        this.setState({ error });
      });
  }

  render() {
    const {selectedEvent, eventList,regDataList } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>

          <Col xl={4} lg={4} className="pull-left">
            <Select

styles={ customControlStyles}
             defaultValue={eventList[0]}
              isClearable
              isSearchable

              onChange={this.handleChange}
              options={eventList}
              placeholder="Select Event"
              isSearchable={true}
            />
          </Col>
        </Row>

        { selectedEvent &&  <Row >
          <Col xl={12} lg={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Registration List
              </CardHeader>
              <CardBody>
                <ToolkitProvider
                  bootstrap4={true}
                  keyField="id"
                  data={regDataList}
                  columns={columns}
                  search
                >
                  {props => (
                    <div>
                      <div className="pull-left ml-0">

                          <Link to={"/regs/0?event_id=" + selectedEvent.value}>
                            <Button renderas="button" color="primary" size="sm">
                              <span>Add New</span>
                            </Button>
                          </Link>
                          <Link to={"/regs/0?event_id=" + selectedEvent.value}>
                          <Button renderas="button" color="danger" size="sm" className='ml-1'>
                            <span>Delete</span>
                          </Button>

                      </Link>

                      </div>

                      <div className="pull-right">
                        <SearchBar {...props.searchProps} />
                      </div>

                      <BootstrapTable keyField="id" key="tbl1"
                        className="table table-sm table-hover"
                        selectRow={selectRow}
                        striped
                        hover
                        bordered={false}
                        sortable
                        pagination={paginationFactory()}
                        {...props.baseProps}
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </CardBody>
            </Card>
          </Col>
        </Row>

                  }</div>
    );
  }
}

export default RegList;
