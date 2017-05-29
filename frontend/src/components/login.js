import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  Form,
  Jumbotron,
  PageHeader,
  InputGroup,
  Glyphicon,
  HelpBlock,
  Button,
  Alert,
  Modal,
} from 'react-bootstrap';

import { logger, login, confirmUsernameValidationFromBackend, registerUser } from '../utils';

export class Login extends Component{

  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      unameErr: null,
      pwdErr: null,
      unamePwdErr: null,
      showRegisterModal: null,
    };

    this.sendLoginRequest = this.sendLoginRequest.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
    this.showRegisterModal = this.showRegisterModal.bind(this);
    this.closeRegisterModal = this.closeRegisterModal.bind(this);
  }

  getUsernameValidationState() {
    if (this.state.username === '' || this.state.unameErr) {
      return 'error';
    }
  }

  getPasswordValidationState() {
    if (this.state.password === '' || this.state.pwdErr) {
      return 'error';
    }
  }

  showRegisterModal() {
    this.setState({showRegisterModal: true});
  }

  closeRegisterModal() {
    this.setState({showRegisterModal: false});
  }

  sendRegisterRequest() {

  }

  onUsernameChange(event) {
    this.setState({username: event.target.value, unameErr: null});
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value, pwdErr: null});
  }

  handleAlertDismiss() {
    this.setState({unamePwdErr: null});
  }

  sendLoginRequest(event) {
    /*  Function is called when Login button is clicked in the modal window,
     it extracts the text in username and password element, and calls the
     props function loginUser
     */
    event.preventDefault();

    let username = this.state.username;
    let password = this.state.password;

    logger.container("Login", "sendLoginRequest", {username});
    logger.dir(username);

    logger.container("Login", "sendLoginRequest", {password});
    logger.dir(password);

    if (!username){
      logger.container("Login", "sendLoginRequest", "if(!username)", {username});
      this.setState({
        unameErr: "Username can't be empty",
      })
    }
    else{
      logger.container("Login", "sendLoginRequest", "else(!username)", {password});
      this.setState({unameErr: null})
    }

    if (!password){
      logger.container("Login", "sendLoginRequest", "if(!password)", {password});
      this.setState({
        pwdErr: "Password can't be empty",
      })
    }
    else{
      logger.container("Login", "sendLoginRequest", "else(!password)", {password});
      this.setState({pwdErr: null})
    }

    if (username && password){
      logger.container("Login", "sendLoginRequest", "if (username && password)", {password});
      const request_data = {
        username,
        password,
      };
      login(request_data, (userLoggedIn) => {
        if (userLoggedIn){
          logger.container("Login", "sendLoginRequest", {userLoggedIn});
        }
        else{
          this.setState({
            unamePwdErr: "Username/Password Not Matching",
          })
        }
      });
    }
  }

  render() {
    return (
      <div className="login-form container">
        <PageHeader>Make A Doc</PageHeader>
        <Jumbotron className="row">
          <div className="row">
            <div className="col-md-offset-4 col-md-4">
              {this.state.unamePwdErr? <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss} className="text-center">{this.state.unamePwdErr}</Alert>: null}
              <Form>
                <FormGroup controlId="login-form" validationState={this.getUsernameValidationState()}>
                  <InputGroup>
                    <InputGroup.Addon>
                      <Glyphicon glyph="glyphicon glyphicon-user"/>
                    </InputGroup.Addon>
                    <FormControl type="text" placeholder="Enter Username" onChange={this.onUsernameChange}></FormControl>
                  </InputGroup>
                  <HelpBlock>{this.state.unameErr}</HelpBlock>
                </FormGroup>
                <FormGroup controlId="loginForm" validationState={this.getPasswordValidationState()}>
                  <InputGroup>
                    <InputGroup.Addon>
                      <Glyphicon glyph="glyphicon glyphicon-lock"/>
                    </InputGroup.Addon>
                    <FormControl type="password" placeholder="Enter Password" onChange={this.onPasswordChange}></FormControl>
                  </InputGroup>
                  <HelpBlock>{this.state.pwdErr}</HelpBlock>
                </FormGroup>
                <Button id="login-confirm-button" bsStyle="warning"
                        type="submit" onClick={this.sendLoginRequest} block>
                  Login
                </Button>
              </Form>
            </div>
          </div>
          <div>
            <Button id="register-user" bsStyle="link" onClick={this.showRegisterModal}>
              Register
            </Button>
          </div>
        </Jumbotron>
        <UserRegisterModal
          show={this.state.showRegisterModal}
          closeModal={this.closeRegisterModal}
        />
      </div>
    )
  }
}

export class UserRegisterModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      username: null,
      password: null,
      confirmedPassword: null,
      firstNameErr: null,
      lastNameErr: null,
      confirmPwdErr: null,
      pwdErr: null,
      unameErr: null,
    };

    this.onModalExit = this.onModalExit.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onPasswordCheckChange = this.onPasswordCheckChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  onModalExit() {
    this.setState({
      firstName: null,
      lastName: null,
      username: null,
      password: null,
      confirmedPassword: null,
      firstNameErr: null,
      lastNameErr: null,
      confirmPwdErr: null,
      pwdErr: null,
      unameErr: null,
    })
  }

  onFirstNameChange(event) {
    this.setState({firstName: event.target.value, firstNameErr: null});
  }

  onLastNameChange(event) {
    this.setState({lastName: event.target.value, lastNameErr: null});
  }

  onUsernameChange(event) {
    this.setState({username: event.target.value, unameErr: null});
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value, pwdErr: null});
  }

  onPasswordCheckChange(event) {
    logger.component("UserRegisterModal", "onPasswordCheckChange", {Value: event.target.value, State: this.state});
    if (event.target.value !== this.state.password) {
      this.setState({confirmedPassword: event.target.value, confirmPwdErr: 'Password not Matching'});
    }
    else{
      this.setState({confirmedPassword: event.target.value, confirmPwdErr: null});
    }
  }

  getFirstNameValidationState() {
    if (this.state.firstNameErr) return 'error';
    else if (this.state.firstName === '') return 'error';
  }

  getLastNameValidationState() {
    if (this.state.lastNameErr) return 'error';
    else if (this.state.lastName === '') return 'error';
  }

  getUsernameValidationState(){
    if (this.state.unameErr) return 'error';
    else if (this.state.username === '') return 'error';
  }

  getPasswordValidationState(){
    if (this.state.pwdErr) return 'error';
    else if (this.state.password === '') return 'error';
  }

  getPasswordConfirmValidationState(){
    if (this.state.confirmPwdErr) return 'error';
    else if (this.state.confirmedPassword === '') return 'error';
    else if (this.state.confirmedPassword !== null && this.state.confirmedPassword !== this.state.password) return 'error';
  }

  registerUser(event){

    logger.container("UserRegisterModal", "registerUser", {State: this.state});

    if (!this.state.username) this.setState({unameErr: 'Username Must be present'});
    if (!this.state.firstName) this.setState({firstNameErr: 'FirstName Must be present'});
    if (!this.state.lastName) this.setState({lastNameErr: 'LastName Must be present'});
    if (!this.state.password) this.setState({pwdErr: 'Password Must be present'});
    if (!this.state.confirmedPassword) this.setState({confirmPwdErr: 'Password Must be present'});

    if (this.state.username && this.state.password && this.state.firstName && this.state.lastNameErr && this.state.confirmedPassword) {
      registerUser({
        username: this.state.username,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      })
    }
    event.preventDefault();

  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.closeModal} onExit={this.onModalExit}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center" componentClass="h3">
            Register New User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="row">
          <div className="col-md-offset-2 col-md-8">
            <Form>
              <FormGroup controlId="register-form-username" validationState={this.getFirstNameValidationState()} required>
                <FormControl type="text" placeholder="First Name" onChange={this.onFirstNameChange} />
                <HelpBlock>{this.state.firstNameErr}</HelpBlock>
              </FormGroup>
              <FormGroup controlId="register-form-username" validationState={this.getLastNameValidationState()} required>
                <FormControl type="text" placeholder="Last Name" onChange={this.onLastNameChange} />
                <HelpBlock>{this.state.lastNameErr}</HelpBlock>
              </FormGroup>
              <FormGroup controlId="register-form-username" validationState={this.getUsernameValidationState()} required>
                <InputGroup>
                  <InputGroup.Addon>
                    <Glyphicon glyph="glyphicon glyphicon-user"/>
                  </InputGroup.Addon>
                  <FormControl type="text" placeholder="Username" onChange={this.onUsernameChange} />
                </InputGroup>
                <HelpBlock>{this.state.unameErr}</HelpBlock>
              </FormGroup>
              <FormGroup controlId="register-form-password" validationState={this.getPasswordValidationState()} required>
                <InputGroup>
                  <InputGroup.Addon>
                    <Glyphicon glyph="glyphicon glyphicon-lock"/>
                  </InputGroup.Addon>
                  <FormControl type="password" placeholder="Password" onChange={this.onPasswordChange} />
                </InputGroup>
                <HelpBlock>{this.state.pwdErr}</HelpBlock>
              </FormGroup>
              <FormGroup controlId="register-form-password-check" validationState={this.getPasswordConfirmValidationState()} required>
                <InputGroup>
                  <InputGroup.Addon>
                    <Glyphicon glyph="glyphicon glyphicon-lock"/>
                  </InputGroup.Addon>
                  <FormControl type="password" placeholder="Re-Enter Password" onChange={this.onPasswordCheckChange} />
                </InputGroup>
                <HelpBlock>{this.state.confirmPwdErr}</HelpBlock>
              </FormGroup>
              <Button type="submit" bsStyle="info" onClick={this.registerUser} block>Register</Button>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    )
  }
}