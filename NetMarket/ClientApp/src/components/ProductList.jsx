import React, {useState, useEffect} from 'react';
//import mssql from 'mssql';
const urlDb = "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=NetMarketDb;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False";

const ProductList=()=>
{
    // const[products, setProducts] = useState([]);

    // useEffect(()=>
    // {
    //     const fetchProducts = async()=>
    //     {
    //         try{
    //             const config = {
    //                 user : 'name',
    //                 password : 'pass',
    //                 server : urlDb,
    //                 database : 'NetMarketDb',
    //             };
    //             await mssql.connect(config);

    //             const result = await mssql.query('select * from products');

    //             await mssql.close();

    //             setProducts(result.recordset);
    //         }catch (error)
    //         {
    //             console.error('Error fetching products : ', error);
    //         }
    //     };
    //     fetchProducts();
    // },[]);
    return(
        <div>
            <h2>Product List</h2>
            {/* {products.length >0?
            (
            <ul>
                {products.map(product=>
                    (
                        <li key={product.Id}>
                            {product.Name} - ${product.Price}
                        </li>
                    ))}
            </ul>
            ):(
                <p>No products avaible</p>
            )} */}
        </div>
    );
};

export default ProductList;