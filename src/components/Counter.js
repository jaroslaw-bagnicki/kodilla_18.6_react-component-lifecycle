const Counter = React.createClass({
  propsTypes: {
    value: React.PropTypes.number
  },

  render() {
    console.log(this.props);
    return (
      React.createElement('div', {className: 'counterWrapper'},
        React.createElement('button', {className: 'decrement'}, '-'),
        React.createElement('span', {className: 'value'}, '{0}'),
        React.createElement('button', {className: 'increment'}, '+')
      )
    );
  }
});
