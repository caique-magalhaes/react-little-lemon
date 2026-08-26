import Rating from "../Rating/Rating";
import kleber from "../../assets/61.jpg"
import joan from "../../assets/91.jpg"
import willard from "../../assets/26.jpg"
import './Testimonial.css'

export default function Testimonial(){
    return(
        <section className="testimonial">
            <h2>Testimonial</h2>
            <div className="wrapper-rating">
                <Rating img={kleber} rating={5} name="Kleber" review='"Great restaurant, perfect service."'  />
                <Rating img={joan} rating={5} name="Joan" review='"A great restaurant for dinner with friends; you feel right at ease."'  />
                <Rating img={willard} rating={5} name="Willard Harper" review='"I visited the restaurant with my wife and loved the place—great service."'  />
            </div>
        </section>
    )
}