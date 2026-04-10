import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/stats/Stats";

function App() {
  return (
    <>
      {/* <h2 className="bg-orange-500">Hello digitools</h2> */}
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
    </>
  );
}

export default App;
