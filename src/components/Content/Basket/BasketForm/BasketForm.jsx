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
    IsSend(true);
    clearBasket();
  };

  let url = `https://62dd258257ac3c3f3c650b30.mockapi.io/rucities/`;
  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setCities(data);
    });
  }, []);

  return (
    <form className={s.basketform} onSubmit={handleSubmit(onSubmit)}>
      <input
        required
        autocomplete="off"
        placeholder="Имя"
        type="text"
        {...register("username")}
      />

      <input
        required
        autocomplete="off"
        placeholder="E-mail"
        type="text"
        {...register("email")}
      />

      <input
        required
        autocomplete="off"
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
