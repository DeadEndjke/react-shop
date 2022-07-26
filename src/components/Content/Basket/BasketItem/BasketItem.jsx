import ChooeseColor from "../../Main/NewCollection/CollectionCard/Page/choosecolor/ChooeseColor";
import Color from "../../Main/NewCollection/CollectionCard/Page/choosecolor/Color/Color";
import Size from "../../Main/NewCollection/CollectionCard/Page/choosesize/Size/Size";
import s from "./BasketItem.module.scss";
import { useState } from "react";

const BasketItem = ({
  img,
  name,
  price,
  size,
  color,
  choosecolor,
  choosesize,
}) => {
  const [activecolor, setActivecolor] = useState("");
  const [colot, setColot] = useState("");

  const [activesize, setActivesize] = useState("");
  const [siz, setSiz] = useState("");

  function updateColor(e) {
    setColot(e);
  }
  function updateSize(e) {
    setSiz(e);
  }
  return (
    <div className={s.basketitem}>
      <div className={s.imgandname}>
        <img src={img} />
        <div className={s.name}>{name}</div>
      </div>
      {size ? (
        <div className={s.size}>{size}</div>
      ) : (
        <div className={choosesize}>
          <div className={s.choose}>choose size</div>
          <div className={s.size}>
            {choosesize?.map((choosesize) => (
              <button
                key={choosesize.id}
                onClick={() => {
                  setActivesize(choosesize.title);
                  updateSize(activesize);
                }}
                className={
                  activesize === choosesize.title ? s.active : s.button
                }
              >
                {choosesize.title}
              </button>
            ))}
          </div>
        </div>
      )}
      {color ? (
        <div className={s.color}>
          <button style={{ backgroundColor: `${color}` }}></button>
        </div>
      ) : (
        <div className={choosecolor}>
          <div className={s.choose}>choose color</div>
          <div className={s.color}>
            {choosecolor?.map((choosecolor) => (
              <button
                key={choosecolor.id}
                className={
                  activecolor === choosecolor.color ? s.active : s.button
                }
                style={{ backgroundColor: `${choosecolor.color}` }}
                onClick={() => {
                  setActivecolor(choosecolor.color);
                  updateColor(activecolor);
                }}
              ></button>
            ))}
          </div>
        </div>
      )}

      <div className={s.price}>{price}</div>
    </div>
  );
};

export default BasketItem;
