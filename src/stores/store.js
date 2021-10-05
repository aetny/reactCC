import { createContext } from "react";
import { makeAutoObservable,action,observable,computed} from 'mobx'

class ObservableTodoStore{
  arr = [];
  pendding = 0;
  constructor(){
    makeAutoObservable(this,{
      arr: observable,
      pendding: observable,
      report: computed,
      getArrToDoCount: computed,
      handlePush: action
    })
  }
  get getArrToDoCount (){
    return this.arr.filter(e=>e.Complete).length
  }
  get report(){
    if(!this.arr.length){
      return '暂无数据'
    }
    const nextItem = this.arr.find(e=>!e.Complete)
    return `下一个代办：${nextItem?nextItem.value:'无'}；进度：${this.getArrToDoCount}/${this.arr.length}`
  }
  handlePush(value){
    this.arr.push({
      value,
      Complete:false,
    })
  }
}
let observableTodoStore = new ObservableTodoStore();
export default observableTodoStore;