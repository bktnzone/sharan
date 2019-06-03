import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Util  from "../Shared/Util"
import {apiServices as apiSvc} from "../../api-svc";
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

const { venueSvc,regSvc, buildingSvc,eventSvc}=apiSvc;

const columns = [
  {
    dataField: "id",
    text: "BuildingId",
    formatter: (cellContent, row) => {

      const path = "/buildings/" + row.id;// + "?event_id=" + row.event_id;
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

class BuildingList extends Component {
  state = {
    buildingDataList: [],
    selected:[]
  };

  componentDidMount=async ()=> {
    await this.getVenues();
    this.load();
  }

  getVenues=async ()=>{

    venueSvc.getList().then(r=>{
      const venues=r.data.items.map(e=> {return {"label":e.title,"value":e.id};});
      this.setState({venueList:venues});
    });
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
   // let result = await confirm(Util.defaultDeleteOption); //will display a confirmation dialog with default settings

  }



  load() {
    // display loading page
    this.setState({ loading: true });
    // load all of the rooms from the database
    buildingSvc.getList()
      .then(resp => {
        this.setState({ buildingDataList: resp.data.items });

        // toggle loading page off
        this.setState({ loading: false });
      })
      .catch(error => {
        console.error("Error loading room data", error);
        this.setState({ error });
      });
  }

  render() {

    const expandRow = {
      onlyOneExpanding: true,
      renderer: row => (
        <div>
          <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
          <p>You can render anything here, also you can add additional data on every row object</p>
          <p>expandRow.renderer callback will pass the origin row object to you</p>
        </div>
      )
    };

    const selectRow = {
      mode: "checkbox", // multiple row selection
      selected: this.state.selected,
      onSelect: this.handleOnSelect,
    };

    const { buildingDataList } = this.state;
    return (
      <div className="animated fadeIn">


         <Row >
          <Col xl={12} lg={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Building List
              </CardHeader>
              <CardBody>
                <ToolkitProvider
                 expandRow={ expandRow }
                  bootstrap4={true}
                  keyField="id"
                  data={buildingDataList}
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
      expandRow={ expandRow }
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

export default BuildingList;
