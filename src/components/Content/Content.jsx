import s from "./Content.module.scss";
import { Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Shop from "./Shop/Shop";
import Basket from "./Basket/Basket";
import ProductPage from "./../Content/Main/NewCollection/CollectionCard/Page/ProductPage";

const Content = ({
  updateBasketItems,
  basketitems,
  basketitemscount,
  itemId,
  clearBasket,
}) => {
  return (
    <div className={s.content}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/basket"
          element={
            <Basket
              clearBasket={clearBasket}
              basketitems={basketitems}
              basketitemscount={basketitemscount}
              itemId={itemId}
            />
          }
        />
        <Route
          path="/shop/:id"
          element={
            <ProductPage
              updateBasketItems={updateBasketItems}
              itemId={itemId}
            />
          }
        />
        {/* <Route
          path="/instagram"
          component={() => {
            window.location.href = "https://www.instagram.com/womanzing";
          }}
        />
        <Route
          path="/facebook"
          component={() => {
            window.location.href = "https://www.facebook.com/womanzing";
          }}
        />
        <Route
          path="/twitter"
          component={() => {
            window.location.href = "https://www.twitter.com/womanzing";
          }}
        /> */}
      </Routes>
    </div>
  );
};

export default Content;
