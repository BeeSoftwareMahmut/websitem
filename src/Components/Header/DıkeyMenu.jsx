import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const   DikeyMenu=(props)=>{

    const {handleShowingTheMenu}=props

    return(
        <div className="h-screen z-50 pl-3 bg-neutral-100 fixed top-0 right-0">
            <button onClick={handleShowingTheMenu} className=' absolute top-3 right-3 font-extrabold text-3xl'>
                <FontAwesomeIcon  icon={faTimes}/>
            </button>
              <ul className="dikey-menu">
            <li><a href="/">Ana Sayfa</a></li>
            <li><a href="/about">Hakkımızda</a></li>
            <li><a href="/services">Hizmetler</a></li>
            <li><a href="/contact">İletişim</a></li>
            <li><a href="/admin">Admin</a></li>  
        </ul>
        </div>
    )
}
export default DikeyMenu;