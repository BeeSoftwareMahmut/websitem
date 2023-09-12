import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

const PageTitle=()=>{
    const [pageTitle, setPageTitle] = useState(document.title)

    const handlePageTitleChange = (e) => {
        setPageTitle(e.target.value);
    }

    const handlePageTitleSubmit = (e) => {
        e.preventDefault();
        const requestData={title:pageTitle}
        
     

        axios.put("http://localhost:5000/header/1",requestData,
        {
            headers: {
                'Content-Type': 'application/json', 
              }
        })
              .then((res)=>{
                toast.success(`${res.data.message}`, {
                    position: toast.POSITION.TOP_RIGHT,
                  });

              }

          
             )
              .catch((err)=>{
                toast.error('Başlık  Güncelenirken hata oluştu', {
                    position: toast.POSITION.TOP_RIGHT, // Uyarının konumu (isteğe bağlı)
                  });
              });

    }

   


    return(
        <div className="baslik-content">
        <h1 className="text-2xl mb-4">Başlık Değiştirme Paneli</h1>
        <form onSubmit={handlePageTitleSubmit}>
            <div className="mb-4">
                <label htmlFor="newPageTitle" className="block text-gray-700 text-sm font-bold mb-2">Yeni Başlık</label>
                <input
                    type="text"
                    id="newPageTitle"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={pageTitle}
                    onChange={handlePageTitleChange}
                />
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

export default PageTitle;