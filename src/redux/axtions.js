import {INCREMENT,DECREMENT} from './action-type';

export const increment = number=>({type:INCREMENT,value:number})
export const decrement = number=>({type:DECREMENT,value:number})

export const incrementAsync = number => {
  return (fn)=>{
    //这里fn实际上是dispatch函数，可以调用接口等 进行异步处理
    setTimeout(()=>{
      fn(increment(number))
    },1000)
  }
}