import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { headLineCharts, visitsTrendsChart, visitsChart, systemLoadChart } from '../variables/charts';
import { TodoList, Metrics, PurchaseList, TaskProgressList, handlePanelToggle, removePanel } from '../variables/general';

import ListContainer from '../components/ListContainer';
import MetricsCard from '../components/MetricsCard';
import ProgressBar from '../components/ProgressBar';
import Panel from '../components/Panel';
import PanelHeading from '../components/PanelHeading';
import PanelBody from '../components/PanelBody';
import PanelFooter from '../components/PanelFooter';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.headlinechartRef = null;
        this.visitstrendschartRef = null;
        this.visitschartRef = null;
        this.systemLoadRef = null;

        this.systemLoad = null;
        this.interval = null;

        this.recentPurchasePanelRef = React.createRef();
        this.realizationPanelRef = React.createRef();
        this.todoPanelRef = React.createRef();
        this.recentActivityPanelRef = React.createRef();
        this.myTaskPanelRef = React.createRef();
        this.websiteVisitPanelRef = React.createRef();
        this.systemLoadPanelRef = React.createRef();
    }
    componentDidMount() {
        headLineCharts.draw(this.headlinechartRef);
        visitsTrendsChart.draw(this.visitstrendschartRef);
        visitsChart.draw(this.visitschartRef);

        this.systemLoad = systemLoadChart.init(this.systemLoadRef);
        this.interval = setInterval(() => {
            const randomVal = this.getRandomInt(0, 100);
            this.systemLoad.update(randomVal);
            this.systemLoadRef.getElementsByClassName('percent')[0].innerText = randomVal;
        }, 3000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    render() {
        return (
            <div className="main-content">
                {/* MAIN CONTENT */}
                <div className="container-fluid">
                    {/* OVERVIEW */}
                    <Panel classes="panel-headline">
                        <PanelHeading heading="Weekly Overview" subheading="Period: Oct 14, 2016 - Oct 21, 2016" action="false" />
                        <PanelBody>
                            <div className="row">
                                {
                                    Metrics.map((item, index) => {
                                        return (
                                            <div className="col-md-3" key={index}>
                                                <MetricsCard data={item} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="row">
                                <div className="col-md-9">
                                    <div id="headline-chart" className="ct-chart" ref={input => this.headlinechartRef = input}></div>
                                </div>
                                <div className="col-md-3">
                                    <div className="weekly-summary text-right">
                                        <span className="number">2,315</span> <span className="percentage"><i className="fa fa-caret-up text-success"></i> 12%</span>
                                        <span className="info-label">Total Sales</span>
                                    </div>
                                    <div className="weekly-summary text-right">
                                        <span className="number">$5,758</span> <span className="percentage"><i className="fa fa-caret-up text-success"></i> 23%</span>
                                        <span className="info-label">Monthly Income</span>
                                    </div>
                                    <div className="weekly-summary text-right">
                                        <span className="number">$65,938</span> <span className="percentage"><i className="fa fa-caret-down text-danger"></i> 8%</span>
                                        <span className="info-label">Total Income</span>
                                    </div>
                                </div>
                            </div>
                        </PanelBody>
                    </Panel>
                    {/* END OVERVIEW */}
                    <div className="row">
                        <div className="col-md-6">
                            {/* RECENT PURCHASES */}
                            <Panel forwardRef={this.recentPurchasePanelRef}>
                                <PanelHeading heading="Recent Purchases" togglePanel={handlePanelToggle.bind({panelRef: this.recentPurchasePanelRef})} closePanel={removePanel.bind({panelRef: this.recentPurchasePanelRef})} />
                                <PanelBody classes="no-padding">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Order No.</th>
                                                <th>Name</th>
                                                <th>Amount</th>
                                                <th>Date &amp; Time</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                PurchaseList.map((item, index) => {
                                                    const statusClass = ['COMPLETED', 'SUCCESS'].includes(item.status) ? 'success' : (
                                                        item.status === 'PENDING' ? 'warning' : (
                                                            item.status === 'FAILED' ? 'danger' : ''
                                                        )
                                                    );
                                                    return (
                                                        <tr key={index}>
                                                            <td><NavLink to="#">{item.orderNo}</NavLink></td>
                                                            <td>{item.name}</td>
                                                            <td>{item.amount}</td>
                                                            <td>{item.dateTime}</td>
                                                            {
                                                                statusClass && (
                                                                    <td>
                                                                        <span className={`label label-${statusClass}`}>
                                                                            {item.status}
                                                                        </span>
                                                                    </td>
                                                                )
                                                            }
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </PanelBody>
                                <PanelFooter>
                                    <div className="row">
                                        <div className="col-md-6"><span className="panel-note"><i className="fa fa-clock-o"></i> Last 24 hours</span></div>
                                        <div className="col-md-6 text-right"><NavLink to="#" className="btn btn-primary">View All Purchases</NavLink></div>
                                    </div>
                                </PanelFooter>
                            </Panel>
                            {/* END RECENT PURCHASES */}
                        </div>
                        <div className="col-md-6">
                            {/* MULTI CHARTS */}
                            <Panel forwardRef={this.realizationPanelRef}>
                                <PanelHeading heading="Projection vs. Realization" closePanel={removePanel.bind({panelRef: this.realizationPanelRef})} togglePanel={handlePanelToggle.bind({panelRef: this.realizationPanelRef})} />
                                <PanelBody>
                                    <div id="visits-trends-chart" className="ct-chart" ref={holder => this.visitstrendschartRef = holder}></div>
                                </PanelBody>
                            </Panel>
                            {/* END MULTI CHARTS */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            {/* TODO LIST */}
                            <Panel forwardRef={this.todoPanelRef}>
                                <PanelHeading heading="To-Do List" closePanel={removePanel.bind({panelRef: this.todoPanelRef})} togglePanel={handlePanelToggle.bind({panelRef: this.todoPanelRef})} />
                                <PanelBody>
                                    <ul className="list-unstyled todo-list">
                                        {TodoList.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <ListContainer data={item} />
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </PanelBody>
                            </Panel>
                            {/* END TODO LIST */}
                        </div>
                        <div className="col-md-5">
                            {/* TIMELINE */}
                            <Panel classes="panel-scrolling" forwardRef={this.recentActivityPanelRef}>
                                <PanelHeading heading="Recent User Activity" closePanel={removePanel.bind({panelRef: this.recentActivityPanelRef})} togglePanel={handlePanelToggle.bind({panelRef: this.recentActivityPanelRef})} />
                                <PanelBody>
                                    <ul className="list-unstyled activity-list">
                                        <li>
                                            <img src={require('./../assets/img/user1.png')} alt="Avatar" className="img-circle pull-left avatar" />
                                            <p><NavLink to="#">Michael</NavLink> has achieved 80% of his completed tasks <span className="timestamp">20 minutes ago</span></p>
                                        </li>
                                        <li>
                                            <img src={require('./../assets/img/user2.png')} alt="Avatar" className="img-circle pull-left avatar" />
                                            <p><NavLink to="#">Daniel</NavLink> has been added as a team member to project <NavLink to="#">System Update</NavLink> <span className="timestamp">Yesterday</span></p>
                                        </li>
                                        <li>
                                            <img src={require('./../assets/img/user3.png')} alt="Avatar" className="img-circle pull-left avatar" />
                                            <p><NavLink to="#">Martha</NavLink> created a new heatmap view <NavLink to="#">Landing Page</NavLink> <span className="timestamp">2 days ago</span></p>
                                        </li>
                                        <li>
                                            <img src={require('./../assets/img/user4.png')} alt="Avatar" className="img-circle pull-left avatar" />
                                            <p><NavLink to="#">Jane</NavLink> has completed all of the tasks <span className="timestamp">2 days ago</span></p>
                                        </li>
                                        <li>
                                            <img src={require('./../assets/img/user5.png')} alt="Avatar" className="img-circle pull-left avatar" />
                                            <p><NavLink to="#">Jason</NavLink> started a discussion about <NavLink to="#">Weekly Meeting</NavLink> <span className="timestamp">3 days ago</span></p>
                                        </li>
                                    </ul>
                                    <button type="button" className="btn btn-primary btn-bottom center-block">Load More</button>
                                </PanelBody>
                            </Panel>
                            {/* END TIMELINE */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            {/* TASKS */}
                            <Panel forwardRef={this.myTaskPanelRef}>
                                <PanelHeading heading="My Tasks" closePanel={removePanel.bind({panelRef: this.myTaskPanelRef})} togglePanel={handlePanelToggle.bind({panelRef: this.myTaskPanelRef})} />
                                <PanelBody>
                                    <ul className="list-unstyled task-list">
                                        {
                                            TaskProgressList.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <ProgressBar classess="progress-xs" data={item} />
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </PanelBody>
                            </Panel>
                            {/* END TASKS */}
                        </div>
                        <div className="col-md-4">
                            {/* VISIT CHART */}
                            <Panel forwardRef={this.websiteVisitPanelRef}>
                                <PanelHeading heading="Website Visits" closePanel={removePanel.bind({panelRef: this.websiteVisitPanelRef})} togglePanel={handlePanelToggle.bind({panelRef: this.websiteVisitPanelRef})} />
                                <PanelBody>
                                    <div id="visits-chart" className="ct-chart" ref={holder => this.visitschartRef = holder}></div>
                                </PanelBody>
                            </Panel>
                            {/* END VISIT CHART */}
                        </div>
                        <div className="col-md-4">
                            {/* REALTIME CHART */}
                            <Panel forwardRef={this.systemLoadPanelRef}>
                                <PanelHeading heading="System Load" closePanel={removePanel.bind({panelRef: this.systemLoadPanelRef})} togglePanel={handlePanelToggle.bind({panelRef: this.systemLoadPanelRef})} />
                                <PanelBody>
                                    <div id="system-load" className="easy-pie-chart" data-percent="70" ref={holder => this.systemLoadRef = holder}>
                                        <span className="percent">70</span>
                                    </div>
                                    <h4>CPU Load</h4>
                                    <ul className="list-unstyled list-justify">
                                        <li>High: <span>95%</span></li>
                                        <li>Average: <span>87%</span></li>
                                        <li>Low: <span>20%</span></li>
                                        <li>Threads: <span>996</span></li>
                                        <li>Processes: <span>259</span></li>
                                    </ul>
                                </PanelBody>
                            </Panel>
                            {/* END REALTIME CHART */}
                        </div>
                    </div>
                </div>
                {/* END MAIN CONTENT */}
            </div>
        )
    }
}