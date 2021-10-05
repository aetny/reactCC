import React from "react";
import {connect} from 'react-redux';
import Redux from '../components/Redux/index';
import {increment,decrement,incrementAsync} from '../redux/axtions'
export default connect(
  count => ({state:count}),
  {
    increment,
    decrement,
    incrementAsync
  }
)(Redux)