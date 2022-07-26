import s from "./Related.module.scss";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Prices from "../../prices/Prices";

const Related = ({ related }) => {
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, price, img, old_price } = fetchedData;

  let api = `https://62d2427bd4eb6c69e7e89f5b.mockapi.io/womanzing/Womanzing/${related}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className={s.related}>
      <div className={s.relatedcard}>
        <NavLink to={`/shop/${related}`}>
          <img className={s.photo} src={img} alt="" />
        </NavLink>
        <div className={s.name}>{name}</div>
        <Prices price={price} old_price={old_price} context="collection" />
      </div>
    </div>
  );
};

export default Related;
