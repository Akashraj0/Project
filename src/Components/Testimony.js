import rating from './Assets/icons_assets/3_star_rating.png';
import rating1 from './Assets/icons_assets/4_star_rating.png';
export function Testimony()
{
    return(
        <>
        <section className='test'>
               <h1 className="Testimonials">Testimonials</h1>
               <div className="grid2">
                  <div>
                        <img src={rating} alt="rating" className="rating"/>
                        <h3>Mathee</h3>
                        <p>Great food, welcoming staff, cozy atmosphere</p>
                        <h4>Chicago</h4>
                  </div>
                  <div>
                        <img src={rating} alt="rating"/>
                        <h3>Tony</h3>
                        <p> The food here tasted so delicious must try .</p>
                        <h4>Chicago</h4>
                  </div>
                  <div>
                        <img src={rating1} alt="rating"/>
                        <h3>brenda</h3>
                        <p> I would definitely order from here again!</p>
                        <h4>Chicago</h4>
                  </div>
                  <div>
                        <img src={rating} alt="rating"/>
                        <h3>Marshall</h3>
                        <p>food here really awesome must try </p>
                        <h4>Chicago</h4>
                   </div>
               </div>
         </section>
        </>
    )
}