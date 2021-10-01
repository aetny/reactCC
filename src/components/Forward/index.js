import React,{Component} from 'react';
//ref 函数组件通过ref暴露dom获取值 通过forwardRef包裹！！！
// 类似循环的key forwordRef的ref getChildContext的value等属性 不能更改！！！
const TargetFunction  = React.forwardRef((props,ref)=>
{
  console.log(props);
  console.log(ref.current);
  return (
  <div>
    <input type="text" ref={ref}></input>
  </div>
)}
)
class Forward extends Component{
  constructor(){
    super();
    this.ref = React.createRef()
  }
  componentDidMount(){
    this.ref.current.value = 'ref input';//数据是自外而内的！！！
  }
  render(){
    return (
      <TargetFunction ref={this.ref}></TargetFunction>
    )
  }
}
export default Forward;