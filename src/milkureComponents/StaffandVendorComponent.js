import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Table, Button, Row, Col, Form, FormGroup, Input,Label , Card, CardBody, CardHeader, Container} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class StaffandVendor extends Component {
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
                        <BreadcrumbItem active>StaffandVendor</BreadcrumbItem>
                    </Breadcrumb>
                </div>

    {/*-----------------------------------Delivery Staff-------------------------------*/}
                <hr/>
                <div>
                    <h3>Delivery Staff</h3>
                </div>
                < div className= "container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Address </th>
                        <th>Mobile</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Button type="submit" value="submit"  color="primary" href="./assigncustomers" className="ml-5">Assign Customers</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Button type="submit" value="submit"  color="primary" href="./assigncustomers" className="ml-5">Assign Customers</Button>
                        </td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td ></td>
                        <td></td>
                        <td></td>
                        <td><Button type="submit" value="submit"  color="primary"href="./assigncustomers" className="ml-5">Assign Customers</Button>
                        </td>
                        </tr>
                    </tbody>
                    </Table>
                    </div>
           

            {/*-----------------------------------Collection Staff-------------------------------*/}
            <hr/>
            <div>
                <h3>Collection Staff</h3>
            </div>
            < div className= "container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th> Name</th>
                    <th>Address </th>
                    <th>Mobile</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><Button type="submit" value="submit"  color="primary" href='/assignvendors' className="ml-5">Assign Vendors</Button>
                    </td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><Button type="submit" value="submit"  color="primary" href='/assignvendors' className="ml-5">Assign Vendors</Button>
                    </td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td ></td>
                    <td></td>
                    <td></td>
                    <td><Button type="submit" value="submit"  color="primary" href='/assignvendors' className="ml-5">Assign Vendors</Button>
                    </td>
                    </tr>
                </tbody>
                </Table>
                </div>
        

        {/*-----------------------------------Vendors-------------------------------*/}
        <hr/>
        <div>
            <h3>Vendors</h3>
        </div>
        < div className= "container">
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th> Name</th>
                <th>Address </th>
                <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td>3</td>
                <td ></td>
                <td></td>
                <td></td>
                </tr>
            </tbody>
            </Table>
            </div>
    </div>
    
    
        );
    }
}
export default StaffandVendor;