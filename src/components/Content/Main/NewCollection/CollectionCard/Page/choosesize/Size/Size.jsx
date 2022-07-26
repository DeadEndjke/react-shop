import s from "./Size.module.scss";

const Size = ({ size }) => {
  return (
    <div className={s.sizes}>
      <>{size}</>
    </div>
  );
};

export default Size;
