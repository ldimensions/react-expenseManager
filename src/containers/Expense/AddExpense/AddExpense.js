import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb';
import './AddExpense.css';


class AddExpense extends Component {

    state = {
        breadCrumb : [  {  name: 'Home', path: '/', active: true },
                        { name: 'Expense', path: '/expense', active: true} ,
                        { name: 'Add Expense', path: '/addExpense', active: false}
                    ]
    }

    render () {
        return (
            <React.Fragment>
                <BreadCrumb breadCrumb={this.state.breadCrumb}/>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">Add Expense</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="position-relative form-group">
                                        <label htmlFor="name" className="">Name</label>
                                        <input id="name" placeholder="Enter your name" type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AddExpense;
