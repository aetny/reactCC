import React,{Component} from 'react';
import { render } from 'react-dom';
import {observable} from 'mobx';

import observableTodoStore from '../../stores/store';
import TodoList from './components/todoList';
let MoBX;

export default MoBX = function(props){
  console.log(observableTodoStore);
  console.log(props);
  return (
    <TodoList state={observableTodoStore}></TodoList>
  )
}