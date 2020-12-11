import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row, Col, Form, FormGroup, Input,Label , Card, CardBody, CardHeader} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Signup extends Component {
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
                        <BreadcrumbItem active>Signup</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Signup</h3>
                        <hr />
                    </div>                
                </div>
                <div>
                <Card>
                    <CardHeader>Signup</CardHeader>
                    <CardBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Name</Label>
                                <Input type="text" id="username" name="username" placeholder="Name"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="mobile">Mobile #</Label>
                                <Input type="number" id="mobile" name="mobile" placeholder="Mobile #"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email" placeholder="Email"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="username">Address</Label>
                                <Input type="number" id="house" name="house" placeholder="House #"
                                    innerRef={(input) => this.username = input} />
                                    <Input type="number" id="street" name="street" placeholder="Street #"
                                    innerRef={(input) => this.username = input} />
                                    <Input type="text" id="area" name="area" placeholder="Area"
                                    innerRef={(input) => this.username = input} />
                                    <Input type="text" id="city" name="city" placeholder="City"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Set Password</Label>
                                <Input type="password" id="password" name="password" placeholder="Password"
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
                    </CardBody>
                </Card>
                </div>
 
                            
               
            </div>
        );
    }
}
    export default Signup;
