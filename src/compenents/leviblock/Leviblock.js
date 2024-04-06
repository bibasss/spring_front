import s from './Leviblock.module.css';
import {NavLink} from "react-router-dom";

{
    let s = {
        'leviblock': '1'
    }
}

const Leviblock = () => {
    return (
        <>

            <div className={s.leviblock}>
                

                <br></br><NavLink to="/profil">Профиль</NavLink><br></br>
                <br></br><NavLink to="/dialog">Диалог</NavLink><br></br>
                <br></br><NavLink to="/friends">Друзья</NavLink><br></br>
                <br></br><NavLink to="/news">Новости</NavLink><br></br>
                <br></br><NavLink to="/login">Log out</NavLink><br></br>



            </div>
        </>
    )
}


export default Leviblock;