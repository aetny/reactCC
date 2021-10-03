import {Component} from 'react';
import {Router,Route,Link,IndexRoute,Redirect,Switch } from 'react-router-dom';

import HooksUseState from './components/HooksUseState';
import HooksUseContext from './components/HooksUseContext';
import HooksUseEffect from './components/HooksUseEffect';
import HooksUseReducer from './components/HooksUseReducer';
// 纯函数组件没有状态
// 没有生命周期
// 没有this
// hooks 钩子 这才是react钩子函数 
// 写成纯函数组件需要使用别的功能通过钩子 勾进来！！！
// useState useContext useEffect useReducer 简洁性能较强
class hooks extends Component{
  constructor(){
    super();
    this.state = {
      arr:[
        {id:1,value:'useState',path:'/hooks/useState',component:HooksUseState},
        {id:2,value:'useContext',path:'/hooks/HooksUseContext',component:HooksUseContext},
        {id:3,value:'useEffect',path:'/hooks/HooksUseEffect',component:HooksUseEffect},
        {id:4,value:'useReducer',path:'/hooks/HooksUseReducer',component:HooksUseReducer},
      ],
    }
  }
  //函数组件 有没有状态
  render(){
    let {arr} = this.state;
    return (
      <div>
        <ul style={{display:'inline'}}>
          {arr && arr.map((item)=>(<li style={{float:'left'}} key={item.id}>
            <Link style={{color:'#248feb'}} to={item.path}>{item.value}</Link>
            </li>))}
        </ul>
        <div style={{overflow:'hidden',width:'100%'}}>
          <Switch>
            {arr && arr.map(item=>(<Route path={item.path} key={item.id} component={item.component}></Route>))}
            {/* <Redirect to="/other/hooks/:id"></Redirect> */}
          </Switch>
        </div>
      </div>
    )
  }
}
export default hooks;