import s from "./DreamTeam.module.scss";
import dreamteamimg from "./../../../../images/dreamteam.png";
import { SvgSelector } from "../../../../SvgSelector";
import About from "./About/About";

export const DreamTeam = () => {
  return (
    <div className={s.dreamteam}>
      <div className={s.heading}>Команда мечты Womazing</div>
      <div className={s.dreamteamblock}>
        <img src={dreamteamimg} alt="" />

        <div className={s.about}>
          <About />
        </div>
      </div>
    </div>
  );
};

export default DreamTeam;
