import "./Logements.css";
import logements from "../../datas/logements.json";
import Card from "./Card";
import "../Layouts/DisplayCards.css"


export default function displayCards(){
    return(
    <section className="logements_container">
        {logements.map(({id, title, cover }) => (
        <Card
        key={id}
        title={title}
        cover={cover}
        />
        ))}
    </section>
    )

}