import React, {useState} from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../appStore/todo'
import { increase, decrease } from '../appStore/counter'

function ButtonPanel(props) {
  const [input, setInput] = useState("")
  const fireBothStore = () => {
    props.dispatch(increase())
    props.dispatch(addTodo({value: "FireBothStore Example"}))
  }
  console.log("Component3 - Buttom Panel Is Rendered", props)
  return (
    <div className="card p-2 m-2">
      <div className="card-title font-weight-bold">Component5 - Buttom Panel</div>
      <div className="d-flex card-body" style={{alignSelf: "center"}}>
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} className="form-control" style={{width: '400px'}}/>
        <button onClick={() => props.dispatch(addTodo({value: input}))} type="button" className="btn btn-primary mr-1">Add Todo</button>
      </div>
      <div className="d-flex card-body" style={{alignSelf: "center"}}>
        <button onClick={() => props.dispatch(increase())} type="button" className="btn btn-primary mr-1">+ Counter</button>
        <button onClick={() => props.dispatch(decrease())} type="button" className="btn btn-primary mr-1">- Counter</button>
        <button onClick={fireBothStore} type="button" className="btn btn-primary mr-1">FireBothStore</button>
      </div>
    </div>
  );
}

export default connect()(ButtonPanel);
