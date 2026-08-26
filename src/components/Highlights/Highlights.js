import Card from "../Card/Card";
import greek_salad from "../../assets/greek salad.jpg"
import bruschetta from "../../assets/bruchetta.svg"
import lemon_dessert from "../../assets/lemon dessert.jpg"
import './Highlights.css'
export default function Highlights(){
    return(
        <>
            <div className="highlights_title">
                <h2>This is week special!!</h2>
                <a href="#">Menu</a>
            </div>
            <section className="highlights">
                <Card title='Greek Salad' image={greek_salad} value='12.99' description = 'A Amazing greek salad' />
                <Card title='Bruschetta' image={bruschetta} value='13.99' description = 'A Delicious Bruschetta' />
                <Card title='Lemon dessert' image={lemon_dessert} value='10.99' description = "Our lemon dessert—Grandma's specialty." />
            </section>
        </>
    )
}