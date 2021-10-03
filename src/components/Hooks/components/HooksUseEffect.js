import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function HooksUseEffect(){
  return (
    <div>
      <p>比对Message.js和MessageCopy.js文件</p>
      <div style={{fontStyle:'oblique'}}><Link to="/other/message">Message</Link></div>
      点击跳转message页面，体验写法差别
    </div>
  )
};