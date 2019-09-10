import React from 'react'
import { NavLink } from 'react-router-dom';
import ScrollArea from 'react-scrollbar';

export default class SideBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.routes = this.props.routes;
        this.state = {
            showPageMenu: false
        }
    }
    togglePageMenu = () => {
        this.setState({ showPageMenu: !this.state.showPageMenu })
    }
    render() {
        const routerLinks = this.routes.map((route, index) => {
            if (route.layout === '/admin') {
                return (
                    <li key={index} role="navigation">
                        {
                            route.subpages ? (
                                <React.Fragment>
                                    <NavLink to="#" onClick={() => this.togglePageMenu()} data-toggle="collapse" className={this.state.showPageMenu ? 'active' : 'collapsed'} aria-expanded={this.state.showPageMenu}>
                                        <i className={"lnr lnr-" + route.icon}></i> <span>{route.name}</span>
                                        <i className="icon-submenu lnr lnr-chevron-left"></i>
                                    </NavLink>
                                    {
                                        this.state.showPageMenu && (
                                            <div id="subPages" className="collapse in">
                                                <ul className="nav">
                                                    {
                                                        route.subpages.map((subroute, subindex) => {
                                                            return (
                                                                <li key={index + '-' + subindex}>
                                                                    <NavLink to={subroute.layout + subroute.path}>
                                                                        <span>{subroute.name}</span>
                                                                    </NavLink>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    }
                                </React.Fragment>
                            ) : (
                                    <NavLink to={route.layout + route.path}>
                                        <i className={"lnr lnr-" + route.icon}></i> <span>{route.name}</span>
                                    </NavLink>
                                )
                        }

                    </li>
                )
            } else {
                return null;
            }
        });
        return (
            // LEFT SIDEBAR
            <div id="sidebar-nav" className="sidebar">
                <ScrollArea
                    speed={1}
                    className="area"
                    contentClassName="content"
                    horizontal={false}
                    smoothScrolling={true}
                    minScrollSize={40}
                    style={Styles.container}
                    verticalScrollbarStyle={Styles.scrollbar}
                    verticalContainerStyle={{ ...Styles.scrollbar, background: 'transparent' }}>
                    <div className="sidebar-scroll">
                        <nav>
                            <ul className="nav">
                                {routerLinks}
                            </ul>
                        </nav>
                    </div>
                </ScrollArea>
            </div>
        )
    }
}

const Styles = {
    scrollbar: {
        borderRadius: 5
    },
    container: {
        height: '100%'
    }
}
