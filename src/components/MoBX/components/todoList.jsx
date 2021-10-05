import {observer} from 'mobx-react';
import TodoItem from './todoItem';
const TodoList = observer(
  ({state})=>{
    console.log(state);
    const handleAdd = ()=>{
      state.handlePush(prompt('输入新的待办：','偶哈哟！'))
    }
    return (
      <div>
        {state.report}
        <ul>
          {state.arr.map((e,i)=><TodoItem key={i} todo={e}></TodoItem>)}
        </ul>
        {state.pendding>0?<marquee>正在加载……</marquee>:null}
        <button onClick={handleAdd}>新增待办</button>
        <small>记得双击标题哦</small>
      </div>
    )
  }
  
)
export default TodoList;