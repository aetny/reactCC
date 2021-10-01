import React from 'react';

class TodoItem extends React.Component {
    constructor() {
        super();
        this.state = {
            isShow: false
        }
    }
    // state = {

    // }
    handleMouseOver = () => {
        this.setState({
            isShow: true
        })
    }
    handleMouseOut = () => {
        this.setState({
            isShow: false
        })
    }
    handleDelete = () => {
        this.props.todoDelete(this.props.index);
    }
    render() {
        const { isShow } = this.state;
        const { text, isDone } = this.props;
        console.log(this.props);
        return (
            <li onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <label>
                    <input type="checkbox" className="pull-left" />
                    <span className={isDone ? "task-done" : ""}>{text}</span>
                </label>
                <div className="pull-right">
                    <button type="button" className={isShow ? "btn btn-xs" : "btn btn-xs close"} onClick={this.handleDelete}>删除</button>
                </div>
            </li>
        );
    }
}

export default TodoItem;