import "../assets/css/main.css";
import Header from "./Header.jsx";
import Banner from "./Layouts/Banner.jsx";
import Footer from "./Footer.jsx";
import DisplayCards from "./Layouts/DisplayCards";



function App() {
  return (
    <>
    
      <Header />
      <main className="container">
        <Banner />
        <DisplayCards />
      </main>
      <Footer />
    
    </>
  );
}

export default App;
