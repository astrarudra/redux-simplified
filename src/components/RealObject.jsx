import React from 'react';
import { connect } from 'react-redux'
import ObjListDisplay from './ObjListDisplay'
import ListDisplay from './ListDisplay'
import { changeEmail , changeData , addList } from '../appStore/real'
import StoreActions from '../appStore/StoreActions'

function RealObject(props) {
  console.log(StoreActions, "StoreActions")
  console.log("Component4 - Real Object is Rendered", props)
  return (
    <div className="card p-2 m-2">
      <div className="card-title font-weight-bold">Component 1 - Parent</div>
      <div className="d-flex"  style={{alignSelf: "center"}}>
        <div className="card p-2 m-2">
          <div className="card-title font-weight-bold">Component 2</div>
          <div>Email</div>
          <div>{props.email}</div>
        </div>
        <ObjListDisplay />
        <ListDisplay />
      </div>
      <div className="d-flex card-body" style={{alignSelf: "center"}}>
        <button onClick={() => props.dispatch(changeEmail({email: "changed@gmail.com"}))} type="button" className="btn btn-primary mr-1">Change Email</button>
        <button onClick={() => props.dispatch(changeData({id: 1, data: "Changed"}))} type="button" className="btn btn-primary mr-1">Change Data id=1</button>
        <button onClick={() => props.dispatch(addList())} type="button" className="btn btn-primary mr-1">Add To List</button>
      </div>
    </div>
  );
}

export default connect(s => ({email: s.real.email}))(RealObject);
