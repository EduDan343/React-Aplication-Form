import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
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
  } = props;
  const navigate = useNavigate();

  //   const handleClick1 = () => {
  //     navigate(link);
  //   };

  return (
    <input
      style={{ width: width, backgroundColor: color, height: height }}
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
};
