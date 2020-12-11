import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Table, Button, Row, Col, Form, FormGroup, Input,Label , Card, CardBody, CardHeader, Container} from 'reactstrap';
import { Link } from 'react-router-dom';

class AssignVendors extends Component {
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
                        <BreadcrumbItem active>AssignVendors</BreadcrumbItem>
                    </Breadcrumb>
                </div>

    {/*-----------------------------------Customers-------------------------------*/}
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
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                        <i class="fa fa-check-circle"></i>
                        </td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><i class="fa fa-check-circle"></i>
                        </td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td ></td>
                        <td></td>
                        <td></td>
                        <td><i class="fa fa-check-circle"></i>
                        </td>
                        </tr>
                    </tbody>
                    </Table>
                    </div>
           

            </div>
    
    
        );
    }
}
export default AssignVendors;