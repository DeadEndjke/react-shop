import s from "./BasketForm.module.scss";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const BasketForm = ({ clearBasket }) => {
  const [issend, setIssend] = useState(false);
  const [cities, setCities] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await sleep(1000);
    if (data.username !== " " && data.email !== " " && data.phone !== " ") {
      setIssend(true);
    } else {
      alert("There is an error");
    }
  };
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
      <select value={cities.name} name="" id="">
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
      <input onClick={() => clearBasket()} type="submit" value={"Заказать"} />
      {issend ? (
        <div className={s.success}>
          Спасибо за заказ, он прибудет к вам очень скоро(никогда)
        </div>
      ) : (
        <div></div>
      )}
    </form>
  );
};

export default BasketForm;
