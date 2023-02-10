import "../assets/css/main.css";
import Header from "./Header.jsx";
import Banner from "./Layouts/Banner.jsx";
import Footer from "./Footer.jsx";
import Logements from "./Layouts/Logements";



function App() {
  return (
    <>
    
      <Header />
      <main className="container">
        <Banner />
        <Logements />
      </main>
      <Footer />
    
    </>
  );
}

export default App;
