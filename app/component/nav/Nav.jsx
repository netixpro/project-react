var React = require('react');

var Nav = React.createClass({
    componentWillMount: function () {
        $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrain_width: false, // Does not change width of dropdown to that of the activator
                hover: true, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: false // Displays dropdown below the button
            }
        );
    },
    render: function () {
        return (
            <nav>
                <div className="nav-wrapper row">
                    <div className="col">
                        <a href="#!" className="brand-logo">HypeCorner</a>
                    </div>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html"><i className="mdi-action-search"></i></a></li>
                        <li><a href="components.html"><i className="mdi-action-view-module"></i></a></li>
                        <li><a href="javascript.html"><i className="mdi-navigation-refresh"></i></a></li>
                        <li>
                            <a href="mobile.html" className="dropdown-button" data-activates='dropdown1'><i className="mdi-navigation-more-vert"></i></a>
                            <ul id='dropdown1' class='dropdown-content'>
                                <li><a href="#!">one</a></li>
                                <li><a href="#!">two</a></li>
                                <li class="divider"></li>
                                <li><a href="#!">three</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Nav;