import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';

import Panel from '../components/Panel';
import PanelHeading from '../components/PanelHeading';
import PanelBody from '../components/PanelBody';
import PanelFooter from '../components/PanelFooter';
import { handlePanelToggle, removePanel } from '../variables/general';

export default class Panels extends Component {
    constructor() {
        super();
        this.noPaddingPanel = React.createRef();
        this.defaultPanel = React.createRef();
        this.footerPanel = React.createRef();
    }
    render() {
        return (
            <div className="main-content">
                <div className="container-fluid">
                    <h3 className="page-title">Panels</h3>
                    <div className="row">
                        <div className="col-md-8">
                            {/* <!-- PANEL HEADLINE --> */}
                            <Panel classes="panel-headline">
                                <PanelHeading heading="Panel Headline" subheading="Panel to display most important information" action="false" />
                                <PanelBody>
                                    <h4>Panel Content</h4>
                                    <p>Objectively network visionary methodologies via best-of-breed users. Phosfluorescently initiate go forward leadership skills before an expanded array of infomediaries. Monotonectally incubate web-enabled communities rather than process-centric.</p>
                                </PanelBody>
                            </Panel>
                            {/* <!-- END PANEL HEADLINE --> */}
                        </div>
                        <div className="col-md-4">
                            {/* <!-- PANEL NO PADDING --> */}
                            <Panel classes="panel-headline" forwardRef={this.noPaddingPanel}>
                                <PanelHeading heading="Panel No Padding" togglePanel={handlePanelToggle.bind({panelRef: this.noPaddingPanel})} closePanel={removePanel.bind({panelRef: this.noPaddingPanel})} />
                                <PanelBody classes="no-padding bg-primary text-center">
                                    <div className="padding-top-30 padding-bottom-30">
                                        <i className="fa fa-thumbs-o-up fa-5x"></i>
                                        <h3>No Content Padding</h3>
                                    </div>
                                </PanelBody>
                            </Panel>
                            {/* <!-- END PANEL NO PADDING --> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            {/* <!-- PANEL DEFAULT --> */}
                            <Panel forwardRef={this.defaultPanel}>
                                <PanelHeading heading="Panel Default" togglePanel={handlePanelToggle.bind({panelRef: this.defaultPanel})} closePanel={removePanel.bind({panelRef: this.defaultPanel})} />
                                <PanelBody>
                                    <p>Objectively network visionary methodologies via best-of-breed users. Phosfluorescently initiate go forward leadership skills before an expanded array of infomediaries. Monotonectally incubate web-enabled communities rather than process-centric.</p>
                                </PanelBody>
                            </Panel>
                            {/* <!-- END PANEL DEFAULT --> */}
                        </div>
                        <div className="col-md-4">
                            {/* <!-- PANEL NO CONTROLS --> */}
                            <Panel>
                                <PanelHeading heading="Panel No Right Controls" action="false" />
                                <PanelBody>
                                    <p>Objectively network visionary methodologies via best-of-breed users. Phosfluorescently initiate go forward leadership skills before an expanded array of infomediaries. Monotonectally incubate web-enabled communities rather than process-centric.</p>
                                </PanelBody>
                            </Panel>
                            {/* <!-- END PANEL NO CONTROLS --> */}
                        </div>
                        <div className="col-md-4">
                            {/* <!-- PANEL WITH FOOTER --> */}
                            <Panel forwardRef={this.footerPanel}>
                                <PanelHeading heading="Panel With Footer" togglePanel={handlePanelToggle.bind({panelRef: this.footerPanel})} closePanel={removePanel.bind({panelRef: this.footerPanel})} />
                                <PanelBody>
                                    <p>Objectively network visionary methodologies via best-of-breed users. Phosfluorescently initiate go forward leadership skills before an expanded array of infomediaries. Monotonectally incubate web-enabled communities rather than process-centric.</p>
                                </PanelBody>
                                <PanelFooter>
                                    <h5>Panel Footer</h5>
                                </PanelFooter>
                            </Panel>
                            {/* <!-- END PANEL WITH FOOTER --> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            {/* <!-- PANEL SCROLLING --> */}

                            <Panel>
                                <PanelHeading heading="Panel Scrolling" action="false" />
                                <ScrollArea
                                    speed={1}
                                    className="area"
                                    contentClassName="content"
                                    horizontal={false}
                                    smoothScrolling={true}
                                    minScrollSize={40}
                                    style={Styles.container}
                                    verticalScrollbarStyle={Styles.scrollbar}
                                    verticalContainerStyle={{...Styles.scrollbar, background: 'transparent'}}>
                                    <PanelBody>

                                        <p>Objectively network visionary methodologies via best-of-breed users. Phosfluorescently initiate go forward leadership skills before an expanded array of infomediaries. Monotonectally incubate web-enabled communities rather than process-centric.</p>
                                        <p>Objectively network visionary methodologies via best-of-breed users. Phosfluorescently initiate go forward leadership skills before an expanded array of infomediaries. Monotonectally incubate web-enabled communities rather than process-centric.</p>
                                        <p>Objectively network visionary methodologies via best-of-breed users. Phosfluorescently initiate go forward leadership skills before an expanded array of infomediaries. Monotonectally incubate web-enabled communities rather than process-centric.</p>
                                    </PanelBody>
                                </ScrollArea>
                            </Panel>
                            {/* <!-- END PANEL SCROLLING --> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Styles = {
    scrollbar: {
        borderRadius: 5
    },
    container: {
        height: 175
    }
}