import React from 'react';
const Advertisement = ({product})=>
{
    const{
        Name,
        Price,
        Discount,
        Rating,
        Description,
        ImageUrl,
        Status,
        Category,
    } = product;
    return(
        <div>
            <h2>{Name}</h2>
            <img src={ImageUrl} alt={Name}/>
            <p>Price : ${Price}</p>
            <p>Discount : ${Discount}</p>
            <p>Rating : ${Rating}</p>
            <p>Description : ${Description}</p>
            <p>Status : ${Status}</p>
            <p>Category : ${Category.Name}</p>
        </div>
    )
}

export default Advertisement;