import {Component} from 'react';

import TodoItem from './TodoItem';
class TodoMain extends Component{
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    console.log(this.props.arr);
  }
  render(){
    let {aggregate:{arr}} = this.props;
    return (
      <div>
        <ul>
          {arr&&arr.map((item,index)=><TodoItem key={index} index={index} item={item} {...this.props}></TodoItem>)}
        </ul>
      </div>
    )
  }
}
export default TodoMain;