import React from 'react';

class TodoHeader extends React.Component {
    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            let value = e.target.value;
            if (!value) return;
            let noteItem = {
                value,
                isDone: false
            }
            e.target.value = ''
            this.props.addTodo(noteItem)
        }
    }
    render() {
        return (
            <div className="todo-header">
                <h1>React Todo</h1>
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-md-2">Task</label>
                        <div className="col-md-10">
                            <input type="text" placeholder="请输入" className="form-control" onKeyUp={this.handleKeyUp} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoHeader;