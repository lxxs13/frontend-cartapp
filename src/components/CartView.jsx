import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";
import { useNavigate } from "react-router-dom";

export const CartView = ({ items, handlerDelete }) => {
    const [total, setTotal] = useState(0);
    const navegate = useNavigate();

    const onDeleteProduct = (id) => {
        handlerDelete(id);
    }

    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items]);

    const onCatalg = () => {
        navegate('/catalog');
    }

    return (
        <>
            <h3>Carro de compra</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map(item => (
                            <tr key={item.product.id}>
                                <td>{item.product.name}</td>
                                <td>{item.product.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.quantity * item.product.price}</td>
                                <td>
                                    <button className="btn btn-danger"
                                        onClick={() => onDeleteProduct(item.product.id)}>Eliminar</button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan={3} className="text-end fw-bold">Total</td>
                        <td colSpan={2} className="text-start">{total}</td>
                    </tr>
                </tfoot>
            </table>

            <button className="btn btn-success" onClick={onCatalg}>Seguir comprando</button>
        </>
    )
}

CartView.propTypes = {
    items: PropTypes.array,
    handlerDelete: PropTypes.func,
};
