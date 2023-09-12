import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Hero5=()=>{
    return(
        <div>
            <div className="flex flex-col items-center gap-4 my-5">
            <h2 className="text-lg font-semibold text-red-700"><a href="/contact">Bizimle iletişime geçin </a></h2>
            <span>____________________________________________________</span>
            <ul className="flex gap-4  sm:gap-7">
                <li><a className="sm:text-3xl text-s text-blue-950" href="https://www.facebook.com/sayfa-linki" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li><a className="sm:text-3xl text-s text-blue-950" href="https://www.twitter.com/sayfa-linki" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li><a className="sm:text-3xl text-s text-red-950" href="https://www.instagram.com/sayfa-linki" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
            </ul>
            </div>
            
           
            <div className= " mt-2 bg-black text-center py-3">
                <span className="text-xs text-white">Tüm Hakları Saklıdır. 2023  Mahmut Arı</span>
            </div>
        </div>
    )
}

export default Hero5;