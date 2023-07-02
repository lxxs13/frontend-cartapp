import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const ProductCardView = ({ id, name, description, price, handler }) => {
    const navegate = useNavigate();

    const onAddProduct = (product) => {
        handler(product);
        navegate('/cart');
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price} MXN</p>
                    <button type="button" className="btn btn-primary" onClick={() => onAddProduct({ id, name, description, price })}>Agregar</button>
                </div>
            </div>
        </>
    )
}

ProductCardView.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    handler: PropTypes.func
};
