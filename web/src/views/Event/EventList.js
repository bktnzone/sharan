import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  Pagination, PaginationItem, PaginationLink
} from "reactstrap";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
const { SearchBar } = Search;


const products = [ {id:"3001",name:"Simple",price:34},
{id:"30011",name:"Simple",price:34},
{id:"30021",name:"Simple",price:34},
{id:"30031",name:"Simple",price:34},
{id:"30041",name:"Simple",price:34},
{id:"30011",name:"Simple",price:34},
{id:"30021",name:"Simple",price:34},
{id:"30031",name:"Simple",price:34},
{id:"30041",name:"Simple",price:34},
{id:"30011",name:"Simple",price:34},
{id:"30021",name:"Simple",price:34},
{id:"30031",name:"Simple",price:34},
{id:"30041",name:"Simple",price:34},
{id:"30011",name:"Simple",price:34},
{id:"30021",name:"Simple",price:34},
{id:"30031",name:"Simple",price:34},
{id:"30041",name:"Simple",price:34},
{id:"30011",name:"Simple",price:34},
{id:"30021",name:"Simple",price:34},
{id:"30031",name:"Simple",price:34},
{id:"30041",name:"Simple",price:34},
{id:"30011",name:"Simple",price:34},
{id:"30021",name:"Simple",price:34},
{id:"30031",name:"Simple",price:34},
{id:"30041",name:"Simple",price:34},
{id:"30011",name:"Simple",price:34},
{id:"30021",name:"Simple",price:34},
{id:"30031",name:"Simple",price:34},
{id:"30041",name:"Simple",price:34},
{id:"30011",name:"Simple",price:34},
{id:"30021",name:"Simple",price:34},
{id:"30031",name:"Simple",price:34},
{id:"300411",name:"Radha",price:34},


];
const columns = [{
  dataField: 'id',
  text: 'RegId',
  formatter1: (cellContent, row) => {
    const path="/regs/" + row.id;
    return (

       <Link to={path} className="nav-link">{row.id}</Link>

    );

  }
}, {
  dataField: 'fullname',
  text: 'Name'
},
, {
  dataField: 'age',
  text: 'Age'
},
{
  dataField: 'centre',
  text: 'Centre'
},

{
  dataField: 'arrived_date',
  text: 'ArrivedOn'
},
{
  dataField: 'gender',
  text: 'Gender'
},
{
  dataField: 'alotted',
  text: 'Room'
}

]



const pageButtonRenderer = ({
  page,
  active,
  disabled,
  title,
  onPageChange
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    onPageChange(page);
  };
  // ....
  return (
    <li className="page-item">
      <a href="#" onClick={ handleClick } className="page-link active" >{ page }</a>
    </li>
  );
};

const options = {
  pageButtonRenderer
};

const selectRow = {
  mode: 'checkbox' // multiple row selection
};


class EventList extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12} lg={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Registration List
              </CardHeader>
              <CardBody>
                <ToolkitProvider
                  keyField="id"
                  data={products}
                  columns={columns}
                  search
                >
                  {props => (
                    <div>
                      <div className="pull-left">
                      <Col col="2" className="mb-3 mb-xl-0 text-center">
                      <Link to="/regs/0">
  <Button renderas="button" color="primary" size="sm">
    <span>Add New</span>
  </Button>

</Link>
<Link to="/regs/0">
  <Button renderas="button" color="danger" size="sm">
    <span>Delete</span>
  </Button>

</Link>


              </Col>
                      </div>
                      <div className="pull-right">
                        <SearchBar {...props.searchProps} />
                      </div>

                      <BootstrapTable
                      className="table table-sm table-hover"
                      selectRow={ selectRow }
                        striped
                        hover
                        bordered={false}

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

export default EventList;
