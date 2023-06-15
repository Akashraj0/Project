import photo from './Assets/icons_assets/restaurant chef B.jpg';
export function Hero(props)
{
    return(
        <>
        <section className='hero'>
                  <div className="grid1">
                  <div>
                         <h1>Little Lemon</h1>
                         <h2>Chicago</h2>
                         <p>We are a family owned Mediterranean restaurant, located on Pedro Basso Street in Foz do Iguçu, Paraná. We focus
                    on traditional recipes served with a modern twist.</p>
                         <button className="btn">Reserve Table</button>
                  </div>
                  <div>
                        <img src={photo} alt="chef_picture"/>
                  </div>
                  </div>
           </section>
        </>
    )
}