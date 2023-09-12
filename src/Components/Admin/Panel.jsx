import { useState } from "react";
import PageTitle from "./Paneller/PageTitle";
import Services from "./Paneller/Services";
import Vision from "./Paneller/Vision";
import About from "./Paneller/About";
import Contact from "./Paneller/Contact";
import Photo from "./Paneller/Photo";



const Panel = () => {


    const [contentVisibilty, setContenVisiblty] = useState({
        title: false,
        service: false,
        vision: false,
        about: false,
        contact: false,
        photo: false
    })

    const handleButtonClick = (buttonName) => {
        setContenVisiblty({
            title: buttonName === "baslik",
            service: buttonName === "hizmet",
            vision: buttonName === "vizyon",
            about: buttonName === "hakkimizda",
            contact: buttonName === "iletisim",
            photo: buttonName === "kayanfoto"
        });
    }
   
    return (
        <div className="adminpanel">
            <div className="buttons">
                <button className="baslik" onClick={() => handleButtonClick("baslik")}>Sayfa başlığını Güncelle</button>
                <button className="hizmet" onClick={() => handleButtonClick("hizmet")}>Hizmet Ekle & Sil</button>
                <button className="vizyon" onClick={() => handleButtonClick("vizyon")}>Vizyonumuz Yazısını Güncele</button>
                <button className="hakkimizda" onClick={() => handleButtonClick("hakkimizda")}>Hakkımızda İçeriğini Güncelle</button>
                <button className="iletisim" onClick={() => handleButtonClick("iletisim")}>İletişim Biligilerini Güncelle</button>
                <button className="kayanfoto" onClick={() => handleButtonClick("kayanfoto")}>Kayan Fotoğrafları Güncelle</button>
            </div>

            <div className="content-panel">
           
                {
                    contentVisibilty.title ? (
                        <PageTitle />
                    ) : ("")
                }

                {
                    contentVisibilty.service ? (
                        <Services />
                    ) : ("")
                }

                {
                    contentVisibilty.vision ? (
                        <Vision />
                    ) : ""
                }

                {contentVisibilty.about ? (
                    <About />

                ) : ""
                }

                {
                    contentVisibilty.contact ? (
                        <Contact />
                    ) : ""
                }
                {
                    contentVisibilty.photo ? (
                        <Photo />
                    ) : ""
                }

            </div>

        </div>
    )
}

export default Panel;