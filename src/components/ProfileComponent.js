import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row, Col, Form, FormGroup, Input,Label , Card, CardBody, CardHeader, Container} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Profile extends Component {
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
                        <BreadcrumbItem active>Profile</BreadcrumbItem>
                    </Breadcrumb>
                </div>

    {/*-----------------------------------Edit Profile-------------------------------*/}
                <hr/>
                <div>
                <Card>
                    <CardHeader><h3>Profile</h3></CardHeader>
                    <CardBody>
                        < div className= "container">
                        <Form >
                            
                                    <FormGroup>
                                    <div className="row row-header">
                                        <div className="col-3 col-sm-3">
                                            <Label htmlFor="username">Name:</Label>
                                        </div>
                                        <div className="col-8 col-sm-8"></div>
                                        <div className="col-1 col-sm-1">
                                            <span className="fa fa-edit "></span>
                                        </div>
                                    </div>   
                                    </FormGroup>
                                    
                                    
                                    <FormGroup>
                                    <div className="row row-header">
                                    <div className="col-3 col-sm-3">
                                        <Label htmlFor="mobile">Mobile #:</Label>
                                        </div>
                                        <div className="col-8 col-sm-8"></div>
                                        <div className="col1- col-sm-1">
                                        <span className="fa fa-edit "></span>
                                        </div>
                                    </div>
                                    </FormGroup>
                                    
                                    <FormGroup>
                                    <div className="row row-header">
                                    <div className="col-3 col-sm-3">
                                        <Label htmlFor="email">Email:</Label>
                                        </div> 
                                        <div className="col-8 col-sm-8"></div>
                                        <div className="col-1 col-sm-1">
                                        <span className="fa fa-edit "></span>
                                        </div>
                                    </div>
                                    </FormGroup>
                                    <FormGroup>
                                    <div className="row row-header">
                                    <div className="col-3 col-sm-3">
                                        <Label htmlFor="username">Address:</Label>
                                        </div>
                                        <div className="col-8 col-sm-8"></div>
                                        <div className="col-1 col-sm-1">
                                        <span className="fa fa-edit "></span>
                                        </div>
                                    </div>
                                    </FormGroup>
                                    <FormGroup>
                                    <div className="row row-header">
                                    <div className="col-3 col-sm-3">
                                        <Label htmlFor="password">Password:</Label>
                                        </div>
                                        <div className="col-8 col-sm-8"></div>
                                        <div className="col-1 col-sm-1">
                                        <span className="fa fa-edit "></span>
                                        </div>
                                    </div>
                                    </FormGroup>
                            <Button type="submit" value="change" color="primary">Save Changes</Button>
                            
                        </Form>
                        </div>
                    </CardBody>
                </Card>
                </div>
                {/*-----------------------------------Bill-------------------------------*/}
                <hr/>
                <div>
                <Card>
                    <CardHeader><h3>Bill</h3></CardHeader>
                    <CardBody>
                        < div className= "container">
                        <Form >
                            
                                    <FormGroup>
                                    <div className="row row-header">
                                        <div className="col-3 col-sm-3">
                                            <Label htmlFor="product">Products:</Label>
                                        </div>
                                        <div className="col-8 col-sm-8"></div>  
                                    </div>   
                                    </FormGroup>
                                    
                                    
                                    <FormGroup>
                                    <div className="row row-header">
                                    <div className="col-3 col-sm-3">
                                        <Label htmlFor="amount">Total amount:</Label>
                                        </div>
                                        <div className="col-8 col-sm-8"></div>   
                                    </div>
                                    </FormGroup>
                                    
                                    <FormGroup>
                                    <div className="row row-header">
                                    <div className="col-3 col-sm-3">
                                        <Label htmlFor="date">Date:</Label>
                                        </div> 
                                        <div className="col-8 col-sm-8"></div>   
                                    </div>
                                    </FormGroup>
                                    <FormGroup>
                                    <div className="row row-header">
                                    <div className="col-3 col-sm-3">
                                        <Label htmlFor="bill">Bill:</Label>
                                        </div>
                                        <div className="col-8 col-sm-8"></div>   
                                    </div>
                                    </FormGroup>
                        </Form>
                        </div>
                    </CardBody>
                </Card>
                </div>
            </div>
        );
    }
}
export default Profile;
