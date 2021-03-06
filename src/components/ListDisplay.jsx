import React from 'react';
import { connect } from 'react-redux'

function ListDisplay(props) {
  console.log("Component6 - ListDisplay Is Rendered", props)
  return (
    <div className="card p-2 m-2">
      <div className="card-title font-weight-bold">Component4 - ListDisplay</div>
      <pre style={{textAlign: "left"}}>
        {JSON.stringify(props.justList, null, 4)}   
      </pre>
    </div>
  );
}

export default connect((s) => ({justList: s.example.justList}))(ListDisplay);
