import "../assets/css/main.css";
import Header from "./Header.jsx";
import Banner from "./Layouts/Banner.jsx";
import Footer from "./Footer.jsx";
import Logements from "./Layouts/Logements";



function App() {
  return (
    <main>
      <div className="container">
      <Header />
      <Banner />
      <Logements />
      </div>
      <Footer />
    </main>
  );
}

export default App;
