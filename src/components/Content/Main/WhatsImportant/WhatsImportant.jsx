import { SvgSelector } from "../../../../SvgSelector";
import s from "./WhatsImportant.module.scss";
import Trigger from "./Trigger/Trigger";

const WhatsImportant = () => {
  const triggers = [
    {
      id: 1,
      img: <SvgSelector id="trigger1" />,
      heading: "Качество",
      paragraph:
        "Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества",
    },
    {
      id: 2,
      img: <SvgSelector id="trigger2" />,
      heading: "Скорость",
      paragraph:
        "Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах",
    },
    {
      id: 3,
      img: <SvgSelector id="trigger3" />,
      heading: "Ответственность",
      paragraph:
        "Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing",
    },
  ];

  return (
    <div className={s.whatsimportant}>
      <div className={s.heading}>Что для нас важно</div>
      <div className={s.triggers}>
        {triggers?.map((trigger) => (
          <Trigger
            key={trigger.id}
            img={trigger.img}
            heading={trigger.heading}
            paragraph={trigger.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatsImportant;
