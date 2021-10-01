import React from 'react';

export default function messageDetail(props){
  let arr = [
    {id:'祖国',title:'祖国',content:'为祖国庆生'},
    {id:'母亲',title:'母亲',content:'为母亲庆生'},
    {id:'祖国母亲',title:'祖国母亲',content:'为祖国母亲庆生'}
  ]
  console.log(props);
  let {match:{params:{id}}} = props;
  //find 传递的是字符串！！！
  return (
    <div>
      <ul>
        <li className="width100">id:{arr[id-1].id}</li>
        <li className="width100">title:{arr[id-1].title}</li>
        <li className="width100">content:{arr[id-1].content}</li>
      </ul>
    </div>
  )
}