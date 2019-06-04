import React, { Component } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import RoomWidget from "../../components/Room/RoomWidget";
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
  Table,
  ListGroup,
  TabPane,
  ListGroupItem,
  TabContent
} from "reactstrap";

import { apiServices as apiSvc } from "../../api-svc";

const { allotmentSvc, regSvc, eventSvc } = apiSvc;

class Allotment extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
      activeFloor: "",
      roomMasterList: [],
      buildingList: [],
      selectedBuildingId: 0,
      floors: [],
      rooms: [],
      regList: []
    };
  }

  handleAllotment = (roomInfo,is_cot) => {
    allotmentSvc.saveAllotment({data:{event_id:this.props.regList[0].event_id,is_cot:is_cot,room_id:roomInfo.id,reg_id:this.props.regList[0].id},event_id:1,venue_id:1}).then(resp => {});
  };

  handleSelectBuilding = selBuilding => {
    let floors = [];

    this.setState({ rooms: [] });
    this.setState({ selectedBuildingId: selBuilding.value });
    if (selBuilding) {
      const rooms = this.state.roomMasterList.filter(
        r => r.building_id == selBuilding.value
      );
      floors = rooms.map(r => {
        return { floor_no: r.floor_no };
      });
    }

    this.setState({
      activeFloor: "",
      floors: this.getUniqueList(floors, "floor_no")
    });
  };

  handleFloorChange = (e, floor_no) => {
    this.loadRooms(this.state.selectedBuildingId, floor_no);
    this.setState({ activeFloor: floor_no });
  };

  loadAllotments = (buildingId, floor_no) => {
    debugger;
    const params = {
      event_id: 1,
      venue_id: 1,
      building_id: buildingId,
      floor_no: floor_no
    };
    return allotmentSvc.getAllotments(params).then(r => {
      return r.data.items;
    });
  };

  loadRooms = async (buildingId, floor_no) => {
    //later need to query in realtime
    const rooms = this.state.roomMasterList.filter(
      r => r.building_id == buildingId && r.floor_no == floor_no
    );
    const allotments = await this.loadAllotments(buildingId, floor_no);

    const finalRooms = rooms.map(r => {
      r.allotments = allotments;
    });

    this.setState({ rooms: rooms });
  };

  componentDidMount = async () => {
    allotmentSvc.getAllRooms({}).then(r => {
      const rooms = r.data.items;
      this.setState({ roomMasterList: rooms });
      const buildings = rooms.map(r => {
        return { label: r.btitle, value: r.building_id };
      });

      this.setState({ buildingList: this.getUniqueList(buildings, "value") });
    });
  };

  getUniqueList = (dataItems, uniqueKey) => {
    return uniqBy(dataItems, uniqueKey);
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { floors, activeFloor, rooms, buildingList } = this.state;
    const addButtonCaption =
      this.props.regList.length <= 1 ? "Allot here" : "Allot all here";

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12} lg={12}>
            <FormGroup>
              <Label check className="form-check-label">
                Allotment for :
              </Label>
              <Select
                name="registrants"
                isMulti={this.props.regList.length > 1}
                size="sm"
                id="registrants"
                isClearable
                isSearchable
                defaultValue={this.props.regList.map(p => {
                  return { label: p.fullname, value: p.id };
                })}
                onChange={this.handleRegistrants}
                options={this.props.regList.map(p => {
                  return { label: p.fullname, value: p.id };
                })}
                placeholder="Select Registrants"
                isSearchable={true}
              />{" "}
            </FormGroup>
          </Col>
        </Row>
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
                  onChange={this.handleSelectBuilding}
                  options={buildingList}
                  placeholder="Select Building"
                  isSearchable={true}
                />

                <ButtonGroup>
                  {floors.map((f, index) => {
                    return (
                      <Button
                        size="sm"
                        onClick={e => this.handleFloorChange(e, f.floor_no)}
                        color={
                          "" +
                          (f.floor_no === activeFloor ? "primary" : "secondary")
                        }
                        key={index}
                      >
                        {f.floor_no}
                      </Button>
                    );
                  })}
                </ButtonGroup>
              </CardHeader>

              <CardBody>
                <Row>
                  <Col xl={12} lg={12} hidden>
                    <FormGroup check inline>
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox1"
                        name="checkbox1"
                        value="option1"
                      />
                      <Label
                        check
                        className="form-check-label"
                        htmlFor="checkbox1"
                      >
                        Show Dormitories Only
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox2"
                        name="checkbox2"
                        value="option2"
                      />
                      <Label
                        check
                        className="form-check-label"
                        htmlFor="checkbox2"
                      >
                        Show Rooms with Cot and Floors
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>

                {rooms.map((r, idx) => {
                  return (
                    <table key={idx} className="table table-sm">
                      <tbody>
                        <tr>
                          <td
                            width="30% "
                            className={
                              "text-center " +
                              (r.is_reserved === 1
                                ? "bg-danger"
                                : "bg-secondary")
                            }
                            style={{ verticalAlign: "top" }}
                          >
                            <h3> Room : {r.room_title}</h3>
                           { r.cot_count>0 &&  <p>


                              {r.is_reserved != 1 && (
                              <Button
                                size="sm"
                                color="success"
                                onClick={e => this.handleAllotment(r,1)}
                              >
                                {addButtonCaption}
                              </Button>
                            )} Total Cots : {r.cot_count}
                            </p>
                           }
                              { r.dorm_count>0 &&  <p>

                               {r.is_reserved != 1 && (
                              <Button
                              size="sm"
                              color="success"
                              onClick={e => this.handleAllotment(r,0)}
                              >
                              {addButtonCaption}
                              </Button>

                            )} Total Floor : {r.dorm_count}
                            </p>
                           }


                            <hr />

                            {r.is_reserved === 1 && <p>{r.reserved_remarks}</p>}


                          </td>
                          <td>
                            <table className="table table-sm">
                              <thead>
                                <tr>
                                  <th>S.No</th>
                                  <th>Name</th>
                                  <th>Occupied </th>
                                  <th>Departing</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                  r.allotments &&
                                  r.allotments.map((rallot,idx)=>{
                                    return (
                                      <tr>
                                          <td>{idx+1}</td>
                                          <td>{rallot.fullname}</td>
                                          <td>{rallot.is_active?"Y":"-"} <Button size="sm" color="danger">Release</Button></td>
                                          <td>{rallot.leaving_date}</td>
                                          <td>{rallot.reg_remarks}</td>
                                      </tr>
                                    )
                                  })
                                }
                                </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  );
                })}

                </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Allotment;
