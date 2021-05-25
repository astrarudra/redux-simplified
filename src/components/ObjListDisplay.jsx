import React from 'react';
import { connect } from 'react-redux'

function ObjListDisplay(props) {
  console.log("Component5 - ObjListDisplay Is Rendered", props)
  return (
    <div className="card p-2 m-2">
      <div className="card-title font-weight-bold">Component3 - ObjListDisplay</div>
      <pre style={{textAlign: "left"}}>
        {JSON.stringify(props.objList, null, 4)}   
      </pre>
    </div>
  );
}

export default connect((s) => ({objList: s.example.objList}))(ObjListDisplay);
