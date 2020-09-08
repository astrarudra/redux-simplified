import React from 'react';
import { connect } from 'react-redux'

function Counter(props) {
  console.log("Component2 - Counter Is Rendered", props)
  return (
    <div className="card p-2 m-2">
      <div className="card-title font-weight-bold">Component2 - Counter</div>
      <div className="card-body" style={{alignSelf: "center"}}>
          <div className="counter">{props.counter}</div>
      </div>
    </div>
  );
}

export default connect(s => ({counter: s.counter}))(Counter);
