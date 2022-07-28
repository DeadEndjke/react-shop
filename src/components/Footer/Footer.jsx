import s from "./Footer.module.scss";
import { SvgSelector } from "./../../SvgSelector";
import { NavLink } from "react-router-dom";
import "./../../variables.scss";
import visamastercard from "./../../images/visamastercard.png";

export const Footer = () => {
  const ActiveLink = {
    color: "#6E9C9F",
    fontWeight: "700",
  };

  const nonActiveLink = {
    color: "#000",
    fontWeight: "400",
  };

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <NavLink to={"/"}>
          <div className={s.logowrapper}>
            <div className={s.logo}>
              <SvgSelector id="logo" />
            </div>
            <div className={s.title}>Womazing</div>
          </div>
        </NavLink>

        <div className={s.navbar}>
          <ul className={s.navlinks}>
            <NavLink
              className={s.navlink}
              style={({ isActive }) => (isActive ? ActiveLink : nonActiveLink)}
              to={"/"}
            >
              <li>Главная</li>
            </NavLink>
            <NavLink
              className={s.navlink}
              style={({ isActive }) => (isActive ? ActiveLink : nonActiveLink)}
              to={"/shop"}
            >
              <li>Магазин</li>
            </NavLink>
            <NavLink
              className={s.navlink}
              style={({ isActive }) => (isActive ? ActiveLink : nonActiveLink)}
              to={"/about"}
            >
              <li>О бренде</li>
            </NavLink>
            <NavLink
              className={s.navlink}
              style={({ isActive }) => (isActive ? ActiveLink : nonActiveLink)}
              to={"/contacts"}
            >
              <li>Контакты</li>
            </NavLink>
          </ul>
        </div>
        <a href="tel:+74958235412">
          <div className={s.call}>
            <div className={s.phonenumber}>+7 (495) 823-54-12</div>
          </div>
        </a>
      </div>
      <div className={s.containerbot}>
        <div className={s.policityprival}>
          <div className={s.paragraph}>© Все права защищены</div>
          <div className={s.paragraph}>Политика конфиденциальности</div>
          <div className={s.paragraph}>Публичная оферта</div>
        </div>
        <div className={s.linksandpay}>
          <div className={s.links}>
            <a href="https://www.instagram.com/womanzing" target="_blank">
              <div className={s.link}>
                <SvgSelector id="instagram" />
              </div>
            </a>
            <a href="https://www.facebook.com/womanzing" target="_blank">
              <div className={s.link}>
                <SvgSelector id="facebook" />
              </div>
            </a>
            <a href="https://www.twitter.com/womanzing" target="_blank">
              <div className={s.link}>
                <SvgSelector id="twitter" />
              </div>
            </a>
          </div>
          <div className={s.pay}>
            <img src={visamastercard} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
