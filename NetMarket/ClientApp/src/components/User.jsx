import React from 'react';
const User = ({user})=>
{
    const{
        UserName,
        DateOfBirth
    } = user;
    return(
        <div>
            <h2>{UserName}</h2>
            <p>Date of birth : ${DateOfBirth}</p>
        </div>
    )
}

export default User;