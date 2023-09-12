import { useState } from "react";
import { useMyContext } from "../../Context/Context";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Photo = () => {
    const { imagesHero, setImagesHero } = useMyContext();


    // Yeni resim ekleme işlemleri
    const [imgUrl, setImgeUrl] = useState("");

    const handleDosyaSecimi = (e) => {
        setImgeUrl(e.target.files[0])
    };

    const handleAddImage = (e) => {

        e.preventDefault();

        const formData = new FormData();
        formData.append("image", imgUrl);



        axios.post("http://localhost:5000/images/add_image_data", formData)
            .then((res) => {
                toast.success(`${res.data.message}`, {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
            )
            .catch((err) => {
                toast.error('Resim eklerken bir hata oluştu', {
                    position: toast.POSITION.TOP_RIGHT, // Uyarının konumu (isteğe bağlı)
                });
            });



    };
    // Resim silme işlemi
    const handleRemoveImage = (id) => {

        axios.delete(`http://localhost:5000/images/delete_image_data/${id}`).then((res) => {

            toast.success(`${res.data.message}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
            const updatedImages = imagesHero.filter((image) => image.id !== id);
            setImagesHero(updatedImages);

        }).catch((err) => {
            toast.error('Hizmet silinirken bir hata oluştu', {
                position: toast.POSITION.TOP_RIGHT, // Uyarının konumu (isteğe bağlı)
            });
        });



    };

    return (
        <div>
            <h1 className="text-2xl mb-4">Kayan Fotoğraflar Paneli</h1>

            {/* Yeni resim eklemek için form */}
            <form>
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
                <button
                    type="button"
                    onClick={handleAddImage}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Resim Ekle
                </button>
            </form>

            {/* Mevcut resimler */}
            <div className="mt-4">
                {imagesHero.map((image) => (
                    <div key={image.id} className="mb-2 flex items-center">
                        <img src={image.imgUrl} alt={`Resim ${image.id + 1}`} className="w-16 h-16 object-cover mr-2" />
                        <button
                            type="button"
                            onClick={() => handleRemoveImage(image.id)}
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

export default Photo;