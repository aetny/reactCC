import {Component} from 'react';

class TodoFooter extends Component{
  render(){
    let {sub:{handleIsAll,arr,isAll}} = this.props;
    return (
      <div>
        <label>
          <input type="checkbox" checked={isAll} onChange={handleIsAll} />
          <span>全选</span>
        </label>
      </div>
    )
  }
}
export default TodoFooter;