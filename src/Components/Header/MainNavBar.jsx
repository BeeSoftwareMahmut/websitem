import { useEffect, useState } from "react";
import YatayMenu from "./YatayMenu";
import MenuBar from "./MenuBar";



const MainNav = () => {

    const [isMobilWiew,setIsNobilWiew]=useState(false)
    

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 750) {
                setIsNobilWiew(true);
            } else {
                setIsNobilWiew(false);
            }
        };

        
        handleResize();

       
    
        window.addEventListener("resize", handleResize);

        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className=" z-50 flex justify-between">
            <div className="flex flex-col items-center mt-5  ml-2 sm:ml-16" >
                <img className="h-8 md:h-16" src="images/Logo.jpg" alt="/"/>
                <h1 className="font-extrabold">Otomasyon</h1>
                <span className="font-thin">Otomasyonlarımız</span>
            </div>
            {
                isMobilWiew ? (<MenuBar/>):(<YatayMenu />)
            }
            
        </header>
    )
}

export default MainNav;