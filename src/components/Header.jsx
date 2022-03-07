import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Header.scss'


const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  const reducer = (accumulator, currentValue) => accumulator + currentValue.qty;
  const totalQty = cart.reduce(reducer, 0);


  return (
    <div className='Header'>
      <Link to='/'>
        <h1 className='Header-title'>Merch</h1> 
      </Link>
        <div className="Header-checkout">
          <Link to='checkout/'>
          
            <i className='fas fa-shopping-basket'></i>
          </Link>
          <div className='Header-alert'>{totalQty}</div>
        </div>
    </div>
  )
}

export default Header