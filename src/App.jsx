import "./App.css";
import Banner from "./components/banner/Banner";
import MainSection from "./components/mainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";
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
    </>
  );
}

export default App;
