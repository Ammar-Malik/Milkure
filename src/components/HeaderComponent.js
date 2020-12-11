import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isNavOpen: false,
          isModalLoginOpen: false,
          isModalOrderOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleOrderModal = this.toggleOrderModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
        
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleLoginModal() {
        this.setState({
          isModalLoginOpen: !this.state.isModalLoginOpen
        });
      }

      toggleOrderModal() {
        this.setState({
          isModalOrderOpen: !this.state.isModalOrderOpen
        });
      }
     

      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
      }

      handleOrder(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
      }
     

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/order'><span className="fa fa-address-card fa-lg"></span> Others</NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline href='/msg'  ><span className="fa fa-envelope fa-lg"></span></Button>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-3" navbar>
                                <NavItem>
                                    <Button outline href='/signup'  ><span className="fa fa-sign-in fa-lg"></span> Sign up</Button>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-3" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleLoginModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-3" navbar>
                                <NavItem>
                                    <Button outline ><span className="fa fa-sign-out fa-lg"></span> Log out</Button>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-3" navbar>
                                <NavItem>
                                    <Button outline href='/profile'><span className="fa fa-user fa-lg"></span> Profile</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>     
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-9 col-sm-6">
                                <h1>Milkure</h1>
                                <p>We are committed to delivering quality dairy products at your doorstep.</p>
                            </div>
            { /*------------------------Order Now-----------------------*/}
                            <div className="col-3 col-sm-6" >
                            <Button  onClick={this.toggleOrderModal}  variant="danger" color="danger">Order Now</Button>
                            </div>
                        </div>
                    </div>
                 </Jumbotron>
            { /*------------------------Log in-----------------------*/}   
                <Modal isOpen={this.state.isModalLoginOpen} toggle={this.toggleLoginModal}>
                    <ModalHeader toggle={this.toggleLoginModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                { /*------------------------Order now-----------------------*/} 
                <Modal isOpen={this.state.isModalOrderOpen} toggle={this.toggleOrderModal}>
                    <ModalHeader toggle={this.toggleOrderModal}>Order</ModalHeader>
                    <div className="container">
                    <ModalBody>
                        <Form onSubmit={this.handleOrder}>
                            
                            <FormGroup>
                                <div className="row row-header">
                                    <div className="col-3 col-sm-6">
                                        <input type="checkbox"  id="milk" onChange={this.handleCheck}
                                        defaultChecked={this.state.checked}/> Milk 
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <label>Price 100/kg</label>
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <Label htmlFor="milkamount">Amount in kg</Label>
                                        <Input type="text" id="milkamount" name="milkamount"
                                            innerRef={(input) => this.username = input} />
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <Label htmlFor="yogurtamount">Monthly bill</Label>
                                        <Input type="text" id="yogurtamount" name="yogurtamount"
                                            innerRef={(input) => this.username = input} />
                                     </div>
                                </div>
                            </FormGroup>
                            
                            <FormGroup>
                                <div className="row row-header">
                                    <div className="col-3 col-sm-6">
                                      <input type="checkbox"  id="yogurt" onChange={this.handleCheck}
                                       defaultChecked={this.state.checked}/> Yogurt 
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <label>Price 100/kg</label>
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <Label htmlFor="yogurtamount">Amount in kg</Label>
                                        <Input type="text" id="yogurtamount" name="yogurtamount"
                                            innerRef={(input) => this.username = input} />
                                     </div>
                                     <div className="col-6 col-sm-6">
                                        <Label htmlFor="yogurtamount">Monthly bill</Label>
                                        <Input type="text" id="yogurtamount" name="yogurtamount"
                                            innerRef={(input) => this.username = input} />
                                     </div>
                                </div>
                            </FormGroup>

                            <FormGroup>
                                <div className="row row-header">
                                    <div className="col-3 col-sm-6">
                                      <input type="checkbox"  id="cheese" onChange={this.handleCheck}
                                      defaultChecked={this.state.checked}/> Cheese 
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <label>Price 100/kg</label>
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <Label htmlFor="cheesemount">Amount in kg</Label>
                                        <Input type="text" id="cheeseamount" name="cheeseamount"
                                            innerRef={(input) => this.username = input} />
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <Label htmlFor="yogurtamount">Monthly bill</Label>
                                        <Input type="text" id="yogurtamount" name="yogurtamount"
                                            innerRef={(input) => this.username = input} />
                                     </div>
                                </div>
                            </FormGroup>

                            <FormGroup>
                                <div className="row row-header">
                                    <div className="col-3 col-sm-6">
                                        <input type="checkbox"  id="butter" onChange={this.handleCheck}
                                        defaultChecked={this.state.checked}/> Butter 
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <label>Price 100/kg</label>
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <Label htmlFor="butteramount">Amount in kg</Label>
                                        <Input type="text" id="butteramount" name="butteramount"
                                            innerRef={(input) => this.username = input} />
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <Label htmlFor="yogurtamount">Monthly bill</Label>
                                        <Input type="text" id="yogurtamount" name="yogurtamount"
                                            innerRef={(input) => this.username = input} />
                                     </div>
                                </div>
                            </FormGroup>
                
                            <FormGroup>
                                <Label htmlFor="password">Total</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            
                            <Button type="submit" value="submit" color="primary">Order</Button>
                        </Form>
                    </ModalBody>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Header;