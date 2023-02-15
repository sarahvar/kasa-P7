import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <Header />
      <div className="container">
        <h1 className="title-error">404</h1>
        <div className="oups">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <Link className="link-accueil" to="/">
          retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}
