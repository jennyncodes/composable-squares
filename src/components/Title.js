import React from 'react';

const Title = (props) => {
    return <h1 style ={{
        color:props.color, 
        backgroundColor:props.backgroundColor, 
        display:props.display,
        width: props.width, 
        height: props.height,
        }}> {props.text}</h1>;
    

};
export default Title;
