import axios, { Axios } from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useMyContext = () => {
  return useContext(ThemeContext);
};

export const ContextProvider = ({ children }) => {

  const [servicesData, setServicesData] = useState([])
  const [aboutData, setAboutData] = useState([])
  const [visionText, setVisionText] = useState("");
  const [contactData, setContactData] = useState({
    phone: "",
    email: "",
    location: ""
  })

  const [imagesHero, setImagesHero] = useState([])

  useEffect(() => {
    const fetchServicesData = axios.get("http://localhost:5000/services/get_servicesData");
    const fetchAboutData = axios.get("http://localhost:5000/about/get_about_data");
    const fetchHeaderData = axios.get('http://localhost:5000/header/getdata');
    const fetchVisionText = axios.get('http://localhost:5000/vision/get_vision_text');
    const fetchContactData = axios.get('http://localhost:5000/contact/get_contact_data');
    const fetchImageData = axios.get('http://localhost:5000/images//get_image_data');

    axios.all([fetchServicesData, fetchAboutData, fetchHeaderData, fetchVisionText, fetchContactData, fetchImageData])
      .then(axios.spread((servicesRes, aboutRes, headerRes, visionRes, contactRes, imageRes) => {
        const servicesData = servicesRes.data.servicesData;
        const aboutData = aboutRes.data.servicesData;
        const title = headerRes.data.HeaderData[0].title;
        const visionText = visionRes.data.visionText[0].content;
        const { phone, email, adres } = contactRes.data.contactData[0];
        const imagesData = imageRes.data.ImageData;

      

       
        setServicesData([...servicesData]);
        setAboutData([...aboutData]);
        document.title = title;
        setVisionText(visionText);
        setContactData({
          phone: phone,
          email: email,
          location: adres
        })
        setImagesHero([...imagesData]);
      }))
      .catch((err) => console.log(err));
  }, []);









  return (
    <ThemeContext.Provider value={{ imagesHero, setImagesHero, servicesData, setServicesData, visionText, setVisionText, aboutData, setAboutData, contactData, setContactData }}>
      {children}
    </ThemeContext.Provider>
  );
};
