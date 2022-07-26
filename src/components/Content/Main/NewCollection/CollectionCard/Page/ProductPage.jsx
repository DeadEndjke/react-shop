import s from "./ProductPage.module.scss";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import Prices from "./prices/Prices";
import ChooeseSize from "./choosesize/ChooeseSize";
import ChooeseColor from "./choosecolor/ChooeseColor";
import RelatedItems from "./relatedItems/RelatedItems";

const ProductPage = ({ updateBasketItems, itemId }) => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, price, old_price, img, size, color, related_products } =
    fetchedData;

  let api = `https://62d2427bd4eb6c69e7e89f5b.mockapi.io/womanzing/Womanzing/${id}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  const [colot, setColot] = useState("");
  function updateColor(e) {
    setColot(e);
  }
  const [siz, setSiz] = useState("");
  function updateSize(e) {
    setSiz(e);
  }

  return (
    <div className={s.productpage}>
      <div className={s.name}>{name}</div>

      <div className={s.path}>
        <NavLink to={"/"}>Главная</NavLink> -{" "}
        <NavLink to={"/shop"}>Магазин </NavLink> - <span>{name}</span>
      </div>

      <div className={s.product}>
        <div className={s.productimg}>
          <img src={img} alt="" />
        </div>

        <div className={s.right}>
          <Prices price={price} old_price={old_price} context="page" />
          <div className={s.sizeandcolor}>
            <ChooeseSize size={size} updateSize={updateSize} />
            <ChooeseColor color={color} updateColor={updateColor} />
          </div>

          <div className={s.buttons}>
            <button
              onClick={() =>
                updateBasketItems({
                  name,
                  price,
                  img,
                  siz,
                  colot,
                  itemId,
                  color,
                  size,
                })
              }
              className={s.btnopenshop}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
      <RelatedItems related_products={related_products} />
    </div>
  );
};

export default ProductPage;
