import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message:""
    };
  }

  handleMessageInput = (event) => {
    this.setState({
      message:event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(event) => this.handleMessageInput(event)} value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
