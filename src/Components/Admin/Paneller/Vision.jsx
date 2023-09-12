import axios from "axios";
import { useMyContext } from "../../Context/Context";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Vision = () => {
    const { visionText, setVisionText } = useMyContext();



    const handleVisionTextChange = (e) => {
        setVisionText(e.target.value);
    };


    const ChangeTheVisionText = (e) => {
        e.preventDefault();


        const requestData = { content: visionText }



        axios.put("http://localhost:5000/vision/1", requestData,
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

    }

    return (
        <div className="vizyon-content">
            <h1 className="text-2xl mb-4" >Vizyon Paneli</h1>
            <form onSubmit={ChangeTheVisionText}>
                <div className="mb-4">
                    <label htmlFor="visionText" className="block text-gray-700 text-sm font-bold mb-2">
                        Vizyon Metni
                    </label>
                    <textarea
                        id="visionText"
                        name="visionText"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={visionText}
                        onChange={handleVisionTextChange}
                        cols="10"
                        rows="12"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Değiştir
                </button>
            </form>
        </div>
    )
}

export default Vision;