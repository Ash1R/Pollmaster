import React, { Component } from 'react';

import PollResult from './PollResult';

const pollStyle = {
  container: {
    border: '2px solid blue',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '20px',
    borderRadius: '10px',
  },
  textStyle: {
    fontFamily: 'Arial',
    color: '#383F4C',
  },
};

class PollBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yesCount: 0,
      noCount: 0,
    };
  }

  addYes = () => {
    this.setState({
      yesCount: this.state.yesCount + 1,
    });
  };

  addNo = () => {
    this.setState({
      noCount: this.state.noCount + 1,
    });
  };
  render() {
    return (
      <div style={pollStyle.container}>
        <h1 style={pollStyle.textStyle}>Breakfast question</h1>
        <h3 style={pollStyle.textStyle}>Do we request Aaloo parantha today?</h3>
        <div>
          <PollResult name="Yes" value={this.state.yesCount} />
          <PollResult name="No" value={this.state.noCount} />
        </div>
        <button onClick={this.addYes}>Yes</button>
        <button onClick={this.addNo}>Nope</button>
      </div>
    );
  }
}

export default PollBox;
