import './Rating.css'

export default function Rating(props){
    return(
        <article className="rating">
            <h2>{props.rating} / 5</h2>
            <div className="rating_img_name">
                <img src={props.img} alt={props.name} />
                <h3 className='rating-name'>{props.name}</h3>
            </div>
            <p>{props.review}</p>
        </article>
    )
}