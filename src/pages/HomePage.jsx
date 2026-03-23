// import './App.css'
import "../styles/global.css"
import HeroSection from '../components/home/HeroSection.jsx';
import ThirdSection from '../components/home/ThirdSection.jsx';
import FourthSection from '../components/home/FourthSection.jsx';
import FifthSection from '../components/home/FifthSection.jsx';
import EmailSection from '../components/home/EmailSection.jsx';
import SixthSection from '../components/home/SixthSection.jsx';
import ExploreSection from '../components/home/ExploreSection.jsx';
import FirstSection from '../components/home/FirstSection.jsx';
import SecondSection from '../components/home/SecondSection.jsx';
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

function HomePage() {

  return (
    <>
    <Header/>
    <HeroSection/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
    <ExploreSection/>
    <SixthSection/>
    <EmailSection/>
    <Footer/>
    </>
  )
}

export default HomePage;
