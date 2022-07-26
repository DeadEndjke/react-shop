import s from "./NewCollection.module.scss";
import CollectionCard from "./CollectionCard/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const NewCollection = ({ myRef }) => {
  const [collectioncard, setCollectioncard] = useState([]);
  let url = `https://62d2427bd4eb6c69e7e89f5b.mockapi.io/womanzing/Womanzing`;
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setCollectioncard(data);
    });
  }, []);

  return (
    <div ref={myRef} className={s.newcollection}>
      <div className={s.heading}>Новая коллекция</div>

      <div className={s.cards}>
        {collectioncard.map((collectioncard) => (
          <CollectionCard
            key={collectioncard.id}
            id={collectioncard.id}
            img={collectioncard.img}
            price={collectioncard.price}
            old_price={collectioncard.old_price}
            size={collectioncard.size}
            color={collectioncard.color}
            name={collectioncard.name}
            related_products={collectioncard.related_products}
          />
        ))}
      </div>
      <div className={s.openshopbtn}>
        {" "}
        <NavLink to={"/shop"}>
          <button>Открыть магазин</button>
        </NavLink>
      </div>
    </div>
  );
};
export default NewCollection;
