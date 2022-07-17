import s from "./About.module.scss";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className={s.about}>
      <div className={s.heading}>Для каждой</div>
      <div className={s.paragraphfirst}>
        Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
      </div>
      <div className={s.paragraphsecond}>
        Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно
        подчеркивают достоинства каждой девушки.
      </div>
      <NavLink to={"/about"}>
        <div className={s.link}>Подробнее о бренде</div>
      </NavLink>
    </div>
  );
};

export default About;
