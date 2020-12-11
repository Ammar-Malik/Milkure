import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Others from './OthersComponent';
import Signup from './SignupComponent';
import Profile from './ProfileComponent';
import DMain from './DMainComponent';
import CSMain from './CSMainComponent';
import Vendor from './VendorComponent';
import MDashboard from '../milkureComponents/MDashboardComponent';
import Add from '../milkureComponents/AddComponent';
import Customers from '../milkureComponents/CustomerComponent';
import StaffandVendor from '../milkureComponents/StaffandVendorComponent';
import AssignCustomers from '../milkureComponents/AssignCustomersComponent';
import AssignVendors from '../milkureComponents/AssignVendorsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});



class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        addComment={this.props.addComment}/>
      );
    };
    
    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} /> 
              <Route exact path='/contactus' component={Contact} />
              <Route path='/order' component={Others} />
              <Route path='/signup' component={Signup} />
              <Route path='/profile' component={Profile} />
              <Route path='/dmain' component={DMain} />
              <Route path='/csmain' component={CSMain} />
              <Route path='/vendor' component={Vendor} />
              <Route path='/mdashboard' component={MDashboard} />
              <Route path='/add' component={Add} />
              <Route path='/customers' component={Customers} />
              <Route path='/staffandvendor' component={StaffandVendor} />
              <Route path='/assigncustomers' component={AssignCustomers} />
              <Route path='/assignvendors' component={AssignVendors} />
              <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));