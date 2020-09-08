import React from 'react';
import { connect } from 'react-redux'
import { deleteTodo } from '../appStore/todo'

function Todo(props) {
  console.log("Component1 - Todo is Rendered", props)
  return (
    <div className="card p-2 m-2">
      <div className="card-title font-weight-bold">Component1 - Todo</div>
      {props.todo ? props.todo.map((o,i) => 
        <div className="todo" key={i}>
            <div>{o.value}</div>
            <div onClick={() => props.dispatch(deleteTodo({id: o.id}))} style={{marginLeft: "auto", cursor: "pointer", color: 'red'}}>
                <i className="fa fa-times" aria-hidden="true"></i>
            </div>
        </div>
    ): null}
    </div>
  );
}

export default connect((s) => ({todo: s.todo}))(Todo);
