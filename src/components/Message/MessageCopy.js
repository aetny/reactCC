import React,{useState,useEffect} from 'react';
import {Router,Route,Link,IndexRoute,Redirect,Switch } from 'react-router-dom';
import messageDetail from './MessageDetail';

export default function Message(){
  const [isShow,setIsShow] = useState('block');
  const [arr,setArr] = useState([]);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsShow('none');
      setArr([
        {id:1,value:'list1'},
        {id:2,value:'list2'},
        {id:3,value:'list3'},
      ])
    },1000)
    return function(){
      clearTimeout(timer)
    }
  })
  // 第一个参数是回调函数，第二个参数是数组 
  // 第二个数组参数 写了数组改变才会触发回调函数 不写每次组件运行都会调用回调函数！！！
  // 相当于componentDidMount
  return (
    <div>
      <p style={{display:isShow}}>loadding...</p>
      <ul style={{display:'inline'}}>
        {arr && arr.map((item)=>(<li style={{float:'left'}} key={item.id}><Link style={{color:'#248feb'}} to={`/other/message/${item.id}`}>{item.value}</Link></li>))}
      </ul>
      <div style={{overflow:'hidden',width:'100%'}}>
        <Switch>
          <Route path="/other/message/:id" component={messageDetail}></Route>
          {/* <Redirect to="/other/message/:id"></Redirect> */}
        </Switch>
      </div>
    </div>
  )
}