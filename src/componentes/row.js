import React,{Component} from "react";

class Row extends Component{
  constructor (props) {
    super(props);
    this.state = {
      text: "Row",
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

export default Row;