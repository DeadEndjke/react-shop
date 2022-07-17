import React from "react";
import s from "./Offers.module.scss";
import { SvgSelector } from "./../../../../SvgSelector";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Offers = () => {
  const [offer, setOffer] = useState(0);

  const OffersArray = [
    {
      heading: "Новые поступления в этом сезоне",
      paragraph:
        "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.",
    },
    {
      heading: "Что-то новенькое. Мы заждались тебя.",
      paragraph:
        "Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!",
    },
    {
      heading: "Включай новый сезон с WOMAZING",
      paragraph:
        "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров",
    },
  ];

  return (
    <div className={s.offers}>
      <div className={s.heading}>{OffersArray[offer].heading}</div>

      <div className={s.offerscontainer}>
        <div className={s.paragraph}>
          {" "}
          <p> {OffersArray[offer].paragraph}</p>
        </div>
        <div className={s.buttons}>
          <button className={s.btndown}>
            {" "}
            <SvgSelector id="vector" />{" "}
          </button>
          <NavLink to={"/shop"}>
            <button className={s.btnopenshop}>Открыть магазин</button>
          </NavLink>
        </div>

        <div className={s.sliderbuttons}>
          <button
            onClick={(e) => setOffer(0)}
            className={s.sliderbutton}
          ></button>
          <button
            onClick={(e) => setOffer(1)}
            className={s.sliderbutton}
          ></button>
          <button
            onClick={(e) => setOffer(2)}
            className={s.sliderbutton}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
