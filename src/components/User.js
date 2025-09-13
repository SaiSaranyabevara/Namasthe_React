import { useEffect, useState } from "react";

const User = (props) =>{
    const [count,setCount]=useState(0);
   useEffect(() =>
{
    console.log("called UE");
},[count]);

    return (
        <div className="userInfo">            
            <img className="user-logo" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_incoming&w=740&q=80"/>
            <p>Name :  {props.name}</p>
            <p>Location :SKLM</p>
            <p>contact : saranyabevara@gmail.com </p>
            <button onClick={() => {
                setCount(count+1)
            }} >count : {count}</button>
        </div>

    )
}

export default User;