import React,{Component} from 'react';
import './App.css';
import {Router,Route,NavLink,IndexRoute,Redirect,Switch } from 'react-router-dom';

import Home from './components/Home/index';
import Context from './components/Context/index';
import Forward from './components/Forward/index';
import Other from './components/Other';
import Info from './components/Info';
import Hooks from './components/Hooks';
import Render from './components/Render/index';
import SetState from './components/SetState/index';
import Demo from './components/Demo/index';
import MoBX from './components/MoBX/index';
import Redux from './container/index';
class App extends Component{
  constructor(){
    super();
  }
  render(){
    console.log(this.props);
    return (
      <div className="App">
        <div className="floatLeft">
          <ul>
            <li><NavLink to="/home">首页</NavLink></li>
            <li><NavLink to="/forward">Forword</NavLink></li>
            <li><NavLink to="/context">Context</NavLink></li>
            <li><NavLink to="/other">路由配置</NavLink></li>
            <li><NavLink to="/info">模板页面</NavLink></li>
            <li><NavLink to="/render">钩子函数</NavLink></li>
            <li><NavLink to="/hooks">hooks</NavLink></li>
            <li><NavLink to="/demo">组件传值</NavLink></li>
            <li><NavLink to="/setState">setState</NavLink></li>
            <li><NavLink to="/mobx">MoBX</NavLink></li>
            <li><NavLink to="/redux">Redux</NavLink></li>
          </ul>
        </div>
        <div className="contentBox overFlowHidden textAlignLeft padding40">
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/forward" component={Forward}></Route>
            <Route path="/context" component={Context}></Route>
            <Route path="/other" component={Other}></Route>
            <Route path="/info" component={Info}></Route>
            <Route path="/render" component={Render}></Route>
            <Route path="/hooks" component={Hooks}></Route>
            <Route path="/setState" component={SetState}></Route>
            <Route path="/mobx" component={MoBX}></Route>
            <Route path="/redux" component={Redux}></Route>
            <Route path="/demo" component={Demo}></Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
export default App;
