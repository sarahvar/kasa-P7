import React from "react";
import { useParams } from "react-router-dom";
import logements from "../datas/logements.json";
import Carousel from "../components/utils/carousel";
import Collapsible from "../components/utils/collapse";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const { title, location, rating, host, equipments, description, pictures, } =
    logement;

  return (
    <main>
      <Carousel carousels={pictures} />
      <Collapsible label="description" content={description}/>
      <Collapsible label="equipements" content={equipments}/>
    </main>
  );
}
export default Logement;
