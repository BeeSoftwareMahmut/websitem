import { useMyContext } from "../Context/Context";

const Hero3=()=>{
    const {visionText}=useMyContext();
    return(
        <div className="hero3">
            <img src="images/motor.jpg" alt=""/>
            <div>
                <h2>Vizyonumuz</h2>
                <p>
                    {visionText}
              </p>
              <a href="/contact"><button>Başvur</button></a>
            </div>
        </div>
    )
}

export default Hero3;