import React from "react";
import {connect} from 'react-redux';
import { User } from '../components/User';
import { Main } from '../components/Main';
import {setName, setAge} from '../actions/userActions';

class App extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div className="container">
                <Main 
                    changeUsername={ () => this.props.setName("Cristina") } 
                    changeAge={ () => this.props.setAge(21) } 
                />
                <User name={this.props.user.name} age={this.props.user.age} />
            </div>
        );
    }
}

const mapStateToProps = ({user, math}) => {
    return {user, math};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        setAge: (age) => {
            dispatch(setAge(age));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);