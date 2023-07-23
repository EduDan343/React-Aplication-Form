import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Card.module.css";

export const Card = ({ animal }) => {
  const { name, origin, temperament, reference_image_id } = animal;
  const [image, setImage] = useState("");
  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/${reference_image_id}`)
      .then((res) => res.json())
      .then((data) => setImage(data.url))
      .catch((err) => console.log(err));
  }, [reference_image_id]);

  console.log("Card props :", animal);

  return (
    <div className={style.card}>
      <img src={image} alt={name} height={"200px"} />
      <h4>Especie: {name}</h4>
      <p>Origen:{origin}</p>
      <p>Temperamento : {temperament}</p>
    </div>
  );
};

Card.propTypes = {
  animal: {
    name: PropTypes.string,
    origin: PropTypes.string,
    temperament: PropTypes.string,
    reference_image_id: PropTypes.string,
  },
};
