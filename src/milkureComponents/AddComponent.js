import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row, Col, Form, FormGroup, Input,Label , Card, CardBody, CardHeader} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Add extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        
    }


    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        //event.preventDefault();
    }
    
    render() {
      
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/mdashboard">MDashboard</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Add</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <hr />
                    </div>                
                </div>
                <div className="row row-header">
                    {/*------------------Add Delivery Staff------------------*/}
                        <div className="col-4 col-sm-4">
                            <Card>
                                <CardHeader>Add Delivery Staff</CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleLogin}>
                                        <FormGroup>
                                            <Label htmlFor="dusername">Name</Label>
                                            <Input type="text" id="dusername" name="dusername" placeholder="Name"
                                                innerRef={(input) => this.dusername = input} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="dmobile">Mobile #</Label>
                                            <Input type="number" id="dmobile" name="dmobile" placeholder="Mobile #"
                                                innerRef={(input) => this.dmobile = input} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="demail">Email</Label>
                                            <Input type="email" id="demail" name="demail" placeholder="Email"
                                                innerRef={(input) => this.demail = input} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="daddress">Address</Label>
                                               <Input type="number" id="dhouse" name="dhouse" placeholder="House #"
                                                innerRef={(input) => this.dhouse = input} />
                                                <Input type="number" id="street" name="street" placeholder="Street #"
                                                innerRef={(input) => this.dstreet = input} />
                                                <Input type="text" id="area" name="area" placeholder="Area"
                                                innerRef={(input) => this.darea = input} />
                                                <Input type="text" id="city" name="city" placeholder="City"
                                                innerRef={(input) => this.dcity = input} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="dpassword">Set Password</Label>
                                            <Input type="password" id="dpassword" name="dpassword" placeholder="Password"
                                                innerRef={(input) => this.dpassword = input}  />
                                        </FormGroup>
                                        <Button type="submit" value="dsubmit" color="primary">Add</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                       </div>
                 {/*------------------Add Collection Staff------------------*/}
                        <div className="col-4 col-sm-4">
                        <Card>
                            <CardHeader>Add Collection Staff</CardHeader>
                            <CardBody>
                                <Form onSubmit={this.handleLogin}>
                                    <FormGroup>
                                        <Label htmlFor="cusername">Name</Label>
                                        <Input type="text" id="cusername" name="cusername" placeholder="Name"
                                            innerRef={(input) => this.username = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="cmobile">Mobile #</Label>
                                        <Input type="number" id="cmobile" name="cmobile" placeholder="Mobile #"
                                            innerRef={(input) => this.cmobile = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="cemail">Email</Label>
                                        <Input type="email" id="cemail" name="cemail" placeholder="Email"
                                            innerRef={(input) => this.cemail = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="cusername">Address</Label>
                                        <Input type="number" id="chouse" name="chouse" placeholder="House #"
                                            innerRef={(input) => this.chouse = input} />
                                            <Input type="number" id="cstreet" name="cstreet" placeholder="Street #"
                                            innerRef={(input) => this.cstreet = input} />
                                            <Input type="text" id="carea" name="carea" placeholder="Area"
                                            innerRef={(input) => this.carea = input} />
                                            <Input type="text" id="ccity" name="ccity" placeholder="City"
                                            innerRef={(input) => this.ccity = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="cpassword">Set Password</Label>
                                        <Input type="password" id="cpassword" name="cpassword" placeholder="Password"
                                            innerRef={(input) => this.cpassword = input}  />
                                    </FormGroup>
                                    <Button type="submit" value="csubmit" color="primary">Add</Button>
                                </Form>
                            </CardBody>
                        </Card>
                        </div>
                  {/*------------------Add Vendor------------------*/}
                        <div className="col-4 col-sm-4">
                        <Card>
                            <CardHeader>Add Vendor</CardHeader>
                            <CardBody>
                                <Form onSubmit={this.handleLogin}>
                                    <FormGroup>
                                        <Label htmlFor="vusername">Name</Label>
                                        <Input type="text" id="vusername" name="vusername" placeholder="Name"
                                            innerRef={(input) => this.vusername = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="vmobile">Mobile #</Label>
                                        <Input type="number" id="vmobile" name="vmobile" placeholder="Mobile #"
                                            innerRef={(input) => this.vmobile = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="vemail">Email</Label>
                                        <Input type="email" id="vemail" name="vemail" placeholder="Email"
                                            innerRef={(input) => this.vemail = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="vusername">Address</Label>
                                        <Input type="number" id="vhouse" name="vhouse" placeholder="House #"
                                            innerRef={(input) => this.vhouse = input} />
                                            <Input type="number" id="vstreet" name="vstreet" placeholder="Street #"
                                            innerRef={(input) => this.vstreet = input} />
                                            <Input type="text" id="varea" name="varea" placeholder="Area"
                                            innerRef={(input) => this.varea = input} />
                                            <Input type="text" id="vcity" name="vcity" placeholder="City"
                                            innerRef={(input) => this.vcity = input} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="password">Set Password</Label>
                                        <Input type="password" id="vpassword" name="vpassword" placeholder="Password"
                                            innerRef={(input) => this.password = input}  />
                                    </FormGroup>
                                    <Button type="submit" value="vsubmit" color="primary">Add</Button>
                                </Form>
                            </CardBody>
                        </Card>
                        </div>
 
                </div>           
               
            </div>
        );
    }
}
export default Add;