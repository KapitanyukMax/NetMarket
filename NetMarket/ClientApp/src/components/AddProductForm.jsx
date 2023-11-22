import {useState} from 'react';

const AddProductForm=()=>{
    const [productName, setName] = useState('');
    const [productPrice, setPrice] = useState('');
    const [productDescription, setDescription] = useState('');
    const [productImgUrl, setImgUrl] = useState('');
    const [productCategory, setCategory] = useState('');

    const handleNameChange=(e)=>{
        setName(e.target.value);
    }
    const handlePriceChange=(e)=>{
        setPrice(e.target.value);
    }
    const handleDescriptionChange=(e)=>{
        setDescription(e.target.value);
    }
    const handleImgUrlChange=(e)=>{
        setImgUrl(e.target.value);
    }
    const handleCategoryChange=(e)=>{
        setCategory(e.target.value);
    }
    const handleSubmit=()=>{
        const product={
            Name: productName,
            Price: productPrice,
            Description: productDescription,
            ImgUrl: productImgUrl,
            Category: productCategory
        };


        console.log(product);
        //code for sending obj to server


        setName('');
        setPrice('');
        setDescription('');
        setImgUrl('');
        setCategory('');
    };
    return(
        <div>
            <h2>Enter data of your product : </h2>
            <form>
                <div className="add-product-form">
                <div>
                    <label htmlFor="productName">Name of product : </label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            value={productName}
                            onChange={handleNameChange}
                            required
                        />
                </div>
                <div>
                    <label htmlFor="productPrice"> Price of product : </label>
                    <input
                        type="text"
                        id="productPrice"
                        name="productPrice"
                        value={productPrice}
                        onChange={handlePriceChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="productDescription">Product description : </label>
                    <input
                        type="text"
                        id="productDescription"
                        name="productDesription"
                        value={productDescription}
                        onChange={handleDescriptionChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="productImgUrl">Url of image for product : </label>
                    <input
                        type="text"
                        id="productImgUrl"
                        name="productImgUrl"
                        value={productImgUrl}
                        onChange={handleImgUrlChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="productCategory">Category :</label>
                    <input
                        type="text"
                        id="productCategory"
                        name="productCategory"
                        value={productCategory}
                        onChange={handleCategoryChange}
                        required/>   
                </div>
                <button type="button" onClick={handleSubmit}>Confirm : </button>    
                </div>         
            </form>
        </div>
    )
}


export default AddProductForm;

