import React from 'react'
import Slider from './components/slider/Slider'
import Banners from './components/banners/banners'
import Product_card from './components/summer-sale/SummerSale'
import BestBrand from './components/bestBrand/BestBrand'
function Home() {
    return (
        <>
            <Slider/>
            <BestBrand/>
            <Banners/>
            <Product_card/>
        </>
    )
}

export default Home