import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="card" style={{ marginBottom: 20 }}>
    <div className="card-body">
      <Product
        title={product.title}
        price={product.price}
        quantity={product.inventory}
        category={product.category}
        image={product.image}
      />
    </div>
    <div className="card-footer">
      <Button
        onClick={onAddToCartClicked}
        color={product.inventory > 0 ? "secondary" : "warning"}
        disabled={!(product.inventory > 0)}
      >
        {product.inventory > 0 ? "Add to cart" : "Sold Out"}
      </Button>
      <Button className="ml-5" color="primary">
        <Link className="text-white" to={`/products/${product.id}`}>
          Details
        </Link>
      </Button>
    </div>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    category: PropTypes.string,
    image: PropTypes.string
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
};

export default ProductItem;
