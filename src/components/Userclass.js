import React from "react"


class Userclass extends React.Component{
    constructor(props){
        super(props);

    }
    render() {
        return(
             <div className="userInfo">            
            <img className="user-logo" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_incoming&w=740&q=80"/>
            <p>Name :  {this.props.name} </p>
            <p>Location : {this.props.location} </p>
            <p>contact : saranyabevara@gmail.com </p>
        </div>
        )
    }
}

export default Userclass;