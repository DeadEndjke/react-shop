import s from './RightImages.module.scss';
import img1 from './../../../../images/BackImage1.jpg'
import img2 from './../../../../images/BackImage2.jpg'
import img3 from './../../../../images/BackImage3.jpg'



const RightImages = () => {
    return <div className={s.rightimages}>
        <img className={s.firstimg} src={img1} alt="" />
        <img className={s.secondimg} src={img2} alt="" />
        <img className={s.thirdimg} src={img3} alt="" />
    </div>

};

export default RightImages;