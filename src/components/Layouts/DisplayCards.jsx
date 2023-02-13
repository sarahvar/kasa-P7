import { Link } from "react-router-dom";
import logements from "../../datas/logements.json";
import Card from "./Card";

export default function displayCards() {
  return (
    <Link to = "/logement"><section className="logements_container">
      {logements.map(({ id, title, cover }) => (
        <Card key={id} title={title} cover={cover} />
      ))}
    </section>
    </Link>
  );
}
