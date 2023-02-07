import "./Card.css"

const Card = (({id, title, cover}) => {
return(
<li key={id}>
<li className="logements_list">
    <figure>
        <h3>{title}</h3>
        <img src={cover} alt={title} />
    </figure>
    </li>
</li>
)
})
export default Card