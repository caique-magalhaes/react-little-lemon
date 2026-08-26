import './Card.css'
export default function Card(props){
    return(
        <article className="card">
            <img src={props.image} alt={`image ${props.title}`} width={300} height={200} />
            <div className='description'>
                <div className='description_title_value'>
                    <h3>{props.title}</h3>
                    <span>£{props.value}</span>
                </div>
                <p>{props.description}</p>
                <a href="#">Order delivery</a>
            </div>
        </article>
    )
}