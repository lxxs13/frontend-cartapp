import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";
import PropTypes from "prop-types";

export const CatalogView = ({handler}) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const findAll = async() => {
        const prods = await getProducts();
        setProducts(prods);
        setIsLoading(false);
    }

    useEffect(
        () => {
            findAll();
        }, []);

    return (
        <>
            {
                isLoading && <div className="alert alert-info">Cargando...</div>
            }
            
            <div className="row">
                {
                    products.map(prod => (
                        <div className="col-4 my-2" key={prod.id}>
                            <ProductCardView
                                id={prod.id}
                                name={prod.name}
                                description={prod.description}
                                price={prod.price} 
                                handler={handler}/>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

CatalogView.propTypes = {
    handler: PropTypes.func
};
