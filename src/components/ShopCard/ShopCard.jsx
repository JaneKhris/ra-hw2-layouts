import PropTypes from "prop-types";

export function ShopCard(props) {
  return (
    <div className="card">
      <div className="card_name"> {props.name}</div>
      <div className="card_color">{props.color}</div>
      <img src={props.img} alt="" className="card_img" />
      <div className="card_price">${props.price}</div>
      <button className="card_button">Add to cart</button>
    </div>
  );
}

ShopCard.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
};
