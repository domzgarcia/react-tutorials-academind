export function setName(name){
    // # SIMPLE WITHOUT MIDDLEWARE
    // return {
    //     type: "SET_AGE",
    //     payload: age
    // };

    // # REDUX-PROMISE-MIDDLEWARE
    return {
        type: "SET_NAME",
        payload: new Promise( (resolve, reject) => {
            setTimeout( () => { resolve(name) }, 1000);
        })
    }
};

export function setAge(age){
    // # REDUX THUNK
    return (dispatch) => {
        setTimeout( () => {
            dispatch({
                type: "SET_AGE",
                payload: age
            })
        }, 1000);
    };
};

