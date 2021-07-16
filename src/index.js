import React from 'react';
import ReactDOM from 'react-dom';

class HelloUser extends React.Component{
    render(){
        return(
            <h1>Hello User react</h1>
        )
    }
}

ReactDOM.render(
    <HelloUser/>,
    document.getElementById("root")
);