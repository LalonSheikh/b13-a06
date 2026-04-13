import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import MainSection from "./components/mainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/price/Pricing";
import Stats from "./components/stats/Stats";
import Steps from "./components/steps/Steps";

const fetchDigiTools = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const digiToolsPromise = fetchDigiTools();
  const [totalCount, setTotalCount] = useState(0);
  return (
    <>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Navbar totalCount={totalCount}></Navbar>
        <Banner></Banner>
        <Stats></Stats>
        <MainSection
          setTotalCount={setTotalCount}
          totalCount={totalCount}
          digiToolsPromise={digiToolsPromise}
        ></MainSection>
        <Steps></Steps>
        <Pricing></Pricing>
        <Footer></Footer>
      </Suspense>
    </>
  );
}

export default App;
