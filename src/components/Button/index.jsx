import PropTypes from "prop-types";
import style from "./Button.module.css";

export const Button = (props) => {
  const {
    value,
    placeholder,
    width,
    color = "#42d08a",
    height = "65px",
  } = props;
  return (
    <input
      style={{ width: width, backgroundColor: color, height: height }}
      className={style.button}
      type="button"
      value={value}
      placeholder={placeholder}
    />
  );
};

Button.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
};
