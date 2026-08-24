export default function Rating(props){
    return(
        <article>
            <img src={props.img} alt={`image ${props.name}`} />
            <h2>{props.rating} / 5</h2>
            <h3>{props.name}</h3>
            <p>{props.review}</p>
        </article>
    )
}