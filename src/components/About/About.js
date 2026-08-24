import adrian_mario_a from '../../assets/Mario and Adrian A.jpg'
import adrian_mario_b from '../../assets/Mario and Adrian b.jpg'
export default function About(){
    return(
        <section>
            <article>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Little Lemon is the realization of a lifelong dream for lifelong friends Adrian and Mario. Born and raised along the Mediterranean coast, they grew up sharing a passion for fresh ingredients, family recipes, and the joy of bringing people together around a table.</p>
                <p>
                    As co-owners and head chefs, Adrian brings a modern creative twist to classical techniques, while Mario focuses on preserving the authentic, traditional flavors handed down through generations. Together, they bring a bright, memorable taste of the Mediterranean straight to your plate.
                </p>

                <img width={150} height={150} src={adrian_mario_a} alt="mario and adrian image" />
                <img width={150} height={150} src={adrian_mario_b} alt="mario and adrian image" />

            </article>
        </section>


    )
}