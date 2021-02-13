import React from "react";
import PropTypes from "prop-types";
import { Badge } from "reactstrap";

const Product = ({ price, quantity, title, category, image }) => (
  <div>
    <Badge color="primary">{category}</Badge>
    <figure>
      <img src={image} alt={title} width="100" height="100" />
      <figcaption>
        <b>{title}</b>
      </figcaption>
    </figure>
    Price - RS {price}
    {quantity ? ` x ${quantity}` : null}
  </div>
);

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string
};

export default Product;
