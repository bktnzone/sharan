import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { getList } from "../../api/registrant";
import Select from "react-select";
import { AppSwitch } from '@coreui/react'
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

const columns = [
  {
    dataField: "id",
    text: "RegId",
    formatter: (cellContent, row) => {
      const path = "/regs/" + row.id;
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
    dataField: "id",
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

const eventList = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class RegList extends Component {
  state = {
    //decodedToken: getDecodedToken(), // retrieves the token from local storage if valid, else will be null
    regDataList: [],
    selectedOption: { value: "chocolate", label: "Chocolate" }
  };

  componentDidMount() {
    this.load();
  }

  handleChange=(item)=>{
    //this.props.onChangeParentComponent(val['value']);
   this.setState({selectedOption:item})
  }

  load() {
    // display loading page
    this.setState({ loading: true });
    // load all of the rooms from the database
    getList()
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
    const { regDataList, selectedOption } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12} lg={12}>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={eventList}
              placeholder="Select Event"
              isSearchable={true}
            />
          </Col>
        </Row>

        <Row>
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

                          <Link to="/regs/0">
                            <Button renderas="button" color="primary" size="sm">
                              <span>Add New</span>
                            </Button>
                          </Link>
                          <Link to="/regs/0">
  <Button renderas="button" color="danger" size="sm" className='ml-1'>
    <span>Delete</span>
  </Button>

</Link>

                      </div>

                      <div className="pull-right">
                        <SearchBar {...props.searchProps} />
                      </div>

                      <BootstrapTable
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
      </div>
    );
  }
}

export default RegList;
