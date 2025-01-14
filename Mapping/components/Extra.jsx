import React from "react";

function Extra(props){
    return (
        <div className="extra">
            <p>{props.id}</p>
            <h4>{props.ph}</h4>
            <h4>{props.email}</h4>
        </div>
    );
}

export default Extra;