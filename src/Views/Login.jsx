import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div className="vertical-align-wrap">
                <div className="vertical-align-middle">
                    <div className="auth-box ">
                        <div className="left">
                            <div className="content">
                                <div className="header">
                                    <div className="logo text-center"><img src={require('./../assets/img/logo-dark.png')} alt="Klorofil Logo" /></div>
                                    <p className="lead">Login to your account</p>
                                </div>
                                <form className="form-auth-small" action="index.php">
                                    <div className="form-group">
                                        <label htmlFor="signin-email" className="control-label sr-only">Email</label>
                                        <input type="email" className="form-control" id="signin-email" defaultValue="samuel.gold@domain.com" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="signin-password" className="control-label sr-only">Password</label>
                                        <input type="password" className="form-control" id="signin-password" defaultValue="thisisthepassword" placeholder="Password" />
                                    </div>
                                    <div className="form-group clearfix">
                                        <label className="fancy-checkbox element-left">
                                            <input type="checkbox" />
                                            <span>Remember me</span>
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">LOGIN</button>
                                    <div className="bottom">
                                        <span className="helper-text"><i className="fa fa-lock"></i> <a href="#">Forgot password?</a></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="right">
                            <div className="overlay"></div>
                            <div className="content text">
                                <h1 className="heading">Free Bootstrap dashboard template</h1>
                                <p>by The Develovers</p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

        )
    }
}