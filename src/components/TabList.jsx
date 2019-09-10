import React, { Component } from "react";
import PropTypes from 'prop-types';
import Tab from "./Tab";

export default class TabList extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired
    };
    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label
        }
    }
    handleTabClick = (tab) => {
        this.setState({ activeTab: tab })
    }
    render() {
        return (
            <React.Fragment>
                <div className={this.props.classes}>
                    <ul className="nav" role="tablist">
                        {
                            this.props.children.map(child => {
                                const { label, badge } = child.props;
                                return (
                                    <Tab
                                        activeTab={this.state.activeTab}
                                        key={label}
                                        label={label}
                                        badge={badge}
                                        tabClick={this.handleTabClick}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade in active">
                        {
                            this.props.children.map(child => {
                                if (child.props.label !== this.state.activeTab) return null;
                                return child.props.children;
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}