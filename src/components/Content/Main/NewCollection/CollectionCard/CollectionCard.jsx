import { SvgSelector } from "../../../../../SvgSelector";
import s from "./CollectionCard.module.scss";

const CollectionCard = ({ name, price, old_price, img, size, color, id }) => {
  return (
    <div className={s.collectioncard}>
      <div className={s.image}>
        <img src={img} alt=""></img>
        <div className={s.openproduct}>
          <SvgSelector id="openproduct" />
        </div>
      </div>

      <div className={s.name}>{name}</div>
      <div className={s.prices}>
        <div className={s.oldprice}>{old_price}</div>
        <div className={s.price}>{price}</div>
      </div>
    </div>
  );
};

export default CollectionCard;
