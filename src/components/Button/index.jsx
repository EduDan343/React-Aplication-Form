import PropTypes from "prop-types";
import style from "./Button.module.css";

export const Button = (props) => {
  const {
    value,
    placeholder,
    width,
    color = "#42d08a",
    height = "65px",
    link = "/",
    handleClick = () => console.log("click link :", link),
    customStyle,
  } = props;

  return (
    <input
      style={{
        ...{
          width: width,
          backgroundColor: color,
          height: height,
        },
        ...customStyle,
      }}
      className={style.button}
      type="button"
      value={value}
      placeholder={placeholder}
      onClick={handleClick}
    />
  );
};

Button.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  link: PropTypes.string,
  handleClick: PropTypes.func,
  customStyle: PropTypes.object,
};
