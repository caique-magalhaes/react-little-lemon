import restauranfood from  '../../assets/restauranfood.jpg'

export default function Banner(){
    return(<section className='banner'>
        <article>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Step in and enjoy authentic Mediterranean dishes, vibrant flavors, and bright moments. </p>

            <img src={restauranfood} alt="waiter image" height={50} width={50} />

            <a href='#'>Reserve a table</a>
        </article>
    </section>)
}