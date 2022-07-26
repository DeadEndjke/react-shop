import s from "./ContactCard.module.scss";

const ContactCard = ({ title, value }) => {
  return (
    <div className={s.contactcard}>
      <div className={s.title}>{title}</div>
      <div className={s.value}>{value}</div>
    </div>
  );
};
export default ContactCard;
