import { Link } from "react-router-dom";
import logements from "../../datas/logements.json";
import Card from "./Card";

//Permets de d'afficher les cards pour la page logements 
export default function Cards() {
  return (
    <section className="logements_container">
      {logements.map(({ id, title, cover }) => (
        <Link to={`logement/${id}`}>
          <Card key={id} title={title} cover={cover} />
        </Link>
      ))}
    </section>
  );
}
