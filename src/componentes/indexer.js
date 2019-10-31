import React,{Component} from "react";

class Indexer extends Component{
  constructor (props) {
    super(props);
    this.state = {
      text: "Indexer",
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

export default Indexer;