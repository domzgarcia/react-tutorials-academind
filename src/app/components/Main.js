import React from "react";

const style = {
    border: '1px dotted red',
    padding: '10px',
    margin: '5px'
};

export const Main = (props) => (
    <div style={style}>
        <div className="row">
            <div className="col-xs-12">
                <h1>The Main Page</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12">
                <button
                    className="btn btn-primary"
                    onClick={() => props.changeUsername()}>Change Name</button>
                &nbsp;
                <button
                    className="btn btn-warning"
                    onClick={() => props.changeAge()}>Change Age</button>
            </div>
        </div>
    </div>
);