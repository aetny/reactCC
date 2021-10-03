import {Component} from 'react';
import {Router,Route,Link,IndexRoute,Redirect,Switch } from 'react-router-dom';
import messageDetail from './MessageDetail';

class Message extends Component{
  constructor(){
    super();
    this.state = {
      arr:[],
      isShow:'block'
    }
  }
  componentDidMount(){
    this.timer = setTimeout(() => {
      let arr = [
        {id:1,value:'list1'},
        {id:2,value:'list2'},
        {id:3,value:'list3'},
      ],isShow='none';
      this.setState({
        arr,
        isShow
      })
    }, 1000);
  }
  componentWillUnmount(){
    // this.setState = ()=>false;
    clearTimeout(this.timer)
  }
  render(){
    let {arr,isShow} = this.state;
    return (
      <div>
        <p style={{display:isShow}}>loadding...</p>
        <ul style={{display:'inline'}}>
          {arr && arr.map((item)=>(<li style={{float:'left'}} key={item.id}><Link style={{color:'#248feb'}} to={`/other/message/${item.id}`}>{item.value}</Link></li>))}
        </ul>
        <div style={{overflow:'hidden',width:'100%'}}>
          <Switch>
            <Route path="/other/message/:id" component={messageDetail}></Route>
            {/* <Redirect to="/other/message/:id"></Redirect> */}
          </Switch>
        </div>
      </div>
    )
  }
}
export default Message;