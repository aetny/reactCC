import {Component} from 'react';

class Son extends Component{
  constructor(){
    super();
  }
  render(){
    let {name,type,age} = this.props
    return (
      <div>
        <p>name:{name}</p>
        <p>type:{type}</p>
        <p>age:{age}</p>
      </div>
    )
  }
}
export default Son;