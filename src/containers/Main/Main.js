import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './Main.css';
import DefaultLayout from '../DefaultLayout/DefaultLayout';
import routes from '../../routes'

import Toolbar from '../../components/DefaultLayout/Toolbar/Toolbar';
import SideDrawer from '../../components/DefaultLayout/SideDrawer/SideDrawer';
import Backdrop from '../../components/DefaultLayout/Backdrop/Backdrop';


class Main extends Component {
    
    state = {
        sideDrawerOpen: true
    };

    drawerToggleClickhandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        })
    }
    backDropClickHandler = () => {
        if(window.innerWidth <= 768){
            this.setState({sideDrawerOpen: false});
        }
    }

    componentDidMount() {
        if(window.innerWidth <= 768){
            this.setState({sideDrawerOpen: false});
        }
    }

    render () {
        let backDrop;
        let mainClass = 'smallDeviceMargin'
        if(this.state.sideDrawerOpen) {
          backDrop = <Backdrop click={this.backDropClickHandler} />;
          mainClass = 'col-12 col-sm-10 col-md-10 ml-sm-auto';
        }  

        return (
            <div>
                <Toolbar drawerClickhandler={this.drawerToggleClickhandler}/>
                <div className="container-fluid">
                    <div className="row">
                        <SideDrawer show={this.state.sideDrawerOpen} click={this.backDropClickHandler} />
                        <main className={mainClass}>
                            {backDrop}
                            <Switch>
                                { 
                                    routes.map( route => (
                                        <Route {...route} /> 
                                    ))
                                }
                            </Switch> 
                        </main>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Main;
