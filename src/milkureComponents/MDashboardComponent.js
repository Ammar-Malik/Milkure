import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Table, Button, Row, Col, Form, FormGroup, Input,Label , Card, CardBody, CardHeader, Container} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';


import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";

class MDashboard extends Component{

    render() {
        return(
    
        <div className="row row-header">
            {/*-------------------Sidebar menu---------------------*/}
            <div className="col-3 col-sm-3">
                    <div className="sidebar-container">
                        <Nav vertical className="list-unstyled pb-3">
                        <h3>Dashboard</h3>
                        <NavItem>
                            <NavLink href='/customers'>
                            Customers list
                            </NavLink>
                            <NavLink  href='/add'>
                            Add staff & vendors
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/staffandvendor'> 
                            Staff & vendors list
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/mdashboard'>
                            Supply & Demand
                            </NavLink>
                        </NavItem>
                        </Nav>
                    </div>
            </div>
            {/*-------------------Supply & Demand---------------------*/}
            <div className="col-9 col-md-9">
                       <div className="col-9 col-md-9">
                            <Card>
                                <CardHeader className="bg-primary text-white">Milk</CardHeader>
                                <CardBody>
                                    <dl className="row p-1">
                                        <dt className="col-6">Supply</dt>
                                        <dd className="col-6">----------</dd>
                                        <dt className="col-6">Demand</dt>
                                        <dd className="col-6">----------</dd>

                                    </dl>
                                </CardBody>
                            </Card>
                        </div>
                         <hr/>
                        <div className="col-9 col-md-9">
                            <Card>
                                <CardHeader className="bg-primary text-white">Butter</CardHeader>
                                <CardBody>
                                    <dl className="row p-1">
                                        <dt className="col-6">Supply</dt>
                                        <dd className="col-6">----------</dd>
                                        <dt className="col-6">Demand</dt>
                                        <dd className="col-6">----------</dd>
                                    </dl>
                                </CardBody>
                            </Card>
                        </div>
                        <hr/>
                        <div className="col-9 col-md-9">
                            <Card>
                                <CardHeader className="bg-primary text-white">Cheese</CardHeader>
                                <CardBody>
                                    <dl className="row p-1">
                                        <dt className="col-6">Supply</dt>
                                        <dd className="col-6">----------</dd>
                                        <dt className="col-6">Demand</dt>
                                        <dd className="col-6">----------</dd>
                                    </dl>
                                </CardBody>
                            </Card>
                        </div>
                        <hr/>
                        <div className="col-9 col-md-9">
                            <Card>
                                <CardHeader className="bg-primary text-white">Yogurt</CardHeader>
                                <CardBody>
                                    <dl className="row p-1">
                                        <dt className="col-6">Supply</dt>
                                        <dd className="col-6">----------</dd>
                                        <dt className="col-6">Demand</dt>
                                        <dd className="col-6">----------</dd>
                                    </dl>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
        </div>
    
  );
  
}
}
  
  export default MDashboard;