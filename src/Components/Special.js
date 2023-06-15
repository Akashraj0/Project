import greek_salad from './Assets/icons_assets/greek salad.jpg';
import bruchetta from './Assets/icons_assets/bruchetta.svg';
import lemon from './Assets/icons_assets/lemon dessert.jpg';
export function Special()
{
    return(
        <>
        <section className='special'>
            <div className="grid" id='menu-section'>
            <h3> Specials </h3>
            <button className="special-btn">View Menu</button>
            </div>
            <div className="cardgrid">
            <div className="card">
                 <img src={greek_salad} alt="food"/>
                 <h4>greek salad &nbsp; &nbsp; $12.00</h4>
                 <p>Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil.</p>
                 <button className="btn">Order on Delivery</button>
            </div>
            <div className="card">
                  <img src={bruchetta} alt="food"/>
                  <h4> bruchetta &nbsp; &nbsp; $15.00</h4>
                  <p>Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil.</p>
                  <button className="btn">Order on Delivery</button>
            </div>
            <div className="card">
                  <img src={lemon} alt="food"/>
                  <h4> lemon dessert &nbsp; &nbsp; $13.00</h4>
                  <p>Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest.</p>
                  <button className="btn">Order on Delivery</button>
            </div>
            </div>
         </section>
        </>
    )
}