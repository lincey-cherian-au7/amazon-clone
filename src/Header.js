import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
    return (
        <nav className='header'>
            {/*logo on the left */}
            <Link to='/'>
                <img className='header_logo' 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="">
                </img>
            </Link>

            {/* search box*/}
            <div className='header_search'>
                <input type='text'className='header_searchInput'/>
                <SearchIcon className='header_searchIcon'/>
            </div>

            {/* 3 links */}
            <div className='header_nav'>
                {/*1st link (href refresh page link doesnot)*/}
                <Link to='/login' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_line1'>Hello Lins</span>
                        <span className='header_option_line2'>Sign In</span>
                    </div>
                </Link>
                {/*2nd link */}
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_line1'>Returns</span>
                        <span className='header_option_line2'>& Orders</span>
                    </div>
                </Link>
                {/*3rd link */}
                <Link to='/' className='header_link'>
                    <div className='header_option'>
                        <span className='header_option_line1'>Your</span>
                        <span className='header_option_line2'>Prime</span>
                    </div>
                </Link>
            </div>

            {/* basket icon with number*/}
            <Link to='/checkout' className='header_link'>
                <div className='header_optionBasket'>
                    {/*Shopping Basket */}
                    <ShoppingBasketIcon/>
                    {/*Number */}
                    <span>0</span>

                </div>
            </Link>

        </nav>
    )
}

export default Header
