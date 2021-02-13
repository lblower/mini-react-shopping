import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart, getAllProducts } from "../actions";
import { getVisibleProducts, productsLoaded } from "../reducers/products";
import ProductItem from "../components/ProductItem";
import ProductsList from "../components/ProductsList";

const ProductsContainer = ({ products, addToCart, loading }) => {
  useEffect(() => {
    getAllProducts();
  });
  if (loading) {
    return "Loading....";
  }
  return (
    <ProductsList title="Products">
      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-sm-12 col-md-4 col-lg-4 col-xl-3"
          >
            <ProductItem
              key={product.id}
              product={product}
              onAddToCartClicked={() => addToCart(product.id)}
            />
          </div>
        ))}
      </div>
    </ProductsList>
  );
};

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      category: PropTypes.string
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state.products),
  loading: productsLoaded(state.products)
});

export default connect(mapStateToProps, { addToCart, getAllProducts })(
  ProductsContainer
);
