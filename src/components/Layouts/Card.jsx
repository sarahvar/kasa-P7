const Card = (({id, title, cover}) => {
return(
<li key={id}>
    <figure>
        <h3>{title}</h3>
        <img src={cover} alt={title} />
    </figure>
</li>
)
})
export default Card