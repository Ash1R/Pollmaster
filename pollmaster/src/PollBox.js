import React, { Component } from 'react';
import db from './fireb'
import PollResult from './PollResult';
import PollButton from './PollButton';


const pollStyle = {
  container: {
    border: 'solid',
    borderColor: 'blue',
    borderWidth: '2px',
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
      heading: '',
      questions: ''
    }
  }

  componentDidMount() {
    this.unsub = db.collection("pollz").doc("breakfastquestion")
    .onSnapshot((doc) => {
        let result = doc.data()
        this.setState({
          yesCount: result.yescount,
          noCount: result.nocount,
          heading: result.heading,
          question: result.question
        })
      })
  }

  componentWillUnmount() {
    this.unsub()
  }

  addYes = () => {
    let newCount = this.state.yesCount + 1
    this.setState({
      yesCount: newCount,
    });
    db.collection("pollz").doc('breakfastquestion').update({
      yescount: newCount
    })
  };

  addNo = () => {
    
    let newCount = this.state.noCount + 1
    this.setState({
      noCount: newCount,
    });
    db.collection("pollz").doc('breakfastquestion').update({
      nocount: newCount
    })
  };
  render() {
    return (
      <div style={pollStyle.container}>
        <h1 style={pollStyle.textStyle}>{this.state.heading}</h1>
        <h3 style={pollStyle.textStyle}>{this.state.question}</h3>
        <div>
          <PollResult name="Yes" value={this.state.yesCount} />
          <PollResult name="No" value={this.state.noCount} />
        </div>
        <PollButton 
          func={this.addYes}
          name="Yes"
          color='#4CAF50'
        />
        <PollButton 
          func={this.addNo}
          name="No"
          color='red'
        />
      </div>
    );
  }
}

export default PollBox;
