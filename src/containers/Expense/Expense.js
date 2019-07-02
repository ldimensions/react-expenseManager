import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import './Expense.css';


class Expense extends Component {

    state = {
        breadCrumb : [ {  name: 'Home', path: '/', active: true },{ name: 'Expense', path: '/expense', active: false} ]
    }

    render () {
        return (
            <React.Fragment>
                <BreadCrumb breadCrumb={this.state.breadCrumb}/>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">Card title
                            <div className="card-header-actions">
                                <Link to="/addExpense"><button className="btn btn-primary btn-sm">Add</button></Link>
                            </div>
                        </div>
                        
                        <div className="card-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Expense;
