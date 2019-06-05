import React, { Component } from "react";
import { Link } from "react-router-dom";
import Util from "../Shared/Util";
import Select from "react-select";
import { AppSwitch } from "@coreui/react";
import { apiServices as apiSvc } from "../../api-svc";
import confirm from "reactstrap-confirm";
import AllotmentModal from "./AllotmentModal";
import RegTpl from "./RegTpl";
import {
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Collapse,
  CardBody,
  CardHeader,
  Col,
  Card,
  Row,
  FormGroup
} from "reactstrap";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import toast from "toasted-notes";
import "toasted-notes/src/styles.css";
const { SearchBar, ClearSearchButton } = Search;

const { regSvc, eventSvc } = apiSvc;

const importCols = [
  {
    dataField: "centre",
    text: "Centre"
  },
  {
    dataField: "fullname",
    text: "Name"
  },
  {
    dataField: "gender",
    text: "Gender"
  },
  {
    dataField: "age",
    text: "Age"
  },
  {
    dataField: "category",
    text: "Category"
  },
  {
    dataField: "gyan_age",
    text: "Gyan years"
  },
  {
    dataField: "amt_paid",
    text: "Paid"
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
  height: 200
});

class RegList extends Component {
  state = {
    //decodedToken: getDecodedToken(), // retrieves the token from local storage if valid, else will be null
    regDataList: [],
    selectedEvent: null,
    selected: [],
    eventList: [],
    importList: [],
    allotmentForRegList: [],
    collapseReg: true,
    showImportModal: false,
    showAllotment: false,
    isVerified: false
  };

  handleSwitch = async (e, rowInfo) => {
    await this.applyPatch(rowInfo.id, { [e.target.name]: e.target.checked });
  };

  constructor(props) {
    super(props);
  }

  applyPatch = async (itemId, patchParams) => {
    return regSvc.patch({ id: itemId, ...patchParams }).then(p => {
      if (!(patchParams.is_active === 0)) toast.notify("updated registration");
    });
  };

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;

    this.setState({ [name]: target.value });
  };

  componentDidMount = async () => {
    await this.getEvents();

    this.load();
  };

  getEvents = async () => {
    eventSvc.getList({ venue_id: 1 }).then(r => {
      const events = r.data.items.map(e => {
        return { label: e.title, value: e.id };
      });
      this.setState(
        { selectedEvent: events[0], eventList: events },
        this.handleChange(events[0])
      );
    });
  };

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
  };

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
  };

  parseData = importContent => {
    let rows = importContent.split("\n");
    const records = rows.map(r => {
      const colInfo = r.split("\t");
      let regInfo = {
        centre: colInfo[0],
        fullname: colInfo[1],
        gender: colInfo[2],
        age: colInfo[3] ? colInfo[3] : 0,
        category: colInfo[4] ? colInfo[4] : "-",
        gyan_age: colInfo[5] ? colInfo[5] : 0,
        amt_paid: colInfo[6] === "Y",
        mobile_no: colInfo[7] ? colInfo[7] : ""
      };
      return regInfo;
    });
    return records;
  };

  importRegList = async () => {
    let importList = this.state.importList;

    let promises = importList.map(regInfo => {
      return new Promise((resolve, reject) => {
        regInfo.event_id = this.state.selectedEvent.value;
        return regSvc.save(regInfo).then(res => {
          resolve(res);
        });
      });
    });

    const resp = await Promise.all(promises);
    toast.notify("Imported registrations");
    this.setState({ isVerified: false });
  };

  verifyContent = () => {
    let content = this.state.importText;
    let actualDataList = this.parseData(content);
    this.setState({ importList: actualDataList, isVerified: true });
  };

  toggleImportModal = () => {
    this.setState({
      showImportModal: !this.state.showImportModal
    });
  };
  handleDelete = async selectedItems => {
    let result = await confirm(Util.defaultDeleteOption); //will display a confirmation dialog with default settings
    if (result) {
      Promise.all(
        selectedItems.map(async regId => {
          this.applyPatch(regId, { is_active: 0 });
        })
      ).then(p => {
        toast.notify("deleted selected registrations.");
        this.load();
      });
    }
  };

  handleCollapse = ctr => {
    const items = ["collapseAllot", "collapseReg"];
    this.setState({ [items[ctr]]: !this.state[items[ctr]] });
  };

  toggleAllotmentModal = () => {
    this.setState({ showAllotment: false });
  };

  saveAllotment = () => {
    this.setState({ showAllotment: false });
  };
  handleAllotment = (e, allotmentRegInfo) => {
    if (allotmentRegInfo) {
      this.setState({ allotmentForRegList: [allotmentRegInfo] });
    } else {
      let regSelectedList = this.state.regDataList.filter(
        r => this.state.selected.indexOf(r.id) >= 0
      );
      this.setState({ allotmentForRegList: regSelectedList });
    }
    this.setState({ showAllotment: true });
  };
  handleChange = item => {
    this.setState({ loading: true });
    this.setState({ selectedEvent: item }, () => {
      this.load();
    });
  };

  refreshPage = () => {
    this.load();
  };

  load() {
    const event_id = this.state.selectedEvent
      ? this.state.selectedEvent.value
      : 0;
    console.log(this.state.selectedEvent);
    // display loading page
    this.setState({ loading: true });

    // load all of the rooms from the database
    regSvc
      .getList({ event_id: event_id })
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
    const columns = [
      {
        dataField: "id",
        text: "RegId",
        width: "30",
        formatter: (cellContent, row) => {
          const path = "/regs/" + row.id; // + "?event_id=" + row.event_id;
          return <Link to={path}>{row.id}</Link>;
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
        searchable: true,
        sort: true
      },
      {
        dataField: "centre",
        text: "Centre",
        searchable: true,
        sort: true
      },
      {
        dataField: "gyan_age",
        text: "In Gyan"
      },
      {
        dataField: "gender",
        text: "Gender",
        searchable: true,
        sort: true
      },
      {
        dataField: "category",
        text: "Category",
        searchable: true,
        sort: true,
        formatter: (cellContent, row) => {
          return <span>{row.category}</span>;
        }
      },

      {
        dataField: "alotted",
        text: "Room",
        formatter: (cellContent, row) => {
          const path = "/regs/" + row.id; // + "?event_id=" + row.event_id;
          const AllotBtn = () => {
            return (
              <Button
                onClick={e => this.handleAllotment(e, row)}
                className="btn btn-primary"
                size="sm"
              >
                Allot
              </Button>
            );
          };
          const AllotInfo = () => {
            return (
              <small>
                {" "}
                {row.btitle}-{row.floor_no}-{row.room_title}
              </small>
            );
          };
          if (row.btitle) return <AllotInfo />;
          else return <AllotBtn />;
        }
      },
      {
        dataField: "arrived",
        text: "Arrived",
        searchable: true,
        sort: true,
        formatter: (cellContent, row) => {
          return (
            <React.Fragment>
              <AppSwitch
                onChange={e => this.handleSwitch(e, row)}
                checked={row.is_arrived == 1}
                size="sm"
                name="is_arrived"
                className={"mx-1"}
                variant={"pill"}
                color={"success"}
                outline={"alt"}
                label
                dataOn={"\u2713"}
                dataOff={"\u2715"}
              />
            </React.Fragment>
          );
        }
      },

      {
        dataField: "amt_paid",
        text: "Paid?",
        searchable: true,
        sort: true,
        formatter: (cellContent, row) => {
          return (
            <React.Fragment>
              <AppSwitch
                onChange={e => this.handleSwitch(e, row)}
                checked={row.amt_paid == 1}
                size="sm"
                name="amt_paid"
                className={"mx-1"}
                variant={"pill"}
                color={"success"}
                outline={"alt"}
                label
                dataOn={"\u2713"}
                dataOff={"\u2715"}
              />
            </React.Fragment>
          );
        }
      }
    ];
    const selectRow = {
      mode: "checkbox", // multiple row selection
      selected: this.state.selected,
      onSelect: this.handleOnSelect
    };

    const {
      importList,
      collapseReg,
      showImportModal,
      selectedEvent,
      eventList,
      regDataList,
      isVerified,
      showAllotment,
      allotmentForRegList
    } = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={4} lg={4} className="pull-left">
            <AllotmentModal
              modal={showAllotment}
              regIds={allotmentForRegList}
              saveAllotment={this.saveAllotment}
              toggleAllotmentModal={this.toggleAllotmentModal}
            />
            <Select
              styles={customControlStyles}
              value={selectedEvent}
              isClearable
              isSearchable
              onChange={this.handleChange}
              options={eventList}
              placeholder="Select Event"
              isSearchable={true}
            />
          </Col>
        </Row>

        {selectedEvent && (
          <Row>
            <Col xl={12} lg={12}>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify" /> Registration List
                  <div className="card-header-actions">
                    <a
                      className="card-header-action btn btn-minimize"
                      data-target="#collapseAllot"
                      onClick={() => {
                        this.handleCollapse(1);
                      }}
                    >
                      <i
                        className={
                          this.state.collapseReg
                            ? "icon-arrow-down"
                            : "icon-arrow-up"
                        }
                      >
                        {" "}
                      </i>
                    </a>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapseReg} id="collapseReg">
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
                          <div
                            className="pull-left ml-0 btn-group"
                            role="group"
                          >
                            <Button
                              onClick={this.toggleImportModal}
                              className="btn btn-primary ml-1"
                              color="primary"
                              size="sm"
                            >
                              Import Data
                            </Button>

                            <Modal
                              isOpen={showImportModal}
                              toggle={this.toggleImportModal}
                              className={
                                "modal-primary " + this.props.className
                              }
                            >
                              <ModalHeader toggle={this.toggleImportModal}>
                                Import Registrations
                              </ModalHeader>
                              <ModalBody>
                                <FormGroup row>
                                  <Col xs="12">
                                    Please copy the content without the HEADING
                                    from the excel and paste them here to import
                                    the registration data list. Please follow
                                    the same order of the column.
                                  </Col>
                                </FormGroup>
                                <FormGroup row>
                                  <Col xs="12">
                                    <RegTpl />
                                    <table border="0" cellpadding="3">
                                      <tr>
                                        <td>Centre</td>
                                        <td>FullName</td>
                                        <td>Gender</td>
                                        <td>Age</td>
                                        <td>Category</td>
                                        <td>Years_Gyan</td>
                                        <td>Paid</td>
                                        <td>MobileNo</td>
                                      </tr>
                                      <tr>
                                        <td colspan="7" />
                                      </tr>
                                    </table>
                                  </Col>
                                </FormGroup>

                                <FormGroup row>
                                  <Col xs="12">
                                    <Input
                                      type="textarea"
                                      name="importText"
                                      id="importText"
                                      onChange={this.handleInputChange}
                                    />
                                  </Col>
                                </FormGroup>

                                <FormGroup row>
                                  <Col xs="12">
                                    <Button
                                      size="sm"
                                      color="secondary"
                                      onClick={this.verifyContent}
                                    >
                                      Verify
                                    </Button>{" "}
                                  </Col>
                                </FormGroup>
                                {isVerified && (
                                  <div>
                                    <FormGroup row>
                                      <Col xs="12">
                                        <BootstrapTable
                                          keyField="id"
                                          data={importList}
                                          columns={importCols}
                                        />
                                      </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                      <Col xs="12">
                                        <Button
                                          size="sm"
                                          color="secondary"
                                          onClick={this.importRegList}
                                        >
                                          Import Registrations
                                        </Button>{" "}
                                      </Col>
                                    </FormGroup>
                                  </div>
                                )}
                              </ModalBody>
                              <ModalFooter>
                                <Button
                                  color="secondary"
                                  onClick={this.toggleImportModal}
                                >
                                  Cancel
                                </Button>
                              </ModalFooter>
                            </Modal>

                            <Link
                              to={"/regs/0?event_id=" + selectedEvent.value}
                            >
                              <Button
                                renderas="button"
                                color="primary"
                                size="sm"
                              >
                                <span>Add New</span>
                              </Button>
                            </Link>
                            <Button
                              disabled={this.state.selected.length == 0}
                              className="btn btn-success ml-1"
                              color="danger"
                              size="sm"
                              onClick={e =>
                                this.handleDelete(this.state.selected)
                              }
                            >
                              Delete
                            </Button>
                            <Button
                              disabled={this.state.selected.length == 0}
                              className="btn btn-success ml-1"
                              color="success"
                              size="sm"
                              onClick={this.handleAllotment}
                            >
                              Allotment
                            </Button>

                            <Button
                              onClick={this.refreshPage}
                              className="btn btn-secondary ml-1"
                              color="warning"
                              size="sm"
                            >
                              Refresh
                            </Button>
                          </div>

                          <div className="pull-right">
                            <SearchBar {...props.searchProps} />
                            <ClearSearchButton {...props.searchProps} />
                          </div>
                          <div />
                          <BootstrapTable
                            keyField="id"
                            key="tbl1"
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
                </Collapse>
              </Card>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

export default RegList;
