import React from 'react';
 
import Title from './Title'; // we can drop the .js file extension
import './App.css';
const App = (props) => {
    return (
        <div>
            <Title text="white on blue" color="white" backgroundColor="blue" display="inline-block" width="300px" height="300px" />
            <Title text="blue on red" color="blue" backgroundColor="red"  display="inline-block" width="300px" height="300px"/>
            <Title text="green on pink" color="green" backgroundColor="pink" display="inline-block" width="300px" height="300px"/>
        </div>
    )
};
export default App;
