import {Component} from 'react';
import {Router,Route,Link,IndexRoute,Redirect,Switch } from 'react-router-dom';

import UState from './components/UState';
import UContext from './components/UContext';
import UEffect from './components/UEffect';
import UReducer from './components/UReducer';
// 纯函数组件没有状态
// 没有生命周期
// 没有this
// hooks 钩子 这才是react钩子函数 
// 写成纯函数组件需要使用别的功能通过钩子 勾进来！！！
// useState useContext useEffect useReducer
class hooks extends Component{
  constructor(){
    super();
    this.state = {
      arr:[
        {id:1,value:'uState',path:'/hooks/uState',component:UState},
        {id:2,value:'useContext',path:'/hooks/uContext',component:UContext},
        {id:3,value:'useEffect',path:'/hooks/uEffect',component:UEffect},
        {id:4,value:'useReducer',path:'/hooks/uReducer',component:UReducer},
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