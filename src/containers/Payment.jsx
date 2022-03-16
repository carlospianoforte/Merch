import React, { useContext} from 'react'
import { PayPalButton } from 'react-paypal-button'
import AppContext from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import '../styles/components/Payment.scss'


const Payment = ({history}) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId: 'ARht14WLDjrMIDw4K1Qn8vD_ZDg35GKMMZ5Scc0mywtyWgUAj7pkEeWK1ijcXlp-_UOGRFvQzDA1fieJ',
    intent: 'capture',
    currency: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => 
      accumulator + (currentValue.price * currentValue.qty);
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  const navigate = useNavigate();

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      }
      addNewOrder(newOrder,
      navigate('/checkout/success'));

    }
  }



  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>

        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>
                {''}
                ${item.price * item.qty}
              </span>
            </div>
          </div>
        ))}
        <div>
        <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
        </div>
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Payment started')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  )
}

export default Payment