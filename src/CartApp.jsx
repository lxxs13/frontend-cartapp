import { useItemsCart } from "./hooks/useItemsCart"
import { Navbar } from "./components/NavBar";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
    const { cartItems, handlerAddProductCart, handlerDeleteProduct } = useItemsCart();

    return (
        <>
            <Navbar />
            <div className="container my-4">
                <CartRoutes
                    cartItems={cartItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProduct={handlerDeleteProduct} />
            </div>
        </>
    )
}