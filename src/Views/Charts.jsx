import React, { Component } from 'react';
import { demoLineChart, demoBarChart, demoAreaChart, multipleChart } from '../variables/charts';

import Panel from '../components/Panel';
import PanelHeading from '../components/PanelHeading';
import PanelBody from '../components/PanelBody';

export default class Charts extends Component {
    constructor(props) {
        super(props);

        this.demoLineChart = null;
        this.demoBarChart = null;
        this.demoAreaChart = null;
        this.multipleChart = null;
    }
    componentDidMount() {
        demoLineChart.draw(this.demoLineChart);
        demoBarChart.draw(this.demoBarChart);
        demoAreaChart.draw(this.demoAreaChart);
        multipleChart.draw(this.multipleChart);
    }
    render() {
        return (

            <div className="main-content">
                <div className="container-fluid">
                    <h3 className="page-title">Charts</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Panel>
                                <PanelHeading heading="Line Chart" action="false" />
                                <PanelBody>
                                    <div id="demo-line-chart" className="ct-chart" ref={holder => this.demoLineChart = holder}></div>
                                </PanelBody>
                            </Panel>
                        </div>
                        <div className="col-md-6">
                            <Panel>
                                <PanelHeading heading="Bar Chart" action="false" />
                                <PanelBody>
                                    <div id="demo-bar-chart" className="ct-chart" ref={holder => this.demoBarChart = holder}></div>
                                </PanelBody>
                            </Panel>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Panel>
                                <PanelHeading heading="Area Chart" action="false" />
                                <PanelBody>
                                    <div id="demo-area-chart" className="ct-chart" ref={holder => this.demoAreaChart = holder}></div>
                                </PanelBody>
                            </Panel>
                        </div>
                        <div className="col-md-6">
                            <Panel>
                                <PanelHeading heading="Multiple Chart" action="false" />
                                <PanelBody>
                                    <div id="multiple-chart" className="ct-chart" ref={holder => this.multipleChart = holder}></div>
                                </PanelBody>
                            </Panel>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}