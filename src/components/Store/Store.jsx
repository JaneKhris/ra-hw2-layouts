import PropTypes from "prop-types";
import { Component } from "react";
import { IconSwitch } from "../IconSwitch";
import { CardsView } from "../CardsView";
import { ListView } from "../ListView";

export class Store extends Component {
  constructor(props) {
    super(props);
    this.products = props.products;
    this.state = { view: "view_module" };
  }

  getView(icon) {
    if (icon === "view_list") {
      return "view_module";
    } else {
      return "view_list";
    }
  }

  getDisplay(prop) {
    if (this.state.view === "view_module") {
      return (
        <>
          <CardsView cards={prop} />
        </>
      );
    } else {
      return (
        <>
          <ListView items={prop} />
        </>
      );
    }
  }

  render() {
    return (
      <div className="store-container">
        <IconSwitch
          icon={this.state.view}
          onSwitch={(event) => {
            console.log("change state here");
            this.setState({ view: this.getView(event.target.textContent) });
          }}
        />
        <div>{this.getDisplay(this.products)}</div>
      </div>
    );
  }
}

Store.propTypes = {
  products: PropTypes.array,
};
