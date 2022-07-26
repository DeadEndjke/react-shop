import s from "./Prices.module.scss";

const Prices = ({ price, old_price, context }) => {
  return (
    <div className={context === "page" ? s.prices : s.collectionprices}>
      <div className={context === "page" ? s.price : s.collectionprice}>
        {price}
      </div>
      <div className={context === "page" ? s.oldprice : s.collectionoldprice}>
        {old_price}
      </div>
    </div>
  );
};

export default Prices;
