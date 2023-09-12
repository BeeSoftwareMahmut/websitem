import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarker, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState } from "react";
import { useMyContext } from "../Context/Context";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactInfo = () => {
    const [send, setSend] = useState(false);
    const [post, setPost] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setPost({ ...post, [name]: checked });
            setSend(true);
        } else {
            setPost({ ...post, [name]: value });
        }
        console.log(post);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (send) {
            try {
                await axios.post("http://localhost:5000/send_mail", { post }, {
                    headers: { "Content-Type": "application/json" }
                });
                setPost({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    consent: false
                });

                toast.success('Posta başarılı bir şekilde gönderildi', {
                    position: toast.POSITION.TOP_CENTER,
                })

            } catch (error) {
                console.log(error);
                toast.error('Bağlantı Sorunu var', {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
        }
        else {
            toast.error('KVKK ONAYLAYIN', {
                position: toast.POSITION.TOP_CENTER,
            });
        }

    }

    const { contactData } = useMyContext();

    return (
        <div className="my-5 md:my-10 flex flex-col gap-4">
            <div className="w-screen py-7 md:py-12 ml-2 md:ml-5 text-center bg-green-300">
                <h1 className="text-base md:text-2xl font-medium md:font-bold text-violet-500">İletişim</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between py-6 md:py-12">
                <div className="my-12 flex gap-4 md:gap-7 w-screen md:w-1/2 flex-col ml-12">
                    <ContactInfoItem icon={faPhone} title="Telefon" content={contactData.phone} />
                    <ContactInfoItem icon={faEnvelope} title="E-posta" content={contactData.email} />
                    <ContactInfoItem icon={faMapMarker} title="Adres" content={contactData.location} />
                </div>

                <div className="md:w-1/2 w-screen ml-12">
                    {<ContactForm post={post} onChange={handleInputChange} onSubmit={handleSubmit} />}
                </div>
            </div>
        </div>
    );
};

const ContactInfoItem = ({ icon, title, content }) => (
    <div className="flex gap-4 md:gap-10">
        <div>
            <span className="text-sm font-normal text-blue-600 md:font-bold md:text-lg">
                <FontAwesomeIcon icon={icon} />
            </span>
        </div>
        <div className="flex flex-col">
            <span className="font-extrabold">{title}</span>
            <span>{content}</span>
        </div>
    </div>
);

const ContactForm = ({ post, onChange, onSubmit }) => (
    <form onSubmit={onSubmit} className="flex flex-col">
        <label htmlFor="name">Ad Soyad:</label>
        <input
            className="py-2 bg-slate-50 w-4/5 pl-1 rounded border-2 focus:outline-none"
            type="text"
            id="name"
            name="name"
            required
            placeholder="İsim *"
            value={post.name}
            onChange={onChange}
        /><br /><br />

        <label htmlFor="email">E-posta Adresi:</label>
        <input
            className="py-2 bg-slate-50 w-4/5 pl-1 rounded border-2 focus:outline-none"
            type="email"
            id="email"
            name="email"
            required
            placeholder="E-posta *"
            value={post.email}
            onChange={onChange}
        /><br /><br />

        <label htmlFor="phone">Telefon Numarası:</label>
        <input
            className="py-2 bg-slate-50 w-4/5 pl-1 rounded border-2 focus:outline-none"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Telefon"
            value={post.phone}
            onChange={onChange}
        /><br /><br />

        <label htmlFor="message">Mesajınız:</label><br />
        <textarea className="py-2 bg-slate-50 w-4/5 pl-1 rounded border-2 focus:outline-none"
            id="message"
            name="message"
            rows="4" cols="50"
            required
            placeholder="Mesajınız *"
            value={post.message}
            onChange={onChange}
        ></textarea><br /><br />

        <div className="flex md:flex-row flex-col gap-4">
            <div>
                <label htmlFor="consent">KVKK Açık Rıza:   </label>
                <input type="checkbox" id="consent" checked={post.consent} onChange={onChange}  name="consent" required />
            </div>
            <label htmlFor="consent">Verilerimin işlenmesini kabul ediyorum.</label><br /><br />
        </div>

        <div className="flex justify-center md:justify-end mr-5 md:mr-11">
            <input className="py-2 text-center bg-lime-600 text-white rounded-md px-12"
                type="submit" value="Gönder" />
        </div>
    </form>
);



export default ContactInfo;
