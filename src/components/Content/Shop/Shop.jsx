import s from "./Shop.module.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import CollectionCard from "./../Main/NewCollection/CollectionCard/CollectionCard";
import axios from "axios";
import React from "react";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [ctg, setCtg] = useState("");

  let url = `https://62d2427bd4eb6c69e7e89f5b.mockapi.io/womanzing/Womanzing`;
  useEffect(() => {
    axios.get(url + `?categories=${ctg}`).then(({ data }) => {
      setProduct(data);
    });
  }, [ctg]);

  const categories = [
    {
      id: 1,
      title: "Все",
      ctg: "",
    },
    {
      id: 2,
      title: "Пальто",
      ctg: "coat",
    },
    {
      id: 3,
      title: "Свитшоты",
      ctg: "sweetshot",
    },
    {
      id: 4,
      title: "Купальники",
      ctg: "swimsuit",
    },
    {
      id: 5,
      title: "Футболки",
      ctg: "T-shirt",
    },
  ];

  const [active, setActive] = useState("");

  return (
    <div className={s.shop}>
      <div className={s.heading}>Магазин</div>
      <div className={s.path}>
        <NavLink to={"/"}>Главная</NavLink> -{" "}
        <NavLink to={"/shop"}>
          <span> Магазин</span>
        </NavLink>
      </div>
      <div className={s.categories}>
        {categories?.map((categories) => (
          <button
            key={categories.id}
            className={active === categories.id ? s.active : s.button}
            onClick={() => {
              setCtg(categories.ctg);
              setActive(categories.id);
            }}
          >
            {categories.title}
          </button>
        ))}
      </div>
      <div className={s.cards}>
        {product.map((collectioncard) => (
          <CollectionCard
            key={collectioncard.id}
            id={collectioncard.id}
            img={collectioncard.img}
            price={collectioncard.price}
            old_price={collectioncard.old_price}
            size={collectioncard.size}
            color={collectioncard.color}
            name={collectioncard.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
