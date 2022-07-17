import s from "./Trigger.module.scss";

const Trigger = ({ img, heading, paragraph }) => {
  return (
    <div className={s.trigger}>
      <div className={s.img}>{img}</div>
      <div className={s.heading}>{heading}</div>
      <div className={s.paragraph}>{paragraph}</div>
    </div>
  );
};

export default Trigger;
