import React from 'react';
import Card from './Card';


const CardList=({robots})=> {
return(
  <div>
    {robots.map((user, i)=>{
        return(
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
            );
         })
       }

</div>
);
}


export default CardList;
//key=i this is the unique key we need to give it so that the dom knows
//if an element has been deleted from the DOM and can remove it wo changing
//everything.  Its needed whenever you do a  loop
