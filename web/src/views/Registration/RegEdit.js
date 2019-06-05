import React, { Component } from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import moment from 'moment';
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
  Alert,
  Table
} from "reactstrap";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import toast from "toasted-notes";
import "toasted-notes/src/styles.css";
import Select from "react-select";
import { apiServices as apiSvc } from "../../api-svc";
import { AppSwitch } from "@coreui/react";

const studentTypes = [
  { value: "Kumar", label: "Kumar" },
  { value: "OKumar", label: "OKumar" },
  { value: "Kumari", label: "Kumari" },
  { value: "Matha", label: "Matha" }
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
      <a href="#" onClick={handleClick}>
        {page}
      </a>
    </li>
  );
};

const options = {
  pageButtonRenderer
};

const { regSvc, eventSvc } = apiSvc;

class RegEdit extends Component {
  state = {
    pageMode: 0,
    eventInfo: {},

    regData: { amt_paid: false }
  };

  componentDidMount = async () => {
    const { regData } = this.state;
    regData.id = this.props.match.params.regId;
    this.setState({ regInfo: regData, pageMode: regData.id > 0 ? 1 : 0 });
    const params = queryString.parse(this.props.location.search);

    if (params.event_id) regData.event_id = params.event_id;

    if (regData.id > 0) {
      let regInfoData = await regSvc.getInfo({ id: regData.id });
      params.event_id = regInfoData.data.event_id;

      this.setState({ regData: regInfoData.data });
    }

    eventSvc.getInfo({ id: params.event_id }).then(r => {
      this.setState({ eventInfo: r.data });
      console.log(r);
    });
  };

  handleSwitch = e => {
    const { regData } = this.state;
    regData[e.target.name] = e.target.checked;
    this.setState({ regData: regData });
  };

  handleCategoryChange = selectedOption => {
    const { regData } = this.state;
    regData.category = selectedOption.value;
    this.setState({ regData: regData });
  };

  handleInputChange = event => {
    const target = event.target;
    const value =
      target.type === "checkbox" || target.type === "radio"
        ? target.checked
        : target.value;
    const name = target.name;

    let regDataNew = { ...this.state.regData, [name]: target.value };
    //regDataNew[name]=target.value;
    this.setState({ regData: regDataNew });
  };

  handleSubmit = event => {
    const { regData } = this.state;
    event.preventDefault();
    const formData = new FormData(event.target);
    for (var key of formData.keys()) {
      if (key != "is_volunteer" && key != "amt_paid"  && key != "is_departed" && key != "is_arrived")
        regData[key] = formData.get(key);
    }

    regSvc.save(regData).then(r => {
      const saveState = regData.id ? "updated" : "added";
      toast.notify("Record " + saveState + " successfully.");

      if (r.data.id) regData.id = r.data.id;
      this.setState({ regData: regData });

      this.props.history.push("/regs/" + r.data.id);
    });

    console.log(regData);
  };

  render() {
    const { eventInfo, pageMode, regData } = this.state;

    return (
      <div className="animated fadeIn regform">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <h5>{eventInfo.title}</h5>
              </CardHeader>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="12">
            <Form onSubmit={this.handleSubmit}>
              <Card>
                <CardHeader>
                  {pageMode === 1 && (
                    <strong>
                      Editing Registration - {this.state.regInfo.id}{" "}
                    </strong>
                  )}
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


                  </div>
                </CardHeader>
                <CardBody>
                  <FormGroup row>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="fullname">Name</Label>
                        <Input
                          type="text"
                          id="fullname"
                          name="fullname"
                          placeholder="enter fullname "
                          defaultValue={regData.fullname}
                          onChange={this.handleInputChange}
                        />
                      </FormGroup>
                    </Col>

                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="centre">Centre</Label>
                        <Input
                          type="text"
                          id="centre"
                          name="centre"
                          placeholder="enter centre name "
                          defaultValue={regData.centre}
                          onChange={this.handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col xs="4">
                      <Label>Gender:</Label>{" "}
                    </Col>
                    <Col xs="2">
                      <Input
                        className="form-check-input"
                        type="radio"
                        id="reg_genderm"
                        name="gender"
                        value="M"
                        checked={this.state.regData.gender === "M"}
                        onChange={this.handleInputChange}
                      />
                      <Label className="form-check-label" htmlFor="reg_genderm">
                        Male
                      </Label>
                    </Col>
                    <Col xs="2">
                      <Input
                        className="form-check-input"
                        type="radio"
                        id="reg_genderf"
                        name="gender"
                        value="F"
                        checked={this.state.regData.gender === "F"}
                        onChange={this.handleInputChange}
                      />
                      <Label className="form-check-label" htmlFor="reg_genderf">
                        Female
                      </Label>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col xs="4">
                      <Label htmlFor="age">Lokik Age</Label>
                      <Input
                        value={regData.age || ""}
                        type="number"
                        id="reg_age"
                        name="age"
                        placeholder="enter lokik age"
                        onChange={this.handleInputChange}
                      />{" "}
                    </Col>
                    <Col xs="4">
                      <Label htmlFor="reg_age">Years in Gyan</Label>{" "}
                      <Input
                        value={regData.gyan_age || ""}
                        onChange={this.handleInputChange}
                        type="text"
                        id="gyan_age"
                        name="gyan_age"
                        placeholder="enter years in gyan"
                      />{" "}
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col xs="6">
                      <Label htmlFor="reg_name">Mobile No</Label>{" "}
                      <Input
                        defaultValue={regData.mobile_no}
                        value={regData.mobile_no || ""}
                        type="text"
                        id="reg_mobile_no"
                        name="mobile_no"
                        placeholder="enter mobile number"
                        onChange={this.handleInputChange}
                      />{" "}
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label>Category</Label>
                    </Col>

                    <Col xs="12" md="9" style={{ zIndex: "99999" }}>
                      <Select
                        name="category"
                        id="category"
                        isClearable
                        isSearchable
                        value={studentTypes.filter(
                          option => option.label === regData.category
                        )}
                        onChange={this.handleCategoryChange}
                        options={studentTypes}
                        placeholder="Select Category"
                        isSearchable={true}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="reg_email">Email </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="email"
                        id="email_id"
                        name="email_id"
                        defaultValue={regData.email_id}
                        placeholder="enter email"
                        autoComplete="email"
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label>Other Status</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup inline>
                        <Label
                          className="form-check-label ml-2"
                          check
                          htmlFor="amt_paid"
                        >
                          Amt Paid ?
                        </Label>
                        <AppSwitch
                          id="amt_paid"
                          name="amt_paid"
                          checked={regData.amt_paid}
                          onChange={this.handleSwitch}
                          size="sm"
                          className={"mx-1"}
                          variant={"pill"}
                          color={"success"}
                          outline={"alt"}
                          label
                          dataOn={"\u2713"}
                          dataOff={"\u2715"}
                        />

                        <Label
                          className="form-check-label ml-2"
                          check
                          htmlFor="is_arrived"
                        >
                          Arrived ?
                        </Label>
                        <AppSwitch
                          id="is_arrived"
                          name="is_arrived"
                          checked={regData.is_arrived}
                          onChange={this.handleSwitch}
                          size="sm"
                          className={"mx-1"}
                          variant={"pill"}
                          color={"success"}
                          outline={"alt"}
                          label
                          dataOn={"\u2713"}
                          dataOff={"\u2715"}
                        />

                        <Label
                          className="form-check-label ml-2"

                          check
                          htmlFor="is_departed"
                        >
                          Departed ?
                        </Label>
                        <AppSwitch
                          id="is_departed"
                          name="is_departed"
                          checked={regData.is_departed}
                          onChange={this.handleSwitch}
                          size="sm"
                          className={"mx-1"}
                          variant={"pill"}
                          color={"success"}
                          outline={"alt"}
                          label
                          dataOn={"\u2713"}
                          dataOff={"\u2715"}
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Col xs="6">
                      <Label htmlFor="reg_name">Arrival Date</Label>{" "}
                      <Input
                       defaultValue={ moment(regData.arrival_date).format('YYYY-MM-DD')}
                       value={moment(regData.arrival_date).format('YYYY-MM-DD') || ""}
                        type="date"
                        id="arrival_date"
                        name="arrival_date"
                        placeholder="enter arrival date"
                        onChange={this.handleInputChange}
                      />{" "}
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col xs="6">
                      <Label htmlFor="reg_name">Departing Date</Label>{" "}
                      <Input
                        defaultValue={ moment(regData.leaving_date).format('YYYY-MM-DD')}
                        value={moment(regData.leaving_date).format('YYYY-MM-DD') || ""}
                        type="date"
                        id="leaving_date"
                        name="leaving_date"
                        placeholder="enter departing date"
                        onChange={this.handleInputChange}
                      />{" "}

<Label
                          className="form-check-label ml-2"

                          check
                          htmlFor="is_volunteer"
                        >
                          Is Sevadhari ?
                        </Label>
                        <AppSwitch
                          id="is_volunteer"
                          name="is_volunteer"
                          checked={regData.is_volunteer}
                          onChange={this.handleSwitch}
                          size="sm"
                          className={"mx-1"}
                          variant={"pill"}
                          color={"success"}
                          outline={"alt"}
                          label
                          dataOn={"\u2713"}
                          dataOff={"\u2715"}
                        />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="reg_remarks">Remarks</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="textarea"
                        value={regData.remarks}
                        name="remarks"
                        id="reg_remarks"
                        rows="3"
                        placeholder="Enter remarks on how many days going to stay as sevadhari or participant"
                        onChange={this.handleInputChange}
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
