import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Allotment from "./Allotment";

class ImportDataModal extends React.Component {
  constructor(props) {
    super(props);

  }

  toggle=() =>{
    this.props.toggleAllotmentModal();
  }

  saveAllotment=() =>{
    this.props.saveAllotment();
  }

  render() {

    return (
      <div>

        <Modal size="lg" isOpen={this.props.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>                  <i className="fa fa-bed" /> Allotments    </ModalHeader>
          <ModalBody>
            <Allotment regList={this.props.regIds}/>
          </ModalBody>
          <ModalFooter>
            <Button hidden color="primary" onClick={this.saveAllotment}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ImportDataModal;
