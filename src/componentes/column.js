import React,{Component} from "react";

class Column extends Component{
  constructor (props) {
    super(props);
    this.state = {
      text: "Column",
    }
  }

  render () {
    return (
      <div class="row">
        {this.state.text}
      </div>
    );
  }
}

export default Column;