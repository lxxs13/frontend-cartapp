import { useEffect, useReducer } from "react";
import { addProductCart, deleteProductCart, updateProductCart } from "../reducer/itemsActions";
import { itemsReducer } from "../reducer/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {
    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handlerAddProductCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id);

        if (hasItem) {
            dispatch({ type: updateProductCart, payload: product });
        } else {
            dispatch({ type: addProductCart, payload: product });
        }
    }

    const handlerDeleteProduct = (id) => {
        dispatch({ type: deleteProductCart, payload: id });
    }

    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProduct,
    }
}