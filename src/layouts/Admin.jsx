import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { AdminRoutes } from './../routes.js';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

const subRoutes = [];

const SwitchRoutes = (
    <React.Fragment>
        <Switch>
            {
                AdminRoutes.map((route, index) => {
                    if (route.layout === "/admin" && route.component) {
                        return (
                            <Route path={route.layout + route.path} component={route.component} key={index} />
                        )
                    } else if (route.subpages) {
                        subRoutes.push(...route.subpages);
                    }
                    return null;
                })
            }
            {
                subRoutes.map((route, index) => {
                    if (route.component) {
                        return (
                            <Route path={route.layout + route.path} component={route.component} key={index} />
                        )
                    }
                    return null;
                })
            }
        </Switch>
        {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
    </React.Fragment>
);

class Admin extends Component {
    
    render() {
        let { fullwidth } = this.props;
        const classes = [];

        if(window.innerWidth < 1025) {
            if (fullwidth) {
                classes.push('layout-fullwidth', 'offcanvas-active');
            } else {
                classes.length = 0;
            }
        } else {
            if (fullwidth) {
                classes.push('layout-fullwidth');
            }
        }
        
        return (
            // WRAPPER 
            <div id="wrapper" className={classes.join(' ')}>
                <NavBar routes={AdminRoutes} />
                <SideBar routes={AdminRoutes} />
                <div className="main">
                    {/* MAIN */}
                    {SwitchRoutes}
                </div>
            </div>

        )
    }
}

function mapStateToProps(state)  {
    return {
        fullwidth: state.expandLayout 
    }
}

export default connect(mapStateToProps)(Admin);