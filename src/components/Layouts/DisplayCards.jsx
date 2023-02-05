import "./Logements.css";
import logements from "../../datas/logements.json";
import Card from "./Card";


export default function displayCards(){
    return(
    <section>
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