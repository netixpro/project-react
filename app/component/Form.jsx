/*global require, module*/

'use strict';

var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;

var Form = React.createClass({

    mixins: [Navigation],

    getInitialState: function () {
        return {
            text: ''
        }
    },
    onSubmit: function (e) {
        e.preventDefault();
        this.transitionTo('/list');
    },
    onChange: function (e) {
        this.setState({
            text: e.target.value
        });
    },
    render: function () {
        return (
            <div className="valign-wrapper">
                <div className="valign center-component">
                    <div className="row center-align">
                        <form className="col s12" ref="form" onSubmit={this.onSubmit}>
                            <div className="card">
                                <div className="card-content">
                                    <div className="brand-logo">
                                        <span>go</span>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="mdi-action-account-circle prefix"></i>
                                            <input id="icon_prefix" type="text" className="validate"/>
                                            <label htmlFor="icon_prefix">Login or Email</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="mdi-action-lock prefix"></i>
                                            <input id="icon_telephone" type="tel" className="validate"/>
                                            <label htmlFor="icon_telephone">Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-action center-align">
                                    <a href="#" className="btn-flat">Sign Up</a>
                                    <button className="btn white-text">Sign In</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Form;