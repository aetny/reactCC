import {Component} from 'react';

class Son extends Component{
  constructor(){
    super();
  }
  render(){
    let {name,type,age,ref11} = this.props
    console.log(this.props);
    return (
      <div>
        <p>name:{name}</p>
        <p>type:{type}</p>
        <p>age:{age}</p>
        <input ref={ref11} />
      </div>
    )
  }
}
export default Son;