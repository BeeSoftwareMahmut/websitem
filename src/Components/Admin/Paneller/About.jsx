import { useState } from "react";
import { useMyContext } from "../../Context/Context";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

const About=()=>{
    const { aboutData, setAboutData } = useMyContext();

    const [aboutImgUrl, setAboutImgUrl] = useState("");
    const [aboutDescription, setAboutDescription] = useState("");

    const handleAboutInputChange = (e) => {
            setAboutDescription(e.target.value);
    };
    const handleDosyaSecimi = (e) => {
        setAboutImgUrl(e.target.files[0]);
      };

    const handleAboutSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", aboutImgUrl);
        formData.append("description", aboutDescription);

        axios.post("http://localhost:5000/about/about_data",formData)
        .then((res)=>{
          toast.success('İçerik başarıyla eklendi', {
              position: toast.POSITION.TOP_RIGHT,
            });
        }
       )
        .catch((err)=>{
          toast.error('İçerik eklenirken bir hata oluştu', {
              position: toast.POSITION.TOP_RIGHT, // Uyarının konumu (isteğe bağlı)
            });
        });

        setAboutImgUrl("");
        setAboutDescription("");

    };

       // Hakkımızda verilerini silme işlemi
const handleRemoveAboutData = (id) => {

    axios.delete(`http://localhost:5000/about/delete_aboutdata/${id}`).then((res)=>{
        setAboutData((prevAboutData) => {
            return prevAboutData.filter((data) => data.id !== id);
        });

        toast.success('İçerik başarıyla Silindi', {
            position: toast.POSITION.TOP_RIGHT,
          });
    
    }).catch((err)=>{
        toast.error('İçerik silinirken bir hata oluştu', {
            position: toast.POSITION.TOP_RIGHT, // Uyarının konumu (isteğe bağlı)
          });
    });

    
};


    return(
<div className="hakkimizda-content">
                            <h1 className="text-2xl mb-4">Hakkımızda Paneli</h1>

                            <form onSubmit={handleAboutSubmit}>
                                <div className="mb-4">
                                <label
                    htmlFor="imgUrl"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >
                    Resim Seç
                </label>

                <input
                  type="file"
                  id="imgUrl"
                  name="imgUrl"       
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   accept="image/*"
                   onChange={handleDosyaSecimi}
                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="aboutDescription" className="block text-gray-700 text-sm font-bold mb-2">
                                        Açıklama
                                    </label>
                                    <textarea
                                        id="aboutDescription"
                                        name="aboutDescription"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={aboutDescription}
                                        onChange={handleAboutInputChange}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Kaydet
                                </button>
                            </form>
                             {/* Mevcut "Hakkımızda" verileri */}
            <div className="mt-4">
                {aboutData.map((data) => (
                    <div key={data.id} className="mb-2">
                        <img src={data.imgUrl} alt={`Resim ${data.id}`} className="w-16 h-16 object-cover mr-2" />
                        <p>{data.description}</p>
                        <button
                            type="button"
                            onClick={() => handleRemoveAboutData(data.id)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sil
                        </button>
                    </div>
                ))}
            </div>

                        </div>
    )
}

export default About;