import { Link } from 'react-router-dom'
import restauranfood from '../../assets/restauranfood.jpg'
import './Banner.css'

export default function Banner() {
    return (
        <section className='banner'>
            <article className='banner-content'>
                <div className='banner-description'>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Step in and enjoy authentic Mediterranean dishes, vibrant flavors, and bright moments. </p>
                    <Link to={"/reservation"}>Reserve a table</Link>
                </div>

                <img src={restauranfood} alt="waiter holding a tray" />


            </article>
        </section>
    )
}