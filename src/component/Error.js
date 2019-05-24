import React, {Component} from 'react';

class ErrorBoundry extends  Component{
  constructor(props){
    super(props);
      this.state={
        hasError:false
      }

  }
// note how we pass props to the constructor, look over the answers
//to the error boundry lesson
componentDidCatch(error, info){
  this.setState({hasError:true})
}

render(){
  if(this.state.hasError){
    return <h1>Oooops. Thats not good!</h1>
  }
  return this.props.children
}

}

export default ErrorBoundry;
