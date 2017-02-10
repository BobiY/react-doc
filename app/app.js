import React,{ Component } from "react";
import { render } from "react-dom";
import List from "../component/list"

class Index extends Component{
  constructor(props) {
    super();
  }
  render(){
    return(
      <div>
          <List />
          <div>{"我是内容"}</div>
      </div>
    )
  }
}

render(<Index /> ,document.getElementById('app'))
