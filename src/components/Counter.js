const Counter = React.createClass({
  propsTypes: {
    value: React.PropTypes.number,
    color: React.PropTypes.string
  },

  render() {
    console.log(this.props);
    return (
      React.createElement('div', {className: 'counter'},
        React.createElement('button', {className: 'decrement'}, 
          React.createElement('i', {className: 'fas fa-minus'})
        ),
        React.createElement('span', {className: `value ${this.props.color}`}, '0'),
        React.createElement('button', {className: 'increment'}, 
          React.createElement('i', {className: 'fas fa-plus'})
        )
      )
    );
  }
});
