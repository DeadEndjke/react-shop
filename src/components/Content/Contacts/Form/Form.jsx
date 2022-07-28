import s from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Form = () => {
  const [issend, setIssend] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await sleep(2000);
    if (data.username !== " " && data.email !== " " && data.phone !== " ") {
      setIssend(true);
    } else {
      alert("There is an error");
    }
  };

  return (
    <form className={s.contactform} onSubmit={handleSubmit(onSubmit)}>
      <input
        autocomplete="off"
        required
        placeholder="Имя"
        type="text"
        {...register("username")}
      />

      <input
        autocomplete="off"
        required
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

      <input
        className="messageinput"
        autocomplete="off"
        placeholder="Cообщение"
        type="text"
        {...register("message")}
      />

      <div>
        {Object.keys(errors).length > 0 &&
          "There are errors, check your console."}
      </div>
      <input type="submit" />
      {issend ? (
        <div className={s.success}>Сообщение успешно отправлено</div>
      ) : (
        <div></div>
      )}
    </form>
  );
};

export default Form;
