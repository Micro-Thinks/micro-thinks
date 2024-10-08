import Footer from "./Footer/page"
import Hero from "./Hero/page"
import Navbar from "./Navbar/page"
import Aboutus from "./Aboutus/page"
import Services from "./Services/page"
const Home = () => {
  return (
    <div>

      <Navbar />
      <Hero/>
      <Aboutus/>
      <Services />
      <Footer />

    </div>
  )
}

export default Home 