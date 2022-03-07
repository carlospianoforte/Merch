import { useState} from 'react'
import initialState from '../initialState';

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    
    const addToCart = payload => {
        const cartList = state.cart
        let newCartList = cartList

        const index = cartList.findIndex(item => item.id === payload.id);

        if (index >= 0) {
            newCartList[index] = {
                ...newCartList[index],
                qty: newCartList[index].qty + 1
            }
        }else {
            payload.qty = 1
            newCartList = [...cartList, payload]
        }

        setState({
            ...state,
            cart: newCartList
        });
    };

    const removeFromCart = payload => {
        const cartList = state.cart
        let newCartList = cartList

        const index = cartList.findIndex(item => item.id === payload.id);
        newCartList[index] = {
            ...newCartList[index],
            qty: newCartList[index].qty - 1
        }

        const updatedCartList = newCartList.filter(item => item.qty > 0)

        setState({
            ...state,
            cart: updatedCartList,
        })
    };

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        });
    };

    return {
        state,
        addToCart,
        removeFromCart,
        addToBuyer,
    };


    
}

export default useInitialState