import {Component} from 'react';
import {Router,Route,NavLink,IndexRoute,Redirect,Switch } from 'react-router-dom';

import New from './New';
import Message from './Message';
import './common.css'
class Other extends Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <ul style={{float:'left'}}>
          <li><NavLink to="/other/new">New</NavLink></li>
          <li><NavLink to="/other/message">Message</NavLink></li>
        </ul>
        <div style={{overflow:'hidden'}}>
          <Switch>
            <Route path="/other/new" component={New}></Route>
            <Route path="/other/message" component={Message}></Route>
            <Redirect to="/other/message"></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
export default Other;