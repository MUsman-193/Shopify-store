import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import './product-card.css'

function ProductCard({ id, image, description, stars, price, currencyPrefix, discountPerc, }) {
    return (
        <div className="product_card">
            <div className="product_card_img">
                <img src={image} alt="" />
            </div>
            <div className="product_card_text">
                {description}
            </div>
            <div className="product_card_star">
                <ul>
                    {
                        new Array(5).fill("")
                            .map((el, index) => (
                                <li key={index} className={index < Number(stars) ? "fill" : "no-fill"}>
                                    <AiFillStar />
                                </li>
                            ))
                    }
                </ul>
            </div>
            <div className="product_card_price_tag">
                <div className='price'> {currencyPrefix} {price} </div>
                {
                    discountPerc &&
                    <div className="tag"> -{discountPerc}% OFF </div>
                }
            </div>
        </div>
    )
}

export default ProductCard