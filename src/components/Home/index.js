import React, {Component} from 'react';
import propTypes from 'prop-types'
import Son from './Son'
class Home extends Component{
  constructor(){
    super();
    this.objRef = React.createRef();//{current:null}
    this.objRef1 = React.createRef();
  }
  componentDidMount(){
    this.timer = setTimeout(() => {
      this.ref.textContent = 'method ref';
      this.refs.strRef.textContent = 'String ref';//以前的方式
      this.objRef.current.textContent = 'Object ref';
    }, 2000);
    
    this.objRef1.current.value = '11'
  }
  componentWillUnmount(){
    clearTimeout(this.timer);
  }
  render(){
    const obj = {
      name:'小黑',
      type:'cat'
    }
    return (
      <div>
        <h2>首页 refs获取方式</h2>
        <p ref={Element=>(this.ref = Element)}>span1</p>
        <p ref="strRef">span1</p>
        <p ref={this.objRef}>span1</p>

        子组件： <Son {...obj} ref11={this.objRef1}/>
      </div>
    )
  }
}
Son.propTypes = {
  name: propTypes.string.isRequired
}
Son.defaultProps = {
  age:1
}
export default Home;