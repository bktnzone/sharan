import React, { Component } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import RoomWidget  from "../../components/Room/RoomWidget";
import Select from "react-select";
import uniqBy from "lodash.uniqby";
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
  Collapse,
  Row,
  ButtonGroup,
  Table,ListGroup,TabPane,ListGroupItem,TabContent
} from "reactstrap";


import { apiServices as apiSvc } from "../../api-svc";


const { allotmentSvc,regSvc, eventSvc } = apiSvc;

class Allotment extends Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
      roomMasterList:[],
      buildingList:[],
      collapseAllot:true,
      floors:[],
      rooms:[1,2,6,4,3,2,2,2,3,2,23,23,2,],
      regList:[]
    };
  }

  componentDidMount=async ()=> {
    allotmentSvc.getAllRooms({}).then(r=>{
        const rooms=r.data.items;
        this.setState({roomMasterList:rooms});
        const buildings=rooms.map(r=>{
          return {label:r.btitle,value:r.building_id};
        });
        const floors=rooms.map(r=>{
          return  {floor_no:r.floor_no};
        });
        this.setState({floors:this.getUniqueList(floors,"floor_no")});
        this.setState({buildingList:this.getUniqueList(buildings,"value")});
    });
  }

  getUniqueList=(dataItems,uniqueKey)=>{

   return uniqBy(dataItems, uniqueKey);

  }


  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
   const {floors, rooms,buildingList } = this.state;

    return (
      <div className="animated fadeIn">


        <Row className="allotment">
        <Col xl={12} lg={12}>
              <Card>
                <CardHeader>

                <Select
                        name="building"
                        size="sm"
                        id="building"
                        isClearable
                        isSearchable

                        options={buildingList}

                        placeholder="Select Building"
                        isSearchable={true}
                      />

                 <ButtonGroup>
                   {
                     floors.map((f,index)=>{

                      return (
                        <Button key={index}>{f.floor_no}</Button>
                      )

                     })
                   }
                 </ButtonGroup>

                  <div className="card-header-actions">

                    <a className="card-header-action btn btn-minimize" data-target="#collapseAllot" onClick={()=>{ this.handleCollapse(0); }}><i className="icon-arrow-up"></i></a>
                   </div>
                </CardHeader>

                <CardBody>
                <Row>
        <Col xl={12} lg={12}>
                  <FormGroup check inline >
                        <Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
                        <Label check className="form-check-label" htmlFor="checkbox1">Show Dormitories Only</Label>
                      </FormGroup>
                      <FormGroup check inline  >
                        <Input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" value="option2" />
                        <Label check className="form-check-label" htmlFor="checkbox2">Show Rooms with Cot and Floors</Label>
                      </FormGroup>
                      </Col>
                      </Row>

                  { rooms.map(r=>{
return (
<table className="table table-sm">
                  <tr>
                    <td className="text-center bg-secondary" style={{"vertical-align":"middle"}}>
                      Room 23
                      <p>5 Cots 2 Floor Sheet</p>
                      </td>
                      <td>
                      <table class="table table-sm">
                        <thead><tr><th>S.No</th><th>Name</th><th>Occupied</th><th>Departing</th></tr></thead>
                        <tbody>
                          <tr>
                        <td>1</td><td>Eustorgios Amulius</td><td>2012/03/01</td><td>Tuesday</td>
                        </tr>
                        <tr>
                        <td>2</td><td>Eustorgios Amulius</td><td>2012/03/01</td><td>Tuesday</td>
                        </tr>
                        <tr>
                        <td>3</td><td>Eustorgios Amulius</td><td>2012/03/01</td><td>Tuesday</td>
                        </tr>
                        <tr>
                        <td>4</td><td>Eustorgios Amulius</td><td>2012/03/01</td><td>Tuesday</td>
                        </tr>
                        </tbody>
                        </table>

                      </td>
                    </tr>

                </table>

)

                  })}



                  <div>

                  <Row hidden>


                      <Col xs="12" sm="6" lg="3">
                      <Card>
                      <CardBody >

                      <div >Room 2</div>
                      <div className="text-muted  font-weight-bold font-xs"> Full 5/5</div>
                      <Badge color="success" className="mr-1">Y</Badge>
                      <Badge color="success" className="mr-1">N</Badge>
                      <Badge color="success" className="mr-1">N</Badge>
                      <Badge color="success" className="mr-1">N</Badge>
                      <Badge color="success" className="mr-1">Y</Badge>
                      </CardBody>
                      </Card>
                      </Col>


                  </Row>
                  <div className="pull-left ml-0">

                  </div>
                  </div>

                </CardBody>

              </Card>
            </Col>
        </Row>
      </div>
    );
  }
}
export default Allotment;
