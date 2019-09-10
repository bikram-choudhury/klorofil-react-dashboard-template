import React, { Component } from 'react';
import Panel from '../components/Panel';
import PanelHeading from '../components/PanelHeading';
import PanelBody from '../components/PanelBody';
import Button from '../components/Button';
import FancyRadio from '../components/FancyRadio';
import FancyCheckbox from '../components/FancyCheckbox';
import Select from '../components/Select';
import ProgressBar from '../components/ProgressBar';
import InputGroup from '../components/InputGroup';
import Alert from '../components/Alert';

export default class Elements extends Component {
    render() {
        return (
            <div className="main-content">
                {/* <!-- MAIN CONTENT --> */}
                <div className="container-fluid">
                    <h3 className="page-title">Elements</h3>
                    <div className="row">
                        <div className="col-md-6">
                            {/* <!-- BUTTONS --> */}
                            <Panel>
                                <PanelHeading heading="Buttons" action="false" />
                                <PanelBody>
                                    <p className="demo-button">
                                        <Button type="button" classess="btn btn-default" text="Default" />
                                        <Button type="button" classess="btn btn-primary" text="Primary" />
                                        <Button type="button" classess="btn btn-info" text="Info" />
                                        <Button type="button" classess="btn btn-success" text="Success" />
                                        <Button type="button" classess="btn btn-warning" text="Warning" />
                                        <Button type="button" classess="btn btn-danger" text="Danger" />
                                    </p>
                                    <br />
                                    <p className="demo-button">
                                        <Button type="button" classess="btn btn-primary btn-lg" text="Large Size" />
                                        <Button type="button" classess="btn btn-primary" text="Default Size" />
                                        <Button type="button" classess="btn btn-primary btn-sm" text="Small Size" />
                                        <Button type="button" classess="btn btn-primary btn-xs" text="Extra Small Size" />
                                    </p>
                                    <br />
                                    <p className="demo-button">
                                        <Button type="button" classess="btn btn-default" text="Default">
                                            <i className="fa fa-plus-square"></i>
                                        </Button>
                                        <Button type="button" classess="btn btn-primary" text="Primary">
                                            <i className="fa fa-refresh"></i>
                                        </Button>
                                        <Button type="button" classess="btn btn-info" text="Info">
                                            <i className="fa fa-info-circle"></i>
                                        </Button>
                                        <Button type="button" classess="btn btn-primary" text="Refreshing..." disabled="disabled">
                                            <i className="fa fa-refresh fa-spin"></i>
                                        </Button>
                                    </p>
                                    <br />
                                    <p className="demo-button">
                                        <Button type="button" classess="btn btn-success" text="Success">
                                            <i className="fa fa-check-circle"></i>
                                        </Button>
                                        <Button type="button" classess="btn btn-warning" text="Warning">
                                            <i className="fa fa-warning"></i>
                                        </Button>
                                        <Button type="button" classess="btn btn-danger" text="Danger">
                                            <i className="fa fa-trash-o"></i>
                                        </Button>
                                        <Button type="button" classess="btn btn-primary" text="Loading..." disabled="disabled">
                                            <i className="fa fa-spinner fa-spin"></i>
                                        </Button>
                                    </p>
                                    <br />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Button type="button" classess="btn btn-primary btn-block" text="Button Block" />
                                        </div>
                                        <div className="col-md-6">
                                            <Button type="button" classess="btn btn-warning btn-block" text="Button Block" />
                                        </div>
                                    </div>
                                </PanelBody>
                            </Panel>
                            {/* <!-- END BUTTONS --> */}
                            {/* <!-- INPUTS --> */}
                            <Panel>
                                <PanelHeading heading="Inputs" action="false" />
                                <PanelBody>
                                    <input type="text" className="form-control" placeholder="text field" />
                                    <br />
                                    <input type="password" className="form-control" defaultValue="asecret" />
                                    <br />
                                    <textarea className="form-control" placeholder="textarea" rows="4"></textarea>
                                    <br />
                                    <select className="form-control">
                                        <option value="cheese">Cheese</option>
                                        <option value="tomatoes">Tomatoes</option>
                                        <option value="mozarella">Mozzarella</option>
                                        <option value="mushrooms">Mushrooms</option>
                                        <option value="pepperoni">Pepperoni</option>
                                        <option value="onions">Onions</option>
                                    </select>
                                    <br />
                                    <FancyCheckbox value="Fancy Checkbox 1" />
                                    <FancyCheckbox value="Fancy Checkbox 2" />
                                    <FancyCheckbox value="Fancy Checkbox 3" />
                                    <br />
                                    <FancyRadio name="gender" value="Male" />
                                    <FancyRadio name="gender" value="Female" />
                                </PanelBody>
                            </Panel>
                            {/* <!-- END INPUTS --> */}
                            {/* <!-- INPUT SIZING --> */}
                            <Panel>
                                <PanelHeading heading="Input Sizing" action="false" />
                                <PanelBody>
                                    <input className="form-control input-lg" placeholder=".input-lg" type="text" />
                                    <br />
                                    <input className="form-control" placeholder="Default input" type="text" />
                                    <br />
                                    <input className="form-control input-sm" placeholder=".input-sm" type="text" />
                                    <br />
                                    <Select classess="form-control input-lg" options={['Cheese', 'Tomatoes', 'Mozzarella', 'Mushrooms', 'Pepperoni', 'Onions']} />
                                    <br />
                                    <Select classess="form-control" options={['Cheese', 'Tomatoes', 'Mozzarella', 'Mushrooms', 'Pepperoni', 'Onions']} />
                                    <br />
                                    <Select classess="form-control input-sm" options={['Cheese', 'Tomatoes', 'Mozzarella', 'Mushrooms', 'Pepperoni', 'Onions']} />
                                </PanelBody>
                            </Panel>
                            {/* <!-- END INPUT SIZING --> */}
                        </div>
                        <div className="col-md-6">
                            {/* <!-- LABELS --> */}
                            <Panel>
                                <PanelHeading heading="Labels & Badges" action="false" />
                                <PanelBody>
                                    <span className="label label-default">DEFAULT</span>
                                    <span className="label label-primary">PRIMARY</span>
                                    <span className="label label-success">SUCCESS</span>
                                    <span className="label label-info">INFO</span>
                                    <span className="label label-warning">WARNING</span>
                                    <span className="label label-danger">DANGER</span>
                                    <br />
                                    <br />
                                    <a href="# ">Inbox <span className="badge">42</span></a>
                                    <br />
                                    <br />
                                    <Button type="button" classess="btn btn-primary" text="Messages">
                                        <span className="badge">4</span>
                                    </Button>
                                </PanelBody>
                            </Panel>
                            {/* <!-- END LABELS --> */}
                            {/* <!-- PROGRESS BARS --> */}
                            <Panel>
                                <PanelHeading heading="Progress Bars" action="false" />
                                <PanelBody>
                                    <ProgressBar data={{ percent: 20 }} sronly={true} />
                                    <ProgressBar data={{ percent: 50 }} sronly={true} />
                                    <ProgressBar data={{ percent: 60 }} sronly={false} />
                                    <ProgressBar data={{ percent: 75 }} sronly={true} />
                                    <ProgressBar data={{ percent: 75 }} innerclass="progress-bar-striped" sronly={true} />
                                    <ProgressBar data={{ percent: 60 }} innerclass="progress-bar-striped active" sronly={true} />
                                    <ProgressBar data={{ percent: 80 }} classess="progress-xs" sronly={true} />
                                </PanelBody>
                            </Panel>
                            {/* <!-- END PROGRESS BARS --> */}
                            {/* <!-- INPUT GROUPS --> */}
                            <Panel>
                                <PanelHeading heading="Input Groups" action="false" />
                                <PanelBody>
                                    <InputGroup addon={false} position="left" classess="form-control" type="text" value="" >
                                        <button className="btn btn-primary" type="button">Go!</button>
                                    </InputGroup>
                                    <br />
                                    <InputGroup addon={false} position="right" classess="form-control" type="text" value="" >
                                        <button className="btn btn-primary" type="button">Go!</button>
                                    </InputGroup>
                                    <br />
                                    <InputGroup addon={true} position="left" classess="form-control" type="text" value="" placeholder="Username">
                                        <i className="fa fa-user"></i>
                                    </InputGroup>
                                    <br />
                                    <InputGroup addon={true} position="right" classess="form-control" type="text" value="" placeholder="Username">
                                        <i className="fa fa-user"></i>
                                    </InputGroup>
                                    <br />
                                </PanelBody>
                            </Panel>
                            {/* <!-- END INPUT GROUPS --> */}
                            {/* <!-- ALERT MESSAGES --> */}
                            <Panel>
                                <PanelHeading heading="Alert Messages" action="false" />
                                <PanelBody>
                                    <Alert type="info" dismissible={false}>
                                        <i className="fa fa-info-circle"></i> The system is running well
                                    </Alert>
                                    <Alert type="success" dismissible={true}>
                                        <i className="fa fa-check-circle"></i> Your settings have been succesfully saved
                                    </Alert>
                                    <Alert type="warning" dismissible={true}>
                                        <i className="fa fa-warning"></i> Warning, check your permission settings
                                    </Alert>
                                    <Alert type="danger" dismissible={true}>
                                        <i className="fa fa-times-circle"></i> Your account has been suspended
                                    </Alert>
                                </PanelBody>
                            </Panel>
                            {/* <!-- END ALERT MESSAGES --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- END MAIN CONTENT --> */}
            </div>
        )
    }
}