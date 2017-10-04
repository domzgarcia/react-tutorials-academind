import React from "react";

const style = {
    border: '1px dotted green',
    padding: '10px',
    margin: '5px'
};

export const User = (props) => (
    <div style={style}>
        <div className="row">
            <div className="col-xs-12">
                <h1>The User Page</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12">
                <p>User Name: {props.name}</p>
                <p>User Age:  {props.age}</p>
            </div>
        </div>
    </div>
);