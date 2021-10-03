import React,{useReducer} from 'react';

export default function HooksUseReducer(){
  const reducer = useReducer((state,action)=>{
    console.log(state,action);
    switch(action){
      case '+':
        // return {count:++state.count};这个写法 本身就有陷阱
        return {count:state.count+1};
      case '-':
        return {count:state.count-1}; 
      default:
        return state;
    }
  },{count:0});
  const [state,setState] = reducer;
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={setState.bind(null,'+')}>+</button>
      <button onClick={setState.bind(null,'-')}>-</button>
    </div>
  )
};