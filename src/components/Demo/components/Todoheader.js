import {Component} from 'react';

class Todoheader extends Component{
  state = {
    inputValue:''
  }
  handleChange = (e)=>{
    this.setState({
      inputValue:e.target.value
    })
  }
  handleKeyUp=(e)=>{
    if(e.keyCode !== 13){
      return;
    }
    let {handlePush} = this.props;
    handlePush(e.target.value)
    this.setState({
      inputValue:''
    })
  }
  render(){
    let { inputValue } = this.state
    return (
      <div>
        <input type="text" value={inputValue} onChange={this.handleChange} onKeyUp={this.handleKeyUp} placeholder="请输入，按回车键确认"/>
      </div>
    )
  }
}
export default Todoheader;