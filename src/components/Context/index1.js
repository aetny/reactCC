import React,{Component} from 'react';
import PropTypes from 'prop-types';
//老版的写法
class Context extends Component{
  constructor(){
    super();
  }
  state = {
    newContext:'newContext'
  }
  //getChildContext是不能变的！！！ 取值通过this.context.value 皆是固定写法！！！
  getChildContext(){
    return {
      value: this.state.newContext
    }
  }
  render(){
    const {newContext} = this.state;
    return (
      <div>
        <div>
          <label>childContext</label>
          <input type="text" value={newContext} onChange={e=>this.setState({newContext:e.target.value})}></input>
          {newContext}
        </div>
        <Son></Son>
      </div>
    )
  }
}
class Son extends Component{
  render(){
    return (
      <div>
        <p>
          children:{this.context.value}
        </p>
        <GrandSon />
      </div>
    )
  }
}
class GrandSon extends Component{
  render(){
    return (
      <p>
        GrandChildren:{this.context.value}
      </p>
    )
  }
}
Context.childContextTypes = {
  value: PropTypes.string
}
Son.contextTypes = {
  value: PropTypes.string
}
GrandSon.contextTypes = {
  value: PropTypes.string
}
export default Context;