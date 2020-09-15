import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
           <img className='home_images'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
                alt=""/>
           {/*Product id title price rating image */}
            <div className="home_row">
                <Product
                    id="1234567001"
                    title=" Do It Today: Overcome Procrastination, Improve Productivity, and Achieve More Meaningful Things Kindle Edition "
                    price={400}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41-G7AIOZyL.jpg">
                </Product>
                <Product
                    id="1234567002"
                    title=" SAF 6 MM MDF Peacock Designer Self Hanging Adhesive Digital Reprint 15 inch x 18 inch Painting SANFJ94"
                    price={199}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71bGRyTRRjL._SX679_.jpg">
                </Product>
                <Product
                    id="1234567003"
                    title=" OPPO A5 2020 (Dazzling White, 3GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={10990}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71wPwmxo2NL._SX679_.jpg">
                </Product>
            </div>
            <div className="home_row">
                <Product
                    id="1234567004"
                    title=" SAF Preety Flower and Leaf in Cone Pot 3 Piece of Hexagon UV Textured Multi-Effect Self adheshive Painting 17 Inch X 17 Inch SANFHX141 "
                    price={199}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41Zq4-LHbpL.jpg">
                </Product>
                <Product
                    id="1234567005"
                    title=" Baybee Damned GS-800 Battery Operated Sports Bike | Single Motor Ride On Bike with 20 Kg Weight Capacity -- Green "
                    price={4999}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71RkkZ-Ui3L._SX679_.jpg">
                </Product>
                
            </div>
            <div className="home_row">
                <Product
                    id="1234567006"
                    title="Skyworth 101.6 cm (40 inch) 40A2A11A HD Ready LED Standard TV"
                    price={16000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41jFRTLBFYL.jpg">
                </Product>
            </div>  
                  
        </div>
    )
}

export default Home
