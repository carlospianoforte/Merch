import React from 'react'
import '../styles/components/Checkout.scss'

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
          <button type='button'>Eliminar</button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <button type='button'>Comprar</button>
      </div>
    </div>
  )
}

export default Checkout