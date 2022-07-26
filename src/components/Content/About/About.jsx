import s from "./About.module.scss";
import { NavLink } from "react-router-dom";
import about1 from "./../../../images/about1.png";
import about2 from "./../../../images/about2.png";

const Basket = () => {
  return (
    <div className={s.about}>
      <div className={s.heading}>О бренде</div>
      <div className={s.path}>
        <NavLink to={"/"}>Главная</NavLink> -{" "}
        <NavLink to={"/about"}>
          <span> О бренде</span>
        </NavLink>
      </div>
      <div className={s.wrapper}>
        <div className={s.imgfirst}>
          <img src={about1} alt="" />
        </div>
        <div className={s.textwrapper}>
          <div className={s.aboutheading}>Идея и женщина</div>
          <div className={s.aboutparagraph}>
            Womazing была основана в 2010-ом и стала одной из самых успешных
            компаний нашей страны. Как и многие итальянские фирмы, Womazing
            остаётся семейной компанией, хотя ни один из членов семьи не
            является модельером.
          </div>
          <div className={s.aboutparagraph}>
            {" "}
            Мы действуем по успешной формуле, прибегая к услугам известных
            модельеров для создания своих коллекций. Этот метод был описан
            критиком моды Колином Макдауэллом как форма дизайнерского
            со-творчества, характерная для ряда итальянских prêt-a-porter
            компаний.
          </div>
        </div>
      </div>
      <div className={s.wrapper}>
        <div className={s.imgsecondvisible}>
          <img src={about2} alt="" />
        </div>
        <div className={s.textwrapper}>
          <div className={s.aboutheading}>Магия в деталях</div>
          <div className={s.aboutparagraph}>
            Первый магазин Womazing был открыт в маленьком городке на севере
            страны в 2010-ом году. Первая коллекция состояла из двух пальто и
            костюма, которые были копиями парижских моделей.
          </div>
          <div className={s.aboutparagraph}>
            {" "}
            Несмотря на то, что по образованию основательница была адвокатом, ее
            семья всегда была тесно связана с шитьём (прабабушка основательницы
            шила одежду для женщин, а мать основала профессиональную школу кроя
            и шитья). Стремление производить одежду для масс несло в себе
            большие перспективы, особенно в то время, когда высокая мода
            по-прежнему доминировала, а рынка качественного prêt-a-porter
            попросту не существовало.
          </div>
        </div>
        <div className={s.imgsecond}>
          <img src={about2} alt="" />
        </div>
      </div>
      <div className={s.openshopbtn}>
        <NavLink to={"/shop"}>
          <button>Открыть магазин</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Basket;
