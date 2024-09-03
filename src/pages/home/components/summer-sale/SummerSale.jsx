import React, { useEffect, useState } from 'react'
import './product_card.css'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import ProductCard from '../../../../components/product-card/ProductCard'

function SummerSale() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getSummarSale();
  }, []);


  async function getSummarSale() {
    fetch("/data.json")
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
      .catch(err => { })
  }
  return (
    <>
      <div className="season_tag_container">
        <div className="season_tag"> Summer Sale </div>
        <div className="product_view">
          <div className="text">View More</div>
          <div className="arrow"> <BsArrowRightCircleFill /> </div>
        </div>
      </div>
      <section className="product_card_container">
        {
          data.map((el, index) => (
            <ProductCard
              key={index}
              id={el.id}
              image={el.image}
              description={el.description}
              stars={el.stars}
              price={el.price}
              currencyPrefix={el.currencyPrefix}
              discountPerc={el.discountPerc}
            />
          ))
        }
      </section>
    </>
  )
}

export default SummerSale;