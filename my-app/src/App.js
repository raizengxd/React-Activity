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
    else{
      
    this.setState({
      answer:this.state.answer + buttonName
    });
    }
  }     
  calculate =()=>{
    this.setState({
        result:eval(this.state.answer)

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