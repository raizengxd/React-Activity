import React, { Component } from 'react';
class Answer extends Component{
  render(){
      return(
      <div className="answer_result">{this.props.answer}</div>      
      );
  }
}

export default Answer;
