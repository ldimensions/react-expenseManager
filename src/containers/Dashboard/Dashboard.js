import React, { Component } from 'react';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

class Dashboard extends Component {
    state = {
        breadCrumb : [{  name: 'Dashboard', path: '/', active: false }]
    }

    render () {
        return (
            <React.Fragment>
                <BreadCrumb  breadCrumb={this.state.breadCrumb}/>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">Card title</div>
                        <div className="card-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
