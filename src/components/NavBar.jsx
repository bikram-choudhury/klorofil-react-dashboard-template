import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../assets/img/logo-dark.png';

import { connect } from 'react-redux';
import { SidebarAction } from '../redux/actions/sidebarAction';

class NavBar extends Component {
    
    render() {
        let { fullwidth } = this.props;
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="brand">
                    <NavLink to="/"><img src={logo} alt="Klorofil Logo" className="img-responsive logo" /></NavLink>
                </div>
                <div className="container-fluid">
                    <div className="navbar-btn">
                        <button type="button" className="btn-toggle-fullwidth" onClick={() => this.props.ExpandLayout(!fullwidth)}>
                            <i className={`lnr ${fullwidth ? 'lnr-arrow-right-circle': 'lnr-arrow-left-circle'}`}></i>
                        </button>
                    </div>
                    <form className="navbar-form navbar-left">
                        <div className="input-group">
                            <input type="text" defaultValue="" className="form-control" placeholder="Search dashboard..." />
                            <span className="input-group-btn"><button type="button" className="btn btn-primary">Go</button></span>
                        </div>
                    </form>
                    <div className="navbar-btn navbar-btn-right">
                        <NavLink className="btn btn-success update-pro" to="https://www.themeineed.com/downloads/klorofil-pro-bootstrap-admin-dashboard-template/?utm_source=klorofil&utm_medium=template&utm_campaign=KlorofilPro" title="Upgrade to Pro"><i className="fa fa-rocket"></i> <span>UPGRADE TO PRO</span></NavLink>
                    </div>
                    <div id="navbar-menu">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <NavLink to="#" className="dropdown-toggle icon-menu" data-toggle="dropdown">
                                    <i className="lnr lnr-alarm"></i>
                                    <span className="badge bg-danger">5</span>
                                </NavLink>
                                <ul className="dropdown-menu notifications">
                                    <li><NavLink to="#" className="notification-item"><span className="dot bg-warning"></span>System space is almost full</NavLink></li>
                                    <li><NavLink to="#" className="notification-item"><span className="dot bg-danger"></span>You have 9 unfinished tasks</NavLink></li>
                                    <li><NavLink to="#" className="notification-item"><span className="dot bg-success"></span>Monthly report is available</NavLink></li>
                                    <li><NavLink to="#" className="notification-item"><span className="dot bg-warning"></span>Weekly meeting in 1 hour</NavLink></li>
                                    <li><NavLink to="#" className="notification-item"><span className="dot bg-success"></span>Your request has been approved</NavLink></li>
                                    <li><NavLink to="#" className="more">See all notifications</NavLink></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"><i className="lnr lnr-question-circle"></i> <span>Help</span> <i className="icon-submenu lnr lnr-chevron-down"></i></NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="#">Basic Use</NavLink></li>
                                    <li><NavLink to="#">Working With Data</NavLink></li>
                                    <li><NavLink to="#">Security</NavLink></li>
                                    <li><NavLink to="#">Troubleshooting</NavLink></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <NavLink to="#" className="dropdown-toggle" data-toggle="dropdown"><img src={require('./../assets/img/user.png')} className="img-circle" alt="Avatar" /> <span>Samuel</span> <i className="icon-submenu lnr lnr-chevron-down"></i></NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="#"><i className="lnr lnr-user"></i> <span>My Profile</span></NavLink></li>
                                    <li><NavLink to="#"><i className="lnr lnr-envelope"></i> <span>Message</span></NavLink></li>
                                    <li><NavLink to="#"><i className="lnr lnr-cog"></i> <span>Settings</span></NavLink></li>
                                    <li><NavLink to="#"><i className="lnr lnr-exit"></i> <span>Logout</span></NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fullwidth: state.expandLayout
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        ExpandLayout: (status) => {
            dispatch(SidebarAction(status))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);