import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TabList from '../components/TabList';
import { projectListForProfile } from '../variables/general';
import ProgressBar from '../components/ProgressBar';

export default class Profile extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="container-fluid">
                    <div className="panel panel-profile">
                        <div className="clearfix">
                            {/* <!-- LEFT COLUMN --> */}
                            <div className="profile-left">
                                {/* <!-- PROFILE HEADER --> */}
                                <div className="profile-header">
                                    <div className="overlay"></div>
                                    <div className="profile-main">
                                        <img src={require('./../assets/img/user-medium.png')} className="img-circle" alt="Avatar" />
                                        <h3 className="name">Samuel Gold</h3>
                                        <span className="online-status status-available">Available</span>
                                    </div>
                                    <div className="profile-stat">
                                        <div className="row">
                                            <div className="col-md-4 stat-item">
                                                45 <span>Projects</span>
                                            </div>
                                            <div className="col-md-4 stat-item">
                                                15 <span>Awards</span>
                                            </div>
                                            <div className="col-md-4 stat-item">
                                                2174 <span>Points</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- END PROFILE HEADER --> */}
                                {/* <!-- PROFILE DETAIL --> */}
                                <div className="profile-detail">
                                    <div className="profile-info">
                                        <h4 className="heading">Basic Info</h4>
                                        <ul className="list-unstyled list-justify">
                                            <li>Birthdate <span>24 Aug, 2016</span></li>
                                            <li>Mobile <span>(124) 823409234</span></li>
                                            <li>Email <span>samuel@mydomain.com</span></li>
                                            <li>Website <span><NavLink to="https://www.themeineed.com">www.themeineed.com</NavLink></span></li>
                                        </ul>
                                    </div>
                                    <div className="profile-info">
                                        <h4 className="heading">Social</h4>
                                        <ul className="list-inline social-icons">
                                            <li><NavLink to="#" className="facebook-bg"><i className="fa fa-facebook"></i></NavLink></li>
                                            <li><NavLink to="#" className="twitter-bg"><i className="fa fa-twitter"></i></NavLink></li>
                                            <li><NavLink to="#" className="google-plus-bg"><i className="fa fa-google-plus"></i></NavLink></li>
                                            <li><NavLink to="#" className="github-bg"><i className="fa fa-github"></i></NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="profile-info">
                                        <h4 className="heading">About</h4>
                                        <p>Interactively fashion excellent information after distinctive outsourcing.</p>
                                    </div>
                                    <div className="text-center"><NavLink to="#" className="btn btn-primary">Edit Profile</NavLink></div>
                                </div>
                                {/* <!-- END PROFILE DETAIL --> */}
                            </div>
                            {/* <!-- END LEFT COLUMN --> */}
                            {/* <!-- RIGHT COLUMN --> */}
                            <div className="profile-right">
                                <h4 className="heading">Samuel's Awards</h4>
                                {/* <!-- AWARDS --> */}
                                <div className="awards">
                                    <div className="row">
                                        <div className="col-md-3 col-sm-6">
                                            <div className="award-item">
                                                <div className="hexagon">
                                                    <span className="lnr lnr-sun award-icon"></span>
                                                </div>
                                                <span>Most Bright Idea</span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="award-item">
                                                <div className="hexagon">
                                                    <span className="lnr lnr-clock award-icon"></span>
                                                </div>
                                                <span>Most On-Time</span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="award-item">
                                                <div className="hexagon">
                                                    <span className="lnr lnr-magic-wand award-icon"></span>
                                                </div>
                                                <span>Problem Solver</span>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="award-item">
                                                <div className="hexagon">
                                                    <span className="lnr lnr-heart award-icon"></span>
                                                </div>
                                                <span>Most Loved</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center"><NavLink to="#" className="btn btn-default">See all awards</NavLink></div>
                                </div>
                                {/* <!-- END AWARDS --> */}
                                {/* <!-- TABBED CONTENT --> */}
                                <TabList classes="custom-tabs-line tabs-line-bottom left-aligned">
                                    <div label="Recent Activity">
                                        <ul className="list-unstyled activity-timeline">
                                            <li>
                                                <i className="fa fa-comment activity-icon"></i>
                                                <p>Commented on post <NavLink to="#">Prototyping</NavLink> <span className="timestamp">2 minutes ago</span></p>
                                            </li>
                                            <li>
                                                <i className="fa fa-cloud-upload activity-icon"></i>
                                                <p>Uploaded new file <NavLink to="#">Proposal.docx</NavLink> to project <NavLink to="#">New Year Campaign</NavLink> <span className="timestamp">7 hours ago</span></p>
                                            </li>
                                            <li>
                                                <i className="fa fa-plus activity-icon"></i>
                                                <p>Added <NavLink to="#">Martin</NavLink> and <NavLink to="#">3 others colleagues</NavLink> to project repository <span className="timestamp">Yesterday</span></p>
                                            </li>
                                            <li>
                                                <i className="fa fa-check activity-icon"></i>
                                                <p>Finished 80% of all <NavLink to="#">assigned tasks</NavLink> <span className="timestamp">1 day ago</span></p>
                                            </li>
                                        </ul>
                                        <div className="margin-top-30 text-center"><NavLink to="#" className="btn btn-default">See all activity</NavLink></div>
                                    </div>

                                    <div label="Projects " badge="7">
                                        <div className="table-responsive">
                                            <table className="table project-table">
                                                <thead>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Progress</th>
                                                        <th>Leader</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        projectListForProfile.map((info, index) => <ProjectsRow key={index} title={info.title} progressInPrcnt={info.progressInPrcnt} leader={info.leader} status={info.status} />)
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </TabList>
                                {/* <!-- END TABBED CONTENT --> */}
                            </div>
                            {/* <!-- END RIGHT COLUMN --> */}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

class ProjectsRow extends Component {
    render() {
        const { title, progressInPrcnt, leader: { image, name }, status } = this.props;
        let statusLabel = null;

        if (/active/i.test(status)) {
            statusLabel = (<span className="label label-success">{status}</span>)
        } else if (/pending/i.test(status)) {
            statusLabel = (<span className="label label-warning">{status}</span>)
        } else if (/closed/i.test(status)) {
            statusLabel = (<span className="label label-default">{status}</span>)
        }
        return (
            <tr>
                <td><NavLink to="#">{title}</NavLink></td>
                <td>
                    <ProgressBar data={{ percent: progressInPrcnt }} sronly={false} />
                </td>
                <td>
                    <img src={require(`./../assets/img/${image}`)} alt="Avatar" className="avatar img-circle" />
                    <NavLink to="#">{name}</NavLink>
                </td>
                <td>
                    {statusLabel}
                </td>
            </tr>
        )
    }
}