import React,{Component} from 'react';
// import {increment,decrement} from '../../redux/axtions';
import { connect } from 'react-redux'
let Redux;
export default Redux = function(props){
  console.log(props);
  const handleAdd = ()=>{
    props.increment(1)
  }
  const handleDel = ()=>{
    props.decrement(2)
  }
  const handleAsync = ()=>{
    props.incrementAsync(3)
  }
  return (
    <div>
      {props.state}
      <button onClick={handleAdd}>+</button>
      <button onClick={handleDel}>-</button>
      <button onClick={handleAsync}>async</button>
    </div>
  )
}