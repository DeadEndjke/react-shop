import s from "./Contacts.module.scss";
import { NavLink } from "react-router-dom";
import ContactCard from "./ContactCard/ContactCard";
import Form from "./Form/Form";

const Contacts = () => {
  const contactcard = [
    {
      id: "1",
      title: "Телефон",
      value: "+7 (495) 823-54-12",
    },
    {
      id: "2",
      title: "E-mail",
      value: "info@sitename.com",
    },
    {
      id: "3",
      title: "Адрес",
      value: "г. Москва, 3-я улица Строителей, 25",
    },
  ];
  return (
    <div className={s.contacts}>
      <div className={s.heading}>Контакты</div>
      <div className={s.path}>
        <NavLink to={"/"}>Главная</NavLink> -{" "}
        <NavLink to={"/shop"}>
          <span> Контакты</span>
        </NavLink>
      </div>

      <div className={s.contactcard}>
        {contactcard?.map((contactcard) => (
          <ContactCard
            key={contactcard.id}
            value={contactcard.value}
            title={contactcard.title}
          />
        ))}
      </div>
      <div className={s.form}>
        <Form />
      </div>
    </div>
  );
};
export default Contacts;
