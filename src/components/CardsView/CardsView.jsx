import PropTypes from "prop-types";
import { ShopCard } from "../ShopCard/ShopCard";

export function CardsView(props) {
  return (
    <div className="card_container">
      {props.cards.map((card, index) => (
        <ShopCard
          key={index}
          name={card.name}
          color={card.color}
          price={card.price}
          img={card.img}
        />
      ))}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.array,
};
