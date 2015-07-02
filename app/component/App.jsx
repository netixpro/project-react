/*global require, module, Firebase*/

'use strict';

var $ = require('jquery');

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Nav = require('./nav/Nav.jsx');

var Firebase = require('firebase');
var Trianglify = require('trianglify');

var App = React.createClass({
    getInitialState: function () {
        this.items = [];
        return {
            items: [],
            name: this.props.name
        };
    },
    componentWillMount: function () {
        this.firebaseRef = new Firebase("https://my-event.firebaseio.com/");
        this.firebaseRef.limitToLast(10).on("child_added", function(dataSnapshot) {
            this.items.push(dataSnapshot.val());
            this.setState({
                items: this.items
            });
        }.bind(this));

    },

    componentDidMount: function() {
        this.bgPattern = Trianglify({
            height: window.innerHeight,
            width: window.innerWidth,
            cell_size: 80,
            y_colors: ['#00838f', '#016e99', '#0db0d6', '#01908e', '#029889'],
            x_colors: ['#016e99', '#014069', '#016e99', '#01908e', '#75e8d7', '#75e8d7', '#06877b']
        });
        $(this.refs.bgPattern.getDOMNode()).append(this.bgPattern.canvas());
    },
    componentWillUnmount: function() {
        this.firebaseRef.off();
    },
    updateName: function (name) {
        this.setState({
            name: name
        });
    },
    onSubmit: function (data) {
        this.firebaseRef.push(data);
    },
    onMenuOpen: function (e) {
        e.preventDefault();
        this.refs.leftNav.open();
    },
    render: function () {
        return (
            <div className="app">
                <div className="bg-pattern" ref="bgPattern"></div>
                <div className="main-wrapper">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = App;