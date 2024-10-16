import Footer from "./Footer/page";
import Hero from "./Hero/page";
import Navbar from "./Navbar/page";
import Aboutus from "./Aboutus/page";
import Services from "./Services/page";
import List from "./Listing/page";
import WhatsAppButton from "./WhatsApp/WhatsAppButton";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutus />
      <List />
      <Services />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
