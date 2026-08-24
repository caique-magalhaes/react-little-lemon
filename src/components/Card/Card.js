export default function Card(props){
    return(
        <article className="card">
            <img src={props.image} alt={`image ${props.title}`} width={150} height={150} />
            <h3>{props.title}</h3>
            <span>£{props.value}</span>
            <p>{props.description}</p>
            <a href="#">Order delivery</a>
        </article>
    )
}