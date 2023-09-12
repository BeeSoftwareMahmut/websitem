import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DikeyMenu from './DıkeyMenu';
import { useState } from 'react';

const MenuBar=()=>{

    const [isShowTheMenu,setIsShowTheMenu]=useState(false);

    const handleShowingTheMenu=()=>{
        setIsShowTheMenu(!isShowTheMenu);
    }

    return(
        <div>
        <button onClick={handleShowingTheMenu} className='w-5 mt-5 mr-3'>
            <FontAwesomeIcon icon={faBars}/>
        </button>
        {isShowTheMenu ? <DikeyMenu handleShowingTheMenu={handleShowingTheMenu}/> :""}
        </div>
    )
}
export default MenuBar;