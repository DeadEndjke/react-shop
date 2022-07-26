import s from "./ChooeseColor.module.scss";
import Color from "./Color/Color";
import { useEffect, useState } from "react";

const ChooeseColor = ({ color, updateColor }) => {
  const [activecolor, setActivecolor] = useState("");
  useEffect(() => updateColor(activecolor));
  return (
    <div className={s.color}>
      <div className={s.paragraph}>Выберите цвет</div>
      <div className={s.choosecolor}>
        {color?.map((color) => (
          <button
            key={color.id}
            style={{ backgroundColor: `${color.color}` }}
            onClick={() => {
              setActivecolor(color.color);
              updateColor(activecolor);
            }}
            className={activecolor === color.color ? s.active : s.button}
          >
            <Color key={color.id} color={color.color} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChooeseColor;
