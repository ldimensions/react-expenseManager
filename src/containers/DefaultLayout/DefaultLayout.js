import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//import './Default.css';
import Toolbar from '../../components/DefaultLayout/Toolbar/Toolbar';
import SideDrawer from '../../components/DefaultLayout/SideDrawer/SideDrawer';
import Backdrop from '../../components/DefaultLayout/Backdrop/Backdrop';

class DefaultLayout extends Component {
    
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
        if(this.state.sideDrawerOpen) {
          backDrop = <Backdrop click={this.backDropClickHandler} />;
        }        
        return (
            <div className="App">
                <Toolbar drawerClickhandler={this.drawerToggleClickhandler}/>
                <SideDrawer show={this.state.sideDrawerOpen} click={this.backDropClickHandler} />
                {backDrop}
            </div>
        );
    }
  
}

export default DefaultLayout;
