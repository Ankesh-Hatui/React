import React from "react";
import Extra from './Extra';

function Card(props){
    return (
        <div>
            <h3>{props.name}</h3>
            <img src={props.url} alt="avtar" />
            <Extra {...props}/>
        </div>
    );
}

export default Card;