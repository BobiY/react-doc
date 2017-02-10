import React ,{ Component } from "react";
import "./list.css";

export default class List extends Component {
  constructor(props) {
    super();
  }
  render(){
    return (
      <div className = "list">
        {"我是列表"}
      </div>
    )
  }
}
