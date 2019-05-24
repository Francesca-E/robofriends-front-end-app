

import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../component/CardList'
import SearchBox from '../component/SearchBox';
import './App.css';
import Scroll from '../component/Scroll';
import {setSearchField, requestRobots} from '../actions'
import 'tachyons';
//import {searchRobots, requestRobots} from '../reducers';

// for anything that is not exported as export default we have to destructure it as with the robots
// if you are exporting more than one thing it would be written {robots, cats}
const mapStateToProps = state=>{
  return {
    searchField:state.searchRobots.searchField,
    robots:state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error:state.requestRobots.error
  }
}

//above=what piece of state i need to listen to and send down as props


const mapDispatchToProps =(dispatch)=>{
  return {
    onSearchChange:(event)=> dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots()(dispatch)
    }
}

// above = what props i need to listen to that need to get dispatched

class App extends Component{
componentDidMount(){
this.props.onRequestRobots()
}


// onSearchChange=(event)=>{
//   this.setState({searchfield:event.target.value})
// }
//always pass in an object to the set state method


//any time you make your own function use the arrow syntax in the above function
// this destructuring is so you can remove this.state from this.state.robots.filteredRobots
//  this.state.searchfield.toLowerCase and this.state.robots.length
  render(){
    const {searchField, onSearchChange, robots, isPending}= this.props;
    const filteredRobots =robots.filter(robot=>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })


  return isPending?
      <h1>Loading</h1> :
      (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
            <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
        );
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//connect runs and returns a function, when it does it returns
//another function with App as the parameter
// it passes the correct props to the app
