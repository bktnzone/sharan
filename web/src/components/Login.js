import React, { Component } from 'react';
import { Link} from 'react-router-dom'

import { Alert,Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { signIn } from '../api-svc/auth';
class Login extends Component {

  state={
    showError:false,
    errorMessage:''

  }

  handleSubmit=async (event)=>{

      event.preventDefault();
      const elements = event.target.elements;
      const email = elements.emailId.value;
      const password = elements.password.value;
      this.handleLogin({ email, password });

  }
   handleLogin = async (emailid,password) => {

    const result=await signIn(emailid,password);

    if(result.error){
      this.setState({showError:true,errorMessage:result.error});

    }else{
      this.props.history.push('/dashboard');
    }

 }

  render() {

    const {errorMessage,showError}=this.state;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
              <Card className="text-white loginbg py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <div>
                      <img width="200" src="https://bkcentres.netlify.com/static/media/logo.feab9aef.png"/>
                      </div>

                      <p><strong>Tamilnadu Zone </strong></p>
                      <h2>SHARNAM</h2>
                      <p><b>Event & Accomodation <br/>Management System</b> </p>
                      <Link to="/register">

                      </Link>
                    </div>
                  </CardBody>
                </Card>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      { showError && <Alert color="danger">
     {errorMessage}
    </Alert> }
                      <h1 className="loginTitle">Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" name="emailId"  placeholder="enter your email id" autoComplete="email_id" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password"  name="password"  placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="submit" color="primary" className="px-4 loginBtn">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>

              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
