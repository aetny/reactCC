import {Component} from 'react';
import Todoheader from './components/Todoheader';
import TodoMain from './components/TodoMain';
import TodoFooter from './components/TodoFooter';
class Demo extends Component{
  constructor(){
    super();
  }
  state = {
    arr:[
      {value:1,isDone:false}
    ],
    isAll:false
  }
  handlePush=(value)=>{
    this.state.arr.push({value,isDone:false})
    this.setState({
      arr: this.state.arr,//这种写法贼强！！！会造成react的钩子函数bug（componentWillReceiveProps）
      // arr:[{value,isDone:false},...this.state.arr],
      isAll:false
    })
  }
  handleDelete=(value)=>{
    console.log(value);
    let arr = this.state.arr.reduce((_arr,cur,index)=>{
      if(index === value){
        return _arr;
      }else{
        return [..._arr,cur]
      }
    },[])
    this.setState({
      arr,
      isAll:arr.every(item=>item.isDone)
    })
  }
  handleChange=(value)=>{
    let {arr} = this.state;
    arr[value].isDone = !arr[value].isDone;
    this.setState({
      arr,
      isAll:arr.every(item=>item.isDone)
    })
  }
  handleIsAll=(value)=>{
    console.log(value.target.checked);
    this.setState({
      arr:this.state.arr.reduce((_arr,cur,index)=>{
        return [..._arr,{value:cur.value,isDone:value.target.checked}]
      },[]),
      isAll:value.target.checked
    })  
  }
  render(){
    let {arr,isAll} = this.state;
    let aggregate = {
      arr,
      handleChange:this.handleChange,
      handleDelete:this.handleDelete
    }
    //这个地方我重新定义了数据，避免了数据的重复
    let sub = {
      arr,
      isAll,
      handleIsAll:this.handleIsAll
    }
    // console.log(arr);//理解一下 这里数据简单 只有一层 浅拷贝即可 复杂类型需要深拷贝！
    // console.log([...arr]);
    return (
      <div>
        <Todoheader handlePush={this.handlePush}/>
        <TodoMain aggregate = {aggregate} arr={[...arr]}/>
        <TodoFooter sub={sub} />
      </div>
    )
  }
}
export default Demo;