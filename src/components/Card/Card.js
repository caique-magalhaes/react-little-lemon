import { Link } from 'react-router-dom'
import './Card.css'

export default function Card(props){
    return(
        <article className="card">
            <img src={props.image} alt={props.title} width={300} height={200} />
            <div className='description'>
                <div className='description_title_value'>
                    <h3>{props.title}</h3>
                    <span>£{props.value}</span>
                </div>
                <p>{props.description}</p>
                <Link to={"/"} >Order delivery</Link>
            </div>
        </article>
    )
}