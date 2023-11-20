import React from 'react';
const OrderDetails = ({order})=>
{
    const {Id, Date, TotalPrice, User, Product} = order;
    return(
        <div>
            <h2>Order #{Id}</h2>
            <p>Date : {new Date(Date).toLocalString()}</p>
            <p>Total Price : ${TotalPrice}</p>
            <p>User : {User.UserName}</p>

            <h3>Product : </h3>
            <ul>
                {Product.map(product=>(
                    <li key={product.Id}>{product.Name} - ${product.Price}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default OrderDetails;