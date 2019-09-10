import React, { Component } from 'react';
import Toastr from 'toastr';

import Panel from '../components/Panel';
import PanelBody from '../components/PanelBody';

export default class Notifications extends Component {

    handleToaster = (event) => {
        const context = event.target.getAttribute('data-context');
        const message = event.target.getAttribute('data-message');
        const position = event.target.getAttribute('data-position') || '';
        const callback = event.target.getAttribute('data-callback') || '';
        
        Toastr.options = {
            timeOut: 3000,
            closeButton: true
        }

        if(position) {
            Toastr.options.positionClass = `toast-${position}`;
        }
        if(callback === 'showhide') {
            Toastr.options.timeOut = 300;
            Toastr.options.onShown = function() { alert('onShown callback'); }
            Toastr.options.onHidden = function() { alert('onHidden callback'); }

        } else if(callback === 'onclick') {
            Toastr.options.timeOut = 10000;
            Toastr.options.onclick = function() { alert('onclick callback'); }
        } else if(callback === 'closeclick') {
            Toastr.options.timeOut = 10000;
            Toastr.options.onCloseClick = function() { alert('onCloseClick callback'); }
        }
        Toastr.remove();
        Toastr[context](message)
    }
    render() {
        return (
            <div className="main-content">
				<div className="container-fluid">
					<h3 className="page-title">Notifications</h3>
                    <Panel>
                        <PanelBody id="toastr-demo">
                            {/* <!-- CONTEXTUAL --> */}
							<h4>Context</h4>
							<p className="demo-button">
								<button type="button" className="btn btn-primary btn-toastr" data-context="info" data-message="This is general theme info" data-position="top-right" onClick={this.handleToaster}>General Info</button>

								<button type="button" className="btn btn-success btn-toastr" data-context="success" data-message="This is success info" data-position="top-right" onClick={this.handleToaster}>Success Info</button>

								<button type="button" className="btn btn-warning btn-toastr" data-context="warning" data-message="This is warning info" data-position="top-right" onClick={this.handleToaster}>Warning Info</button>

								<button type="button" className="btn btn-danger btn-toastr" data-context="error" data-message="This is error info" data-position="top-right" onClick={this.handleToaster}>Error Info</button>

							</p>
							{/* <!-- END CONTEXTUAL --> */}
							<br />
							{/* <!-- POSITION --> */}
							<h4>Position</h4>
							<p className="demo-button">
								<button type="button" className="btn btn-default btn-toastr" data-context="info" data-message="Hi, I'm here" data-position="bottom-right" onClick={this.handleToaster}>Bottom Right</button>
                                
								<button type="button" className="btn btn-default btn-toastr" data-context="info" data-message="Hi, I'm here" data-position="bottom-left" onClick={this.handleToaster}>Bottom Left</button>
                                
								<button type="button" className="btn btn-default btn-toastr" data-context="info" data-message="Hi, I'm here" data-position="top-left" onClick={this.handleToaster}>Top Left</button>
                                
								<button type="button" className="btn btn-default btn-toastr" data-context="info" data-message="Hi, I'm here" data-position="top-right" onClick={this.handleToaster}>Top Right</button>
                                
								<button type="button" className="btn btn-default btn-toastr" data-context="info" data-message="Hi, I'm here" data-position="top-full-width" onClick={this.handleToaster}>Top Full Width</button>
                                
								<button type="button" className="btn btn-default btn-toastr" data-context="info" data-message="Hi, I'm here" data-position="bottom-full-width" onClick={this.handleToaster}>Bottom Full Width</button>
                                
								<button type="button" className="btn btn-default btn-toastr" data-context="info" data-message="Hi, I'm here" data-position="top-center" onClick={this.handleToaster}>Top Center</button>
                                
								<button type="button" className="btn btn-default btn-toastr" data-context="info" data-message="Hi, I'm here" data-position="bottom-center" onClick={this.handleToaster}>Bottom Center</button>
                                
							</p>
							{/* <!-- END POSITION --> */}
							<br />
							{/* <!-- CALLBACK --> */}
							<h4>Callback</h4>
							<p className="demo-button">
								<button type="button" className="btn btn-default btn-toastr-callback" data-context="info" data-message="onShown and onHidden callback demo" data-callback="showhide" onClick={this.handleToaster}>onShown and onHidden</button>

								<button type="button" className="btn btn-default btn-toastr-callback" data-context="info" data-message="Please click me" data-callback="onclick" onClick={this.handleToaster}>onclick</button>

								<button type="button" className="btn btn-default btn-toastr-callback" data-context="info" data-message="Please click close button" data-callback="closeclick" onClick={this.handleToaster}>onCloseClick</button>
							</p>
							{/* <!-- END CALLBACK --> */}
                        </PanelBody>
                    </Panel>
				</div>
			</div>
			
        )
    }
}