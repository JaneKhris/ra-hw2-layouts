import PropTypes from "prop-types";

export function IconSwitch(props) {
  return (
    <div className="icon">
      <span className="material-icons" onClick={props.onSwitch}>
        {props.icon}
      </span>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
};
