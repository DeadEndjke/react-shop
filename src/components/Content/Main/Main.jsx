import s from "./Main.module.scss";
import Back from "./Back/Back";
import RightImages from "./RightImages/RightImages";
import Offers from "./Offers/Offers";
import NewCollection from "./NewCollection/NewCollection";
import WhatsImportant from "./WhatsImportant/WhatsImportant";
import DreamTeam from "./DreamTeam/DreamTeam";

const Main = () => {
  return (
    <>
      <Back />
      <div className={s.main}>
        <div className={s.top}>
          <Offers />
          <RightImages />
        </div>
        <NewCollection />
        <WhatsImportant />
        <DreamTeam />
      </div>
    </>
  );
};
export default Main;
