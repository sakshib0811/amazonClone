import React from 'react'
import './Header.css'
import { MdSearch } from "react-icons/md";
import { MdShoppingBasket } from "react-icons/md";


function Header() {
  return (
    <div className='header'>
        <img
            className="header_logo" 
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            
        />

        <div className="header_search">
            <input 
                className="header_searchInput" type="text"/>
             <MdSearch className='header_searchIcon' />  
            
        </div>

        <div className='header_nav'>
            <div className='header_option'>
                <span
                className='header_optionLineOne'>
                    Hello Guest
                </span>
                <span
                className='header_optionLineTwo'>
                    Sign In
                </span>
            </div>

            <div className='header_option'>
                <span
                className='header_optionLineOne'>
                    Returns
                </span>
                <span
                className='header_optionLineTwo'>
                    & Orders
                </span>
            </div>

            <div className='header_option'>
                <span
                className='header_optionLineOne'>
                    Your
                </span>
                <span
                className='header_optionLineTwo'>
                    Prime
                </span>
            </div>
            <div className='header_optionBasket'>
                <MdShoppingBasket />
                <span className='header_optionLineTwo header_basketCount'>0</span>
            </div>

        </div>

    </div>
  )
}

export default Header