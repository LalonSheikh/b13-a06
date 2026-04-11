import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import MainSection from "./components/mainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/price/Pricing";
import Stats from "./components/stats/Stats";
import Steps from "./components/steps/Steps";

function App() {
  return (
    <>
      {/* <h2 className="bg-orange-500">Hello digitools</h2> */}
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <MainSection></MainSection>
      <Steps></Steps>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  );
}

export default App;
