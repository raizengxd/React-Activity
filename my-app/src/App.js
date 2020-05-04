import React, { Component } from 'react';
import MyButtons from './layouts/Button';
import Answer from './layouts/Answer'



class App extends Component{
  state ={
    answer:''
  } 
  buttonPress = buttonName =>{
    if (buttonName==='='){
      this.calculate()
    }
    else if(buttonName==='C'){
      this.reset()
    }
    else if(buttonName==='CE'){
      this.backspace()
    }  
    else{
      
    this.setState({
      answer:this.state.answer + buttonName
    });
    }
  }     
  calculate =()=>{
    try{
    this.setState({
        answer:(eval(this.state.answer) || "") +""

    });}
    catch{
      this.setState({
        answer:"error"
      })
      
    }
  }
  backspace =()=>{
    this.setState({
        answer:this.state.answer.slice(0,-1)

    });
  }

  reset =()=>{
    this.setState({
        answer:""

    });
  }
  render(){
    return (
      <div className="App">
        <Answer answer={this.state.answer}/>
        <MyButtons buttonPress={this.buttonPress}/>
        <div>
          
        </div>
      </div>
    );
  }
}

export default App;