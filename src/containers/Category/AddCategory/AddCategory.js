import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb';
import './AddCategory.css';

class AddCategory extends Component {

    state = {
        id: '',
        name: '',
        category: '',
        description: '',
        order: 0,
        errors: {}
    }

    breadCrumb = [  {  name: 'Home', path: '/', active: true },
                    { name: 'Category', path: '/category', active: true} ,
                    { name: 'Add Category', path: '/addCategory', active: false}
                ];

    handleInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        let errors = {};

        if( this.state.name == "" ){
            errors.name = "Please enter the Category Name";
            this.catName.focus();
        }
        if( this.state.description == "" ){
            errors.description = "Please enter the Description";
        } 
        if(Object.keys(errors).length > 0){
            this.setState( {
                ...this.state,
                errors:errors
            });
        }else{
            if(this.state.id){
                const category = {
                    id: this.state.id,
                    name: this.state.name,
                    category: this.state.category,
                    order: this.state.order,
                    description: this.state.description
                }
                this.props.addCategoryFn(category, this.props.history);
            }else{
                const category = {
                    name: this.state.name,
                    category: this.state.category,
                    order: this.state.order,
                    description: this.state.description
                }
                this.props.addCategoryFn(category, this.props.history);
            }                       
            
        }
    }  

    // static getDerivedStateFromProps(props, state) {
    //     console.log(props);
    //     console.log(state);
    //     if (props.id !== state.id) {
    //       return {
    //         id: props.id,
    //         name: props.name,
    //         category: props.category,
    //         description: props.description,
    //         order: props.order
    //       };
    //     }
    //     return null;
    //   }  
      
      componentWillReceiveProps(nextProps) {
          if(nextProps.category.id != this.props.category){
            this.setState({
                ...nextProps.category
            });
          }
      }
    
    componentDidMount () {
        if((this.props.location.state) && (this.props.location.state.id)){
            this.props.getCategoryFn(this.props.location.state.id, this.props.history);
        }
    }

    render () {
        const { errors } = this.state;
        return (
            <React.Fragment>
                <BreadCrumb breadCrumb={this.breadCrumb}/>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">Add Expense</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-row">
                                            <div className="form-group col-12">
                                                <label htmlFor="category Name">Name</label>
                                                <input type="text" 
                                                    name="name"
                                                    onChange={this.handleInputChange}
                                                    className="form-control" 
                                                    className={classnames("form-control ", {
                                                        "is-invalid":errors.name
                                                    })}
                                                    id="name" 
                                                    value={this.state.name || ''}
                                                    ref={ (input ) => this.catName = input}
                                                    placeholder="Name" />
                                                    { errors.name && ( <div className="invalid-feedback">{errors.name}</div>)}
                                            </div>                                        
                                            <div className="form-group col-md-9">
                                                <label htmlFor="category">Category</label>
                                                <select name="category" onChange={this.handleInputChange} id="category" className="form-control">
                                                    <option value="">Select category</option>                                                    
                                                </select>                                                
                                            </div>                                        
                                            <div className="form-group col-md-3">
                                                <label>Order</label>
                                                <input type="number" 
                                                    name="order" 
                                                    onChange={this.handleInputChange}
                                                    className="form-control" 
                                                    min="0" 
                                                    value={this.state.order || ''}
                                                    placeholder="Order"
                                                    max="100000" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea 
                                                onChange={this.handleInputChange}
                                                name="description" 
                                                className={classnames("form-control ", {
                                                    "is-invalid":errors.description
                                                })}
                                                id="description" 
                                                placeholder="Description"
                                                value={this.state.description || ''}
                                                rows="3">                                            
                                                </textarea>
                                                { errors.description && (<div className="invalid-feedback">{errors.description}</div>) }
                                        </div>
                                        <div className="form-group text-right">
                                            <Link to="/category"><button type="submit" className="btn btn-secondary">Cancel</button></Link>&nbsp;&nbsp;
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateTopProps = state => {
    return {
        categoryList: state.category.list,
        errors: state.error,
        category: state.category.category
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCategoryFn:(category, history) => dispatch(actions.addCategory(category, history)),
        getCategoryFn:(id,history) => dispatch(actions.getCategory(id, history))
    }
}


export default connect(mapStateTopProps, mapDispatchToProps) (AddCategory);

