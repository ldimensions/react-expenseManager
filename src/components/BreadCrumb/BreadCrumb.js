import React from 'react';
import './BreadCrumb.css';
import { Link } from 'react-router-dom';


const BreadCrumb = props => {
    if(props.breadCrumb == ''){
        return '';
    }
    return(
        <React.Fragment>
            <ol className="breadcrumb">
                {
                    props.breadCrumb.map((val) => (
                        <li key={val.name} className={ (val.active)? 'breadcrumb-item':'breadcrumb-item active'}>
                            { (val.active)?<Link to={val.path}>{val.name}</Link>:val.name }
                        </li> 
                    ))
                }                
            </ol>
        </React.Fragment>
    )
}

export default BreadCrumb;