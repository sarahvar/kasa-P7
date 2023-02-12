import Header from "../components/Header";
import Banner from "../components/Layouts/Banner";
import Footer from "../components/Footer";
import DisplayCards from "../components/Layouts/DisplayCards";



export default function app() {
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


