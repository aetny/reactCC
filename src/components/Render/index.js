import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Render extends Component{
  //初始化渲染的阶段
  constructor(){
    super();
  }
  state = {
    msg:"render"
  }
  handleClick = ()=>{
    this.setState({
      msg:'更新'
    })
  }
  componentWillMount(){//将要插入虚拟dom，组件将要挂载
    console.log('render之前',this.state.msg);
    //不会被废除 服务端渲染贼强！！！
  }
  render(){//用于插入虚拟dom的
    let {msg} = this.state;
    console.log(msg);
    return (
      <div>
        {msg}
        <button onClick={this.handleClick}>更新</button>
        <button onClick={this.handleUnMount}>卸载</button>
      </div>
    )
  }
  componentDidMount(){//已经插入虚拟dom，真实dom已经生成
    console.log('render之后',this.state.msg);
    //这里最合适调用ajax，不阻碍html的渲染
  }

  componentWillReceiveProps(nextProps){
    //有一个重大bug！！！原因是react的地址引用问题！！！不是根据数据内容判断的 而是根据数据的引用来判断的 所以react项目里深拷贝贼多！
    //初始化的时候不会立即执行！在接收到新的props值触发 
    //一般用于父组件更新 子组件重新渲染
    console.log(nextProps);
  }
  //阀门 通过return返回值拦截更新
  shouldComponentUpdate(nextProps,nextState){
    //通过this.state.msg和nextState对比！！！
    console.log('阀门',this.state.msg);
    console.log(nextProps);
    console.log(nextState);
    return false
  }

  //调用this.setState后，执行更新的过程 
  //react更新消耗的性能最大！！！
  componentWillUpdate(nextProps,nextState){//即将插入虚拟dom
    console.log('更新前',this.state.msg);
  }
  //这里是要更新 直接render
  componentDidUpdate(){//插入虚拟dom
    console.log('更新后',this.state.msg);
  }
  handleUnMount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  componentWillUnmount(){
    console.log('即将卸载');
  }
}
export default Render;