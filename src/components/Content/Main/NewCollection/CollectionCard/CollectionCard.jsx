import { SvgSelector } from "../../../../../SvgSelector";
import s from "./CollectionCard.module.scss";
import { NavLink } from "react-router-dom";
import Prices from "./Page/prices/Prices";

const CollectionCard = ({
  name,
  price,
  old_price,
  img,
  size,
  color,
  id,
  related_products,
}) => {
  return (
    <div className={s.collectioncard}>
      <NavLink to={`/shop/${id}`}>
        <div className={s.image}>
          <img src={img} alt=""></img>
          <div className={s.openproduct}>
            <SvgSelector id="openproduct" />
          </div>
        </div>
      </NavLink>

      <div className={s.name}>{name}</div>
      <Prices old_price={old_price} price={price} context="collection" />
    </div>
  );
};

export default CollectionCard;
