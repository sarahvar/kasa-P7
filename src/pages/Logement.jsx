import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import logements from "../datas/logements.json";
import Carousel from "../components/utils/carousel";
import Collapsible from "../components/utils/collapse";
import Tags from "../components/utils/tag";
import Rating from "../components/utils/Ratings";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const { title, location, rating, host, equipments, description, pictures } =
    logement;
    const isHostSplited = host.name.split(" ");
    const [name, lastname] = isHostSplited;
  return (
    <main>
      <Header/>
      <Carousel carousels={pictures} />
      <p className="title">{title}</p>
      <p className="location">{location}</p>
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
      <div className="Collapsible">
      <Collapsible label="description" className="Collapsible-Open" content={description} />
      <Collapsible label="equipements" className="Collapsible-Open" content={equipments} />
    </div>
    </div>
    </main>
  );
}
export default Logement;
