import {observer} from 'mobx-react';

const TodoItem = observer(({todo})=>{
  console.log(todo);
  return (
    <li onDoubleClick={()=>{todo.value = prompt('任务名称',todo.value)||todo.value}}>
      <label>
        <input type="checkbox" checked={todo.Complete} onChange={()=>{todo.Complete = !todo.Complete}}/>
        {todo.value}
      </label>
    </li>
  )
})
export default TodoItem;