
import React, { Component } from 'react';
import queryString from 'query-string'
import { Link } from 'react-router-dom';
import {Form,FormGroup,Input,Button,Label,FormText,CardFooter, Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Select from "react-select";
import {apiServices as apiSvc} from "../../api/service";
import { AppSwitch } from '@coreui/react'

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];


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
      <a href="#" onClick={ handleClick }  >{ page }</a>
    </li>
  );
};

const options = {
  pageButtonRenderer
};

const { regSvc, eventSvc}=apiSvc;

class RegEdit extends Component {

  state={
    pageMode:0,
    eventInfo:{},
    regData:{amt_paid:false}
  }


  componentDidMount=()=> {


    const {regData}=this.state;
    regData.id=this.props.match.params.regId;
    this.setState({regInfo:regData,pageMode:regData.id>0?1:0});
    const params = queryString.parse(this.props.location.search)

    if(params.event_id)
    regData.event_id=params.event_id;
    this.setState({regInfo:regData});
      eventSvc.getInfo({id:params.event_id}).then(r=>{
        this.setState({eventInfo:r.data});
        console.log(r);
      });
  }

  handleSwitch=(e)=>{
    const {regData}=this.state;
    regData[e.target.name]=e.target.checked;
 }

  handleSubmit=(event)=>{
    const {regData}=this.state;
    event.preventDefault();
    const formData = new FormData(event.target);
    for (var key of formData.keys()) {
      regData[key]=formData.get(key);
   }
   regSvc.save(regData).then(r=>{


   });


    console.log(regData);


  }

  render() {
    const {eventInfo, pageMode,regData}=this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>{eventInfo.title}</CardHeader>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12">
          <Form onSubmit={this.handleSubmit} >
           <Card>
              <CardHeader>
                {pageMode === 1 && <strong>Editing Registration - {this.state.regInfo.id} </strong>}
                {pageMode === 0 && <strong>New Registrant Info </strong>}
                <div className="pull-right">
                  <Button
                    className="mr-1"
                    type="submit"
                    size="sm"
                    color="primary"

                  >
                    <i className="fa fa-dot-circle-o" /> Submit
                  </Button>

                  <Button
                    className="ml-1"
                    type="reset"
                    size="sm"
                    color="danger"
                  >
                    <i className="fa fa-ban" /> Reset
                  </Button>
                </div>
              </CardHeader>
              <CardBody>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="reg_name">Name</Label>{" "}
                    </Col>
                    <Col xs="12" md="9">
                      {" "}
                      <Input
                        type="text"
                        id="reg_name"
                        name="reg_name"
                        placeholder="enter full name of the registrant"
                      />{" "}
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="reg_age">Age</Label>{" "}
                    </Col>
                    <Col xs="12" md="9">
                      {" "}
                      <Input
                        type="number"
                        id="reg_age"
                        name="reg_age"
                        placeholder="enter age"
                      />{" "}
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label>Gender</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input
                          className="form-check-input"
                          type="radio"
                          id="reg_genderm"
                          name="reg_gender"
                          value="M"
                        />
                        <Label
                          className="form-check-label"
                          check
                          htmlFor="reg_genderm"
                        >
                          Male
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input
                          className="form-check-input"
                          type="radio"
                          id="reg_genderf"
                          name="reg_gender"
                          value="F"
                        />
                        <Label
                          className="form-check-label"
                          check
                          htmlFor="reg_genderf"
                        >
                          Female
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label>Category</Label>
                    </Col>
                    <Col md="9">
                    <FormGroup check inline>
                        <Input
                          className="form-check-input"
                          type="radio"
                          id="reg-is-member1"
                          name="reg_member_type"
                          value="1"
                        />
                        <Label
                          className="form-check-label"
                          check
                          htmlFor="reg-is-member1"
                        >
                          BK Surrendered
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input
                          className="form-check-input"
                          type="radio"
                          id="reg-is-member0"
                          name="reg_member_type"
                          value="0"
                        />
                        <Label
                          className="form-check-label"
                          check
                          htmlFor="reg-is-member0"
                        >
                          BK Student
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                      <Input
                          className="form-check-input"
                          type="radio"
                          id="reg-is-member2"
                          name="reg_member_type"
                          value="2"
                        />
                        <Label
                          className="form-check-label"
                          check
                          htmlFor="reg-is-member2"
                        >
                          Contact Soul
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                      <Input
                          className="form-check-input"
                          type="radio"
                          id="reg-is-member3"
                          name="reg_member_type"
                          value="3"
                        />
                        <Label
                          className="form-check-label"
                          check
                          htmlFor="reg-is-member3"
                        >
                          Non-BK
                        </Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="reg_email">Email </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="email"
                        id="reg_email"
                        name="reg_email"
                        placeholder="enter email"
                        autoComplete="email"
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="arrival_date">
                        Arriving on
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="date"
                        id="arrival_date"
                        name="arrival_date"
                        placeholder="arrival date"
                      />

                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="depart_date">
                      Departing on
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="date"
                        id="depart_date"
                        name="depart_date"
                        placeholder="depart date"
                      />
                    </Col>
                  </FormGroup>







                  <FormGroup row>
                    <Col md="3">
                      <Label>Other Status</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup  >
                      <AppSwitch id="amt_paid" name="amt_paid"   checked={ regData.amt_paid } onChange={this.handleSwitch} size="sm" className={'mx-1'} variant={'pill'} color={'success'} outline={'alt'}   label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Label className="form-check-label" check htmlFor="amt-paid">Amt Paid ?</Label>


                      </FormGroup>
                      <FormGroup  >
                      <AppSwitch  id="arrived" name="arrived" checked={regData.is_arrived}  onChange={this.handleSwitch} size="sm" className={'mx-1'} variant={'pill'} color={'success'} outline={'alt'}   label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Label className="form-check-label" check htmlFor="arrived">Arrived ?</Label>

                      </FormGroup>

                      <FormGroup  >
                      <AppSwitch id="departed" name="departed" checked={regData.is_departed} onChange={this.handleSwitch} size="sm" className={'mx-1'} variant={'pill'} color={'success'} outline={'alt'}   label dataOn={'\u2713'} dataOff={'\u2715'} />
                      <Label className="form-check-label" check htmlFor="departed">Departed ?</Label>

                      </FormGroup>

                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="reg_remarks">Remarks</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="textarea"
                        name="reg_remarks"
                        id="reg_remarks"
                        rows="3"
                        placeholder="Remarks..."
                      />
                    </Col>
                  </FormGroup>


              </CardBody>
              <CardFooter>
              <Button
                    className="mr-1"
                    type="submit"
                    size="sm"
                    color="primary"

                  >
                  <i className="fa fa-dot-circle-o" /> Submit
                </Button>

                <Button
                  className="ml-1"
                  type="reset"
                  size="sm"
                  color="danger"
                >
                  <i className="fa fa-ban" /> Reset
                </Button>
              </CardFooter>
            </Card>
            </Form>
           </Col>
        </Row>
      </div>
    );
  }
}
export default RegEdit;

