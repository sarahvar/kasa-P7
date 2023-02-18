import React from "react";
import { useParams } from "react-router-dom";
import logements from "../datas/logements.json";
import Carousel from "../components/utils/carousel";
import Collapsible from "../components/utils/collapse";
import Tags from "../components/utils/tag";
import Rating from "../components/utils/Rating";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const { title, location, rating, host, equipments, description, pictures } =
    logement;
    const isHostSplited = host.name.split(" ");
    const [name, lastname] = isHostSplited;
  return (
    <main>
      <Carousel carousels={pictures} />
      <Collapsible label="description" content={description} />
      <Collapsible label="equipements" content={equipments} />
      {logement.tags.map((tag, index) => (
        <Tags key={index} getTag={tag} />
      ))}
      <Rating rating={rating} />
      <div className="host">
      <div className="host__name">
        <p className="host__firstname">{name.trim()}</p>
        <p className="host__lastname">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className="host__picture" />
    </div>
    </main>
  );
}
export default Logement;
