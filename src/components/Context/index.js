import React,{Component} from 'react';
const {Provider,Consumer} = React.createContext('default');
//Provider传值    Consumer接受值
class Context extends Component{
  constructor(){
    super();
  }
  state = {
    newContext:'newContext'
  }
  // handleChange=(value)=>{
  //   this.setState({
  //     newContext:value.newContext
  //   })
  // }
  render(){
    const {newContext} = this.state;
    return (
      <Provider value={newContext}>
        <div>
          <label>childContext</label>
          <input type="text" value={newContext} onChange={e=>this.setState({newContext:e.target.value})}></input>
          {newContext}
        </div>
        <Son></Son>
      </Provider>
    )
  }
}
class Son extends Component{
  render(){
    return (
      <Consumer>
        {
          (value)=>(<div style={{borderTop:'1px solid red',textAlign:'center',marginTop:'5px'}}>
            son:{value}
            <GrandSon />
          </div>)
        }
      </Consumer>
    )
  }
}
class GrandSon extends Component{
  render(){
    return (
      <Consumer>
        {
          (value)=>(<div style={{borderTop:'1px solid green',textAlign:'center',marginTop:'5px'}}>
            GrandSon:{value}
          </div>)
        }
      </Consumer>
    )
  }
}
export default Context;