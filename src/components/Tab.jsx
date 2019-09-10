import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        tabClick: PropTypes.func.isRequired
    };
    handleTabClick = () => {
        const { label, tabClick } = this.props;
        tabClick(label);
    }
    render() {
        const { activeTab, label, badge } = this.props;
        return (
            <li className={(activeTab === label) ? "active" : ""}>
                <a role="tab" data-toggle="tab" onClick={this.handleTabClick} style={Styles.pointer}>
                    {label}
                    <span className="badge">{badge}</span>
                </a>
            </li>
        )
    }
}

const Styles = {
    pointer: {
        cursor: 'pointer'
    }
}