import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import * as actions from '../../store/actions/index';
import './Category.css';


class Category extends Component {

    state = {
        
    }

    breadCrumb = [  {  name: 'Home', path: '/', active: true },
                    { name: 'Category', path: '/category', active: false}
                ];

    componentDidMount() {
        this.props.getAllCategories(this.props.history);
    }

    editCategoryHandler = (id) => {
        this.props.history.push({
            pathname: '/addCategory',
            state: { id: id}
        })
    }


    render () {
        return (
            <React.Fragment>
                <BreadCrumb breadCrumb={this.breadCrumb}/>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">Category
                            <div className="card-header-actions">
                                <Link to="/addCategory"><button className="btn btn-primary btn-sm">Add</button></Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Created By</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.props.categories && this.props.categories.map(category => (
                                                <tr style={{cursor: 'pointer'}} key={category.id} onClick={ () => this.editCategoryHandler(category.id)}>
                                                    <td>{category.name}</td>
                                                    <td>{category.createdBy}</td>
                                                    <td>
                                                        <span className="badge badge-success">Active</span>
                                                    </td>
                                                </tr>
                                            ))
                                        }                                                                                                          
                                    </tbody>
                                </table>
                            </div> 
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.category.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllCategories:(history) => dispatch(actions.getCategories(history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
