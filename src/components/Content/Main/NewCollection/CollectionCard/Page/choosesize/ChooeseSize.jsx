import s from "./ChooeseSize.module.scss";
import Size from "./Size/Size";
import { useEffect, useState } from "react";

const ChooeseSize = ({ size, updateSize }) => {
  const [activesize, setActivesize] = useState("");
  useEffect(() => updateSize(activesize));
  return (
    <div className={s.choosesize}>
      <div className={s.paragraph}>Выберите размер</div>
      <div className={s.size}>
        {size?.map((size) => (
          <button
            key={size.id}
            className={activesize === size.title ? s.active : s.button}
            onClick={() => {
              setActivesize(size.title);
              updateSize(activesize);
            }}
          >
            <Size size={size.title} key={size.id} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChooeseSize;
