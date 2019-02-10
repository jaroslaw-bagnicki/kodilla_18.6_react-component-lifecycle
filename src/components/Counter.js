const Counter = React.createClass({
  propsTypes: {
    value: React.PropTypes.number,
    color: React.PropTypes.string
  },

  render() {
    console.log(this.props);
    return (
      React.createElement('div', {className: 'counter'},
        React.createElement('button', {className: 'decrement'}, '-'),
        React.createElement('span', {className: `value ${this.props.color}`}, '{0}'),
        React.createElement('button', {className: 'increment'}, '+')
      )
    );
  }
});
