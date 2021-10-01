import {Component} from 'react';

class TodoItem extends Component{
  state = {
    classN:'close'
  }
  handleMouseOver=()=>{
    this.setState({
      classN: ''
    })
  }
  handleMouseOut=()=>{
    this.setState({
      classN: 'close'
    })
  }
  render(){
    let {item,index,aggregate:{handleDelete,handleChange}} = this.props,{classN} = this.state;
    return (
      <li className="width100 listLi" key={index} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <label className="floatLeft">
          <input type="checkbox" className="" checked={item.isDone} onChange={handleChange.bind(null,index)}/>
          <span>{item.value}</span>
        </label>
        <div className="floatRight">
          <button type="button" className={classN} key={index} onClick={handleDelete.bind(null,index)}>删除</button>
        </div>
      </li>
    )
  }
}
export default TodoItem;