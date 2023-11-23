import React from 'react';
const User = ({user})=>
{
    const{
        UserName,
        DateOfBirth,
        Email,
        PhoneNumber,

    } = user;
    return(
        <div>
            <h2>{UserName}</h2>
            <p>User name : {UserName}</p>
            <p>Date of birth : ${DateOfBirth}</p>
            <p>Email : {Email}</p>
            <p>Phone number : {PhoneNumber}</p>
        </div>
    )
}

export default User;