import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Checkout.scss'

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = product => () => {
    removeFromCart(product)
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => 
      accumulator + (currentValue.price * currentValue.qty);
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 
        ?  <> 
        <h3>Lista de pedidos</h3>
        {cart.map(item => (
          <div key={item.id} className="Checkout-item">
            <img  src={item.image} alt="" />
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>Cant.{item.qty}</span>
              <span>${item.price}</span>
              <span>Total: $ {item.price * item.qty}</span>
            </div>
            <button type='button' onClick={handleRemove(item)}>
              <i className='fas fa-trash-alt'></i>
            </button>
          </div>
        ))}
        </>
        : <h3>No hay articulos en el carrito</h3>}

      </div>
      {cart.length > 0 &&(
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: ${handleSumTotal()}`}</h3>
          <Link to='/checkout/information'>
          <button type='button'>Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Checkout