import React from "react";
import s from "./Offers.module.scss";
import { SvgSelector } from "./../../../../SvgSelector";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Offers = ({ executeScroll }) => {
  const [offer, setOffer] = useState(0);
  const [active, setActive] = useState(0);

  const OffersArray = [
    {
      id: 0,
      heading: "Новые поступления в этом сезоне",
      paragraph:
        "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.",
    },
    {
      id: 1,
      heading: "Что-то новенькое. Мы заждались тебя.",
      paragraph:
        "Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!",
    },
    {
      id: 2,
      heading: "Включай новый сезон с WOMAZING",
      paragraph:
        "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров",
    },
  ];

  return (
    <div className={s.offers}>
      <div className={s.heading}>{OffersArray[offer].heading}</div>

      <div className={s.offerscontainer}>
        <div className={s.paragraph}> {OffersArray[offer].paragraph}</div>
        <div className={s.buttons}>
          <button onClick={executeScroll} className={s.btndown}>
            <SvgSelector id="vector" />
          </button>
          <NavLink to={"/shop"}>
            <button className={s.btnopenshop}>Открыть магазин</button>
          </NavLink>
        </div>

        <div className={s.sliderbuttons}>
          <button
            onClick={(e) => {
              setOffer(0);
              setActive(0);
            }}
            className={active === 0 ? s.active : s.sliderbutton}
          ></button>
          <button
            onClick={(e) => {
              setOffer(1);
              setActive(1);
            }}
            className={active === 1 ? s.active : s.sliderbutton}
          ></button>
          <button
            onClick={(e) => {
              setOffer(2);
              setActive(2);
            }}
            className={active === 2 ? s.active : s.sliderbutton}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
