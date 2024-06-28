import PropTypes from "prop-types";
import { ShopItem } from "../ShopItem";

export function ListView(props) {
  return (
    <div className="item_container">
      {props.items.map((item, index) => (
        <ShopItem
          key={index}
          name={item.name}
          color={item.color}
          img={item.img}
          price={item.price}
        />
      ))}
    </div>
  );
}

ListView.propTypes = {
  items: PropTypes.array,
};
