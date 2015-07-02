/*global require, module*/

'use strict';

require('./main.scss');
require('materialize');

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./component/App.jsx');
var Form = require('./component/Form.jsx');
var List = require('./component/List.jsx');

var routes = (
    <Route handler={App} path="/">
        <DefaultRoute handler={Form} />
        <Route name="list" handler={List} path="/list"/>
    </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root/>, document.body);
});