import React,{ useState } from "react";
export default function HooksUseState(){
  //useState和 class的this.setState 对比 
  
  //这里通过使用多个useState()创建多个变量！这里针对简单类型的变量处理！
  const [count,setCount] = useState(0);//useState(0)返回的是[0,function(){}],通过数组解构处理
  //这里const定义常量！！！
  const handleAdd = ()=>{
    let countCopy = count;
    setCount(++countCopy);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={() => setCount(count-1)}>-</button>
    </div>
  )
};