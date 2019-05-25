import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Util  from "../Shared/Util"
import {apiServices as apiSvc} from "../../api-svc";
import confirm from 'reactstrap-confirm';
import {
  Button,
  CardBody,
  CardHeader,
  Col,
  Card,
  Row
} from "reactstrap";
import paginationFactory from "react-bootstrap-table2-paginator";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
const { SearchBar } = Search;

const { regSvc, venueSvc,eventSvc}=apiSvc;

const columns = [
  {
    dataField: "id",
    text: "VenueId",
    formatter: (cellContent, row) => {

      const path = "/venues/" + row.id;// + "?event_id=" + row.event_id;
      return (
        <Link to={path} >
          {row.id}
        </Link>
      );
    }
  },
  {
    dataField: "title",
    text: "Name",
    searchable: true,
    sort: true
  },
  {
    dataField: "description",
    text: "Desc",
    searchable: false,
    sort: true
  },
  {
    dataField: "contact_name",
    text: "Contact",
    searchable: true,
    sort: true
  }
  ,
  {
    dataField: "contact_number",
    text: "Mobile",
    searchable: true,
    sort: true
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



const customControlStyles = base => ({
  height: 200,
});

class VenueList extends Component {
  state = {
    //decodedToken: getDecodedToken(), // retrieves the token from local storage if valid, else will be null
    venueDataList: [],
    selected:[]
  };

  componentDidMount=async ()=> {
    this.load();
  }


  handleOnSelect = (row, isSelect) => {
    if (isSelect) {
      this.setState(() => ({
        selected: [...this.state.selected, row.id]
      }));
    } else {
      this.setState(() => ({
        selected: this.state.selected.filter(x => x !== row.id)
      }));
    }
  }

  handleOnSelectAll = (isSelect, rows) => {
    const ids = rows.map(r => r.id);
    if (isSelect) {
      this.setState(() => ({
        selected: ids
      }));
    } else {
      this.setState(() => ({
        selected: []
      }));
    }
  }

  handleDelete =async () => {

    console.log(this.state.selected);
    let result = await confirm(Util.defaultDeleteOption); //will display a confirmation dialog with default settings

  }



  load() {
    // display loading page
    this.setState({ loading: true });
    // load all of the rooms from the database
    venueSvc.getList()
      .then(venues => {
        this.setState({ venueDataList: venues.data.items });

        // toggle loading page off
        this.setState({ loading: false });
      })
      .catch(error => {
        console.error("Error loading room data", error);
        this.setState({ error });
      });
  }

  render() {
    const selectRow = {
      mode: "checkbox", // multiple row selection
      selected: this.state.selected,
      onSelect: this.handleOnSelect,
    };

    const { venueDataList } = this.state;
    return (
      <div className="animated fadeIn">


         <Row >
          <Col xl={12} lg={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Venue List
              </CardHeader>
              <CardBody>
                <ToolkitProvider
                  bootstrap4={true}
                  keyField="id"
                  data={venueDataList}
                  columns={columns}
                  search
                >
                  {props => (
                    <div>
                      <div className="pull-left ml-0">

                          <Link to={"/regs/0"}>
                            <Button renderas="button" color="primary" size="sm">
                              <span>Add New</span>
                            </Button>
                          </Link>
                          <Button disabled={this.state.selected.length==0} className="btn btn-success ml-1" color="danger" size="sm" onClick={ this.handleDelete }>Delete</Button>



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
        </div>
    );
  }
}

export default VenueList;
