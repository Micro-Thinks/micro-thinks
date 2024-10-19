"use client"
import Hero from "./Hero/page";
import Aboutus from "./Aboutus/page";
import Services from "./Services/page";
import List from "./Listing/page";
import ContactForm from "./Contact/page";
import WhatsAppButton from "./WhatsApp/WhatsAppButton";
import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  const contactFormRef = useRef()
  const slidetoContactForm = ()=> {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <Hero slidetoContactForm={slidetoContactForm} />
      <Aboutus />
      <List />
      <Services />
      <ContactForm  ref={contactFormRef} />
      <WhatsAppButton />
      <ToastContainer
  position="top-right"
  autoClose={4000}/>

    </div>
  );
};

export default Home;
