const Counter = React.createClass({
  propsTypes: {
    value: React.PropTypes.number,
    color: React.PropTypes.string
  },

  getDefaultProps() {
    console.log('getDefaultProps()', 'props:', this.props,  'state:', this.state);
  },

  getInitialState() {
    console.log(`${this.props.color}: getInitialState()`, 'props:', this.props, 'state:', this.state);
    return {
      stateValue: this.props.value > 0 ? this.props.value : 0
    };
  },

  componetWillMount() {
    console.log(`${this.props.color}: componetWillMount()`);
  },

  componetDidMount() {
    console.log(`${this.props.color}: componetDidMount()`);
  },

  increment() {
    this.setState({
      stateValue: this.state.stateValue + 1
    });
  },

  decrement() {
    this.setState({
      stateValue: this.state.stateValue > 0 ? this.state.stateValue - 1 : 0
    });
  },

  render() {
    console.log(`${this.props.color}: render()`, 'state:', this.state);
    return (
      React.createElement('div', {className: 'counter'},
        React.createElement('button', {className: 'decrement', onClick: this.decrement}, 
          React.createElement('i', {className: 'fas fa-minus'})
        ),
        React.createElement('span', {className: `value ${this.props.color}`}, this.state.stateValue),
        React.createElement('button', {className: 'increment', onClick: this.increment}, 
          React.createElement('i', {className: 'fas fa-plus'})
        )
      )
    );
  }
});
