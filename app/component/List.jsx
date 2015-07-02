var React = require('react');

var List = React.createClass({
    items: [
        {text: 'test 1'},
        {text: 'test 2'}
    ],

    render: function() {
        var createItem = function(item, index) {
            return <li key={ index }>{ item.text }</li>;
        };
        return <ul>{ this.items.map(createItem) }</ul>;
    }
});

module.exports = List;