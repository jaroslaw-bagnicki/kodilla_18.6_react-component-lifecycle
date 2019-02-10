const App = React.createClass({
  propsTypes: {
    red: React.PropTypes.number.isRequired,
    blue: React.PropTypes.number.isRequired
  },
  render() {
    console.log(this.props);
    return (
      React.createElement('div', {className: 'app'}, 
        React.createElement('h1', {className: 'labelsTitle'}, 'Init values:'),
        React.createElement('h2', {className: 'labels'}, 
          React.createElement('span', {className: 'redLabel'}, this.props.red),
          React.createElement('span', {className: 'blueLabel'}, this.props.blue)
        ),
        React.createElement('div', {className: 'counters'}, 
          // React.createElement(Counter, {value: this.red, className: 'counter red'}),
          // React.createElement(Counter, {value: this.blue, className: 'counter blue'})
          React.createElement('div', {value: this.red, className: 'counter red'}, 'Red counter'),
          React.createElement('div', {value: this.blue, className: 'counter blue'}, 'Blue counter')
        )
      )
    );
  }
});
