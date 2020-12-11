import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,Table, Button, Row, Col, Form, FormGroup, Input,Label , Card, CardBody, CardHeader, Container} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

class Customers extends Component {
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
                        <BreadcrumbItem active>Customers</BreadcrumbItem>
                    </Breadcrumb>
                </div>

    {/*-----------------------------------Customers List-------------------------------*/}
                <hr/>
                <div>
                    <h3>Customers</h3>
                </div>
                < div className= "container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Address </th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td><Button type="submit" value="submit"  color="primary" className="ml-5">Pending</Button>
                        <Button type="submit" value="submit"  color="primary" className="ml-5">Delivered</Button></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                        <td><Button type="submit" value="submit"  color="primary" className="ml-5">Pending</Button>
                        <Button type="submit" value="submit"  color="primary" className="ml-5">Delivered</Button></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td ></td>
                        <td></td>
                        <td><Button type="submit" value="submit"  color="primary" className="ml-5">Pending</Button>
                        <Button type="submit" value="submit"  color="primary" className="ml-5">Delivered</Button></td>
                        </tr>
                    </tbody>
                    </Table>
                    </div>
            </div>
        );
    }
}
export default Customers;