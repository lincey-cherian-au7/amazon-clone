import React from 'react';
import './Product.css';

function Product({id,title,image,price,rating}) {
    return (
        <div className='product_box'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <p>&#11088;</p>
                        ))
                    }
                </div>
            </div>
            <img className='product_image' src={image} alt=""/>
            <button className='product_button'>Add to Basket</button>
           
        </div>
    )
}

export default Product
