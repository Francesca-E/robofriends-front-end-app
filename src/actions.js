import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
}
from './constants.js';


export const setSearchField=(text)=>({
  type:CHANGE_SEARCH_FIELD,
  payload:text
})

// has an input of text from the user, returns an object that has type and payload
//note putting the () allows us to avoid the return statement
// payload is a common identifier to symbolise whatever info we want to send over to the reducer
//in this case it is the text tge user enters


//below is a higher order function, a function that creates a function
// thunk provides the second layer function to the dispatch function
 export const requestRobots=()=>(dispatch)=>{
   dispatch({type:REQUEST_ROBOTS_PENDING});
   fetch ('https://jsonplaceholder.typicode.com/users')
   .then(response=>response.json())
   .then(data=>dispatch({type:REQUEST_ROBOTS_SUCCESS, payload:data}))
   .catch(error=> dispatch({type:REQUEST_ROBOTS_FAILED, payload:error}))
 }
