/*
   本文件通过文字注释和代码相结合，来系统的说明redux的中间件具体是如何定义，运行，加强最初的dispatch方法的
   先来看看常用的别人定义好的中间件
*/

 import { applyMiddleware,createStore } from "redux";
 import thunk from "redux-thunk";
 import createLoggle from "redux-loggle";
 const loggle = createLoggle();
 const store = createStore(reducer,applyMiddleware(thunk,loggle));
 /*
   上面这两个中间件是最常用的中间件，loggle是用来打印redux运行日志的，也就是state更新和action发起的记录；
   thunk是提供给我们异步操作的中间件，使我们可以发起异步的action，这两个是比较常用的，还有其他的中间件，社区中搜索就可以看到。
   首先我们来看看经过thunk的加工，我们的action应该怎样定义
 */

   //异步action
  import fetch from "isomorphic-fetch";
  const action = () => {
      return (dispatch) => {
        dispatch({type:"LOADING"});
        return fetch("A.json")
                   .then(response => response.json())
                   .then( (json) => dispatch({type:"OK",text:json}))

      }
  }

  /*
     异步action的代码如上图所示，这个形式的action和原始的action有很大差别，首先它是一个函数，所以要经过中间件的处理，
     就可以成为reducer可以识别的action进行对应的数据处理。
     下面来看看thunk是怎样加强dispatch来处理这个action的
  */

   //thunk源码
   function createMiddleThunk(someArguments) {
     return ({dispatch,getState}) => next => action =>{
       if(typeof action === "function"){
         return action(dispatch,getState,someArguments)
       }
       return next(action)
     }
   }

   /*
     分析一下，当action是函数时，就会直接返回
   */
