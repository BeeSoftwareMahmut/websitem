import {  useState } from "react";
import { useMyContext } from "../../Context/Context";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import axios from "axios";

const Services=()=>{

    
    const { servicesData, setServicesData } = useMyContext();

    const [newService, setNewService] = useState({
        imgUrl: "",
        title: "",
        description: "",
    });

    const handleDosyaSecimi = (e) => {
        setNewService(
            {
                ...newService,
               imgUrl: e.target.files[0]
            });
      };

    const handleServiceInputChange = (e) => {
        const { name, value } = e.target;
        setNewService({
            ...newService,
            [name]: value,
        });

    };

    const handleServiceSubmit =  (e) => {
        e.preventDefault();
       
        const formData = new FormData();
        formData.append("image", newService.imgUrl);
        formData.append("title", newService.title);
        formData.append("description", newService.description);

    
             axios.post("http://localhost:5000/services/services_data",formData)
              .then((res)=>{
                toast.success('Hizmet başarıyla eklendi', {
                    position: toast.POSITION.TOP_RIGHT,
                  });
              }
             )
              .catch((err)=>{
                toast.error('Hizmet eklerken bir hata oluştu', {
                    position: toast.POSITION.TOP_RIGHT, // Uyarının konumu (isteğe bağlı)
                  });
              });
     


    };

   
    // Hizmetleri silme işlemi
const handleRemoveService = (id) => {
    
    axios.delete(`http://localhost:5000/services/delete_servicesdata/${id}`).then((res)=>{
        setServicesData((prevServiceData) => {
            return prevServiceData.filter((service) => service.id !== id);
        });
        toast.success('Hizmet başarıyla Silindi', {
            position: toast.POSITION.TOP_RIGHT,
          });
    
    }).catch((err)=>{
        toast.error('Hizmet silinirken bir hata oluştu', {
            position: toast.POSITION.TOP_RIGHT, // Uyarının konumu (isteğe bağlı)
          });
    });
};



    return(
        <div className="hizmet-content">
        <h1 className="text-2xl mb-4">Hizmetler Paneli</h1>
        <form onSubmit={handleServiceSubmit}>
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
                <label
                    htmlFor="title"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >
                    Başlık
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={newService.title}
                    onChange={handleServiceInputChange}
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="description"
                    className="block text-gray-700 text-sm font-bold mb-2"
                >
                    Açıklama
                </label>
                <textarea
                    id="description"
                    name="description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={newService.description}
                    onChange={handleServiceInputChange}
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Hizmet Ekle
            </button>
        </form>
         {/* Mevcut hizmetler */}

         <div className="mt-4">
{servicesData.map((service) => (
<div key={service.id} className="mb-2">
    <h2 className="text-lg font-semibold">{service.title}</h2>
    <img src={service.imgUrl} alt="" className="w-16 h-16 object-cover mr-2"/>
    <p>{service.description}</p>
    <button
        type="button"
        onClick={() => handleRemoveService(service.id)}
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

export default Services;