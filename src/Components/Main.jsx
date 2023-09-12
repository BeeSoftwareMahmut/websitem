import MainNav from "./Header/MainNavBar";
import Hero from "./Hero/Hero";
import Hero3 from "./Hero/Hero3";
import Hero4 from "./Hero/Hero4";
import Hero5 from "./Hero/Hero5";

const Main=()=>{
    return (
        <div>
            <MainNav/>
            <Hero/>
            <hr/>
            <div className="py-6">

            </div>
        
            <hr/>
            <Hero3/>
            <hr/>
            <Hero4/>
            <hr/>
            <Hero5/>
        </div>
    )
}

export default Main;