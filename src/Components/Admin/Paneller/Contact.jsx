import { useState } from "react";
import { useMyContext } from "../../Context/Context";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

const Contact=()=>{
    const { contactData, setContactData } = useMyContext();


    const [updatedContactData, setUpdatedContactData] = useState({ ...contactData });

    const handleContactInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedContactData({
            ...updatedContactData,
            [name]: value,
        });
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        

        const requestData = { 
            phone:updatedContactData.phone,
            email:updatedContactData.email,
            adres:updatedContactData.location  
        }
        axios.put("http://localhost:5000/contact/1", requestData,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
                toast.success(`${res.data.message}`, {
                    position: toast.POSITION.TOP_LEFT,
                });
            }
            ).catch((err) => {
                toast.error('İçerik Güncelenirken hata oluştu', {
                    position: toast.POSITION.TOP_LEFT, // Uyarının konumu (isteğe bağlı)
                });
            });

        setContactData({ ...updatedContactData });
    };

    return(
<div className="iletisim-content">
                            <h1 className="text-2xl mb-4">İletişim Paneli</h1>
                            <form onSubmit={handleContactSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                                        Telefon
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={updatedContactData.phone}
                                        onChange={handleContactInputChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                        E-posta
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={updatedContactData.email}
                                        onChange={handleContactInputChange}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                                        Adres
                                    </label>
                                    <textarea
                                        id="location"
                                        name="location"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={updatedContactData.location}
                                        onChange={handleContactInputChange}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Güncelle
                                </button>
                            </form>
                        </div>
    )
}

export default Contact;