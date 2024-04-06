import './Profil.css';
import { BsGeoAlt,BsInfoCircle,BsChevronDown } from "react-icons/bs";
import { TbAlignBoxLeftMiddle } from "react-icons/tb";

const Profil = () => {
    return (
        <>
            <Header/>
            < ProfilValues/>
            < Nizhni/>
        </>
    )
}

let Header = () => {
    return (

        <div className='Header'>
            <a href="https://sun9-51.userapi.com/impg/1qz8cu4gw4-Bj_v4SBqss0HDx5HVqOKR2J7p4A/JgRnH0AOqPM.jpg?size=719x958&quality=95&sign=8f29b735cad2165b4af19c7f98bbcac6&type=album">
                <img className="avatarka" src="https://sun9-36.userapi.com/impg/bN_0pTgfrOFs9nf-9GhwfbS8OiOpOF3GSL1A6A/eJFaZujiBDc.jpg?size=640x640&quality=96&sign=41ead64e4d52926736bbb8bbe3faa406&type=album"></img>
            </a>


            <div className="text">Манап Бейбарыс</div>
            <div className="text2">So simple</div>
            <BsGeoAlt className="geo_profil"/>
            <almaty><a href="#">Almaty</a></almaty>
            <BsInfoCircle className='info_profil'/>

            <almaty2><a href="#">Подробнее</a></almaty2>
            <div className="redaktirovat"><a href="#"> Редактировать профиль</a></div>

        </div>
    )
}


let ProfilValues = () => {
    return (
        <div className="Playlist">

            <div className="text3">
                Плейлисты
            </div>


            <img className="img1" width="150px"
                 src="https://sun9-36.userapi.com/impf/OVwvT8ttb_yXEEdbdjMpi59gBU_lmQ_OyJ8qhA/D-3VsPK-CFk.jpg?size=300x300&quality=96&sign=49d1e5677b95cc6306c95a0ee747f87a&type=audio"></img>
            <img className="img2" width="150px"
                 src="https://sun9-55.userapi.com/impf/pPzrlmBdp71gIAORJW48veDYaMbIjzrNQOcHkQ/3kaSGCdvNDQ.jpg?size=300x300&quality=96&sign=e1d8556091862eced87944b53d3844f5&type=audio"></img>
            <img className="img3" width="150px"
                 src="https://sun9-60.userapi.com/impf/8vOaSVAXFvjN8Gngzarf7UucEUreryn8k-zhng/jRORtEOpz34.jpg?size=300x300&quality=96&sign=dee51f606d3ad8fad6a1fb58fcf8d626&type=audio"></img>
            <img className="img4" width="150px"
                 src="https://sun9-36.userapi.com/impf/4mrqCDa1JXQRCjvOeUvlnORxOrwzP2AjtSO2ZQ/9n7GaXeLPhM.jpg?size=300x300&quality=96&sign=0f6e22dcf86f75e09f468866532416c8&type=audio"></img>
            <img className="img5" width="150px"
                 src="https://sun9-53.userapi.com/impf/Mg2VU-loH--i99WNrCO0LUDXGlMHDYxsvH_gQw/McqO37JDG4U.jpg?size=300x300&quality=96&sign=9b88f6fbf17b93b85d9af97627f2f32f&type=audio"></img>

            <itm1>silentmode</itm1>
            <itm2>Slowed and Relax</itm2>
            <itm3>So tired</itm3>
            <itm4>Lonely</itm4>
            <itm5>Japan</itm5>

        </div>
    )
}


let Nizhni = () =>{
    return(
        <div className = "Nizhni">

            <div className="text3">
                <text_post_profile>На стене пока нет ни одной записи</text_post_profile>
                <TbAlignBoxLeftMiddle className="PystoiStenaProfil"/>
                <audio src="https://vk.com/audio-2001195678_81195678"></audio>
            </div>
        </div>
    )
}

export default Profil;