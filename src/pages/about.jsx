import Header from "../components/Header";
import Aboutbanner from "../components/Layouts/Banner-about";
import Footer from "../components/Footer";


export default function about (){
    return (
        <>
        
          <Header />
          <main className="container">
            <Aboutbanner />
          </main>
          <Footer />
        
        </>
      );
}