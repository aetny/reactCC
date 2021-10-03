import React,{useContext,createContext} from 'react';

export default function HooksUseContext(){
  //共享状态的钩子函数
  const Context = createContext({});
  console.log(Context);
  const {Provider,Consumer} = Context;
  const obj = {
    name: 'xiaohei',
    Son:{
      name: 'xiaobai'
    },
    GrandSon: {
      name: 'xiaohong'
    }
  }
  const Son = function(){
    const {name,Son} = useContext(Context)
    console.log(name,Son);
    return (
      <div>
        Son:{Son.name}
        <GrandSon></GrandSon>
      </div>
    )
  }
  const GrandSon = function(){
    const obj2 = useContext(Context);
    console.log(obj2);
    return (
      <div>
        GrandSon: {obj2.GrandSon.name}
      </div>
    )
  }
  return(
    <Provider value={obj}>
      <Son></Son>
    </Provider>
  )
};