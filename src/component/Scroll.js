import React from 'react';

const Scroll = (props)=>{
  return(
    <div style={{overflowY:'scroll', border: '1px solid black', height:'800px'}}>
    {props.children}
    </div>
  );

};

export default Scroll;
// note we return an object in the style section
//css:overflow-y
//jsx: overflowY   ** you must camelcase for jsx

// you can add styles in JSX using the double curly brackets and the style
//attribute as in html
