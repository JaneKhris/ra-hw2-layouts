import PropTypes from "prop-types";

export function ShopItem(props) {
  return (
    <div className="item">
      <img src={props.img} alt="" className="item_img" />
      <div className="item_name">{props.name}</div>
      <div className="item_color">{props.color}</div>
      <div className="item_price">${props.price}</div>
      <button className="item_button">Add to cart</button>
    </div>
  );
}

ShopItem.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
};
