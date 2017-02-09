import React,{ Component } from "react";
import { render } from "react-dom";


class Index extends Component{
  constructor(props) {
    super();
  }
  render(){
    return(
      <div>
          <div>{"我是列表"}</div>
          <div>{"我是内容"}</div>
      </div>
    )
  }
}

render(<Index /> ,document.getElementById('app'))
