import React from 'react';

function FunctionalProps(props){
    return(
        <div>        <h3>This is a {props.name}</h3>
        <h4>Hello from {props.place}</h4></div>

    );
}

export default FunctionalProps;