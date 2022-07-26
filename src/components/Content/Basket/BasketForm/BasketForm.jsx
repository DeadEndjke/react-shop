import s from "./BasketForm.module.scss";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const BasketForm = ({ clearBasket, issend, IsSend }) => {
  const [cities, setCities] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    IsSend(true);
    setTimeout(
      console.log(
        data.username,
        ", мы отправим вам вещи в",
        data.city,
        ", а при прибытии напишем вам на",
        data.email,
        "или позвоним на номер",
        data.Phone
      ),
      3000
    );
    clearBasket();
  };
  // your form submit function which will invoke after successful validation

  let url = `https://62dd258257ac3c3f3c650b30.mockapi.io/rucities/`;
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setCities(data);
    });
  }, []);

  return (
    <form className={s.basketform} onSubmit={handleSubmit(onSubmit)}>
      <input required placeholder="Имя" type="text" {...register("username")} />

      <input required placeholder="E-mail" type="text" {...register("email")} />

      <input
        required
        placeholder="Телефон"
        type="text"
        {...register("Phone")}
      />

      <div className={s.choosecity}>Выберите город</div>
      <select value={cities.name} {...register("city")}>
        {cities?.map((cities) => (
          <option key={cities.id} value={cities.name}>
            {cities.name}
          </option>
        ))}
      </select>

      <div>
        {Object.keys(errors).length > 0 &&
          "There are errors, check your console."}
      </div>
      <input type="submit" value={"Заказать"} />
    </form>
  );
};

export default BasketForm;
