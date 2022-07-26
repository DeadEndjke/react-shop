import s from "./Header.module.scss";
import { SvgSelector } from "./../../SvgSelector";
import { NavLink } from "react-router-dom";
import Menu from "./Burger/Menu/Menu";
import "./../../variables.scss";

const Header = ({ basketitemscount, basket }) => {
  const ActiveLink = {
    color: "#6E9C9F",
    fontWeight: "700",
  };

  const nonActiveLink = {
    color: "#000",
    fontWeight: "400",
  };

  return (
    <header className={s.header}>
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
      <div className={s.phoneandbasket}>
        {" "}
        <a href="tel:+74958235412">
          <div className={s.call}>
            <div className={s.phonelogo}>
              <SvgSelector id="phone" />
            </div>
            <div className={s.phonenumber}>+7 (495) 823-54-12</div>
          </div>
        </a>
        <NavLink to={"/basket"}>
          <div className={s.basket}>
            <SvgSelector id="basket" />
            {basketitemscount === 0 ? (
              <div></div>
            ) : (
              <span>{basketitemscount}</span>
            )}
          </div>
        </NavLink>
        <div className={s.openburger}>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
