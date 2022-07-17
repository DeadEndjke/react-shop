import s from './Content.module.scss'
import { Routes, Route } from 'react-router-dom';
import Main from './Main/Main'
import About from './About/About'
import Contacts from './Contacts/Contacts'
import Shop from './Shop/Shop'
import Basket from './Basket/Basket'

export const Content = () => {
    return (
        <div className={s.content}>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/basket' element={<Basket />} />
            </Routes>
        </div>
    );
}

export default Content;
