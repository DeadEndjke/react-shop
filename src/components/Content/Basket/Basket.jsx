import s from "./Basket.module.scss";
import BasketItem from "./BasketItem/BasketItem";
import { NavLink } from "react-router-dom";
import BasketForm from "./BasketForm/BasketForm";

const Basket = ({ basketitemscount, clearBasket, basketitems }) => {
  let word = "";
  return (
    <div className={s.basket}>
      <div className={s.heading}>Корзина</div>
      <div className={s.path}>
        <NavLink to={"/"}>Главная</NavLink> -{" "}
        <NavLink to={"/basket"}>
          <span> Корзина</span>
        </NavLink>
      </div>
      {10 < basketitemscount && basketitemscount < 20
        ? (word = "вещей")
        : (() => {
            switch (basketitemscount % 10) {
              case 1:
                {
                  word = "вещь";
                }
                break;
              case 2:
              case 3:
              case 4:
                {
                  word = "вещи";
                }
                break;

              default:
                word = "вещей";
                break;
            }
          })()}
      {basketitemscount !== 0 ? (
        <div className={s.value}>
          У вас в корзине {basketitemscount} {word} , но это не мешает вам{" "}
          <NavLink className={s.shoplink} to={"/shop"}>
            выбрать
          </NavLink>{" "}
          что-нибудь ещё
        </div>
      ) : (
        <div className={s.value}>
          В корзине пусто :( пора что-нибудь{" "}
          <NavLink className={s.shoplink} to={"/shop"}>
            выбрать
          </NavLink>
        </div>
      )}

      {basketitems?.map((basketitem) => (
        <BasketItem
          key={basketitem.itemId}
          img={basketitem.img}
          name={basketitem.name}
          price={basketitem.price}
          size={basketitem.siz}
          color={basketitem.colot}
          choosesize={basketitem.size}
          choosecolor={basketitem.color}
        />
      ))}
      {basketitemscount > 0 ? <BasketForm clearBasket={clearBasket} /> : ""}
    </div>
  );
};

export default Basket;
