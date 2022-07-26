import s from "./Main.module.scss";
import Back from "./Back/Back";
import RightImages from "./RightImages/RightImages";
import Offers from "./Offers/Offers";
import NewCollection from "./NewCollection/NewCollection";
import WhatsImportant from "./WhatsImportant/WhatsImportant";
import DreamTeam from "./DreamTeam/DreamTeam";
import { useRef } from "react";

const Main = () => {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <>
      <Back />
      <div className={s.main}>
        <div className={s.top}>
          <Offers executeScroll={executeScroll} />
          <RightImages />
        </div>
        <NewCollection myRef={myRef} />
        <WhatsImportant />
        <DreamTeam />
      </div>
    </>
  );
};
export default Main;
