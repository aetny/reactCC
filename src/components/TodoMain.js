import React from 'react';
import TodoItem from './TodoItem.js';

class ToDoMain extends React.Component {
    render() {
        const { todoCount, todos, todoDoneCount } = this.props;
        console.log(todos);
        if (!todos.length) {
            return <div>没有数据</div>
        } else {
            let { todoDelete } = this.props;
            return (
                <ul>
                    {
                        todos.map((item, index) => {
                            return <TodoItem text={item.value} key={index} index={index} isDone={item.isDone} todoDelete={todoDelete}></TodoItem>
                        })
                    }
                    <li className="todoItem" >
                        <label>
                            <span>
                                <strong>{todoCount}</strong>总数/<strong>{todoDoneCount}</strong>已完成
                            </span>
                        </label>
                    </li>
                </ul>
            );
        }

    }
}

export default ToDoMain;