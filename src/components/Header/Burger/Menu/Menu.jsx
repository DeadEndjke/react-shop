import React, { useState, useRef } from "react";
import s from "./BurgerMenu.module.scss";
import Hamburger from "../Hamburger/Hamburger";
import { StyledMenu } from "./Menu.styled";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const node = useRef(null);
  const close = () => setOpen(false);

  return (
    <div className={s.burgermenu}>
      <div ref={node}>
        <StyledMenu open={open}>
          <div className={s.navlink}>
            <NavLink to={"/"} onClick={() => close()}>
              Главная
            </NavLink>
          </div>
          <div className={s.navlink}>
            <NavLink to={"/shop"} onClick={() => close()}>
              Магазин
            </NavLink>
          </div>
          <div className={s.navlink}>
            <NavLink to={"/about"} onClick={() => close()}>
              О бренде
            </NavLink>
          </div>
          <div className={s.navlink}>
            <NavLink to={"/contacts"} onClick={() => close()}>
              Контакты
            </NavLink>
          </div>
        </StyledMenu>
        <Hamburger open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Menu;
