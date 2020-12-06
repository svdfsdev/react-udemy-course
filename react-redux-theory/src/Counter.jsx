import React from 'react';
import { connect } from 'react-redux';
import { add2 } from './redux/actions/actions';

class Counter extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px', border: '1px solid #ccc' }}>
        <h1>Counter {this.props.counter}</h1>
        <hr />
        <button onClick={this.props.onAdd.bind(this, -1)}>Sub</button>
        <button onClick={this.props.onAdd.bind(this, 1)}>Add</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter2.counter2,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: (number) => dispatch(add2(number)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
