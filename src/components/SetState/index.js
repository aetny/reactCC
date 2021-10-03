import {Component} from 'react';

class SetState extends Component{
  state = {
    count:0,
    val: 0
  }
  handleAdd = ()=>{
    //react直接修改state之后 需要驱动UI的渲染
    // console.log(this.state.count);
    
    this.setState({//异步写法
      count:this.state.count + 1
    })
    // this.setState({  //这种写法是有意思！！！
    //   count:++this.state.count
    // })
    // console.log(this.state.count);
    // this.setState(pre=>({count:pre.count + 1}))//同步写法
  }
  handleClick = ()=>{
    this.handleAdd()
    this.handleAdd()
    this.handleAdd()
    this.handleAdd()
    this.handleAdd()
  }
  componentDidMount(){
    this.setState({val:this.state.val+1});
    console.log(this.state.val);
    this.setState({val:this.state.val+1});
    console.log(this.state.val);
    setTimeout(()=>{
      this.setState({val:this.state.val+1});
      console.log(this.state.val);
      this.setState({val:this.state.val+1});
      console.log(this.state.val);
    },0)
  }
  render(){
    let {count} = this.state
    return (
      <div>
        <p>{count}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
export default SetState;