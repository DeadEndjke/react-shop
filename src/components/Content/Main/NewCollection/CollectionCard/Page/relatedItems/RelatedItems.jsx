import Related from "./related/Related";
import s from "./RelatedItems.module.scss";

const RelatedItems = ({ related_products }) => {
  return (
    <div className={s.relateditems}>
      <div className={s.heading}>Cвязанные товары</div>
      <div className={s.related}>
        {related_products?.map((related_products) => (
          <Related
            related={related_products.related}
            key={related_products.id}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedItems;
