import photo from './Assets/icons_assets/Mario and Adrian A.jpg';
import photo1 from './Assets/icons_assets/Mario and Adrian b.jpg';
export function About()
{
    return(
        <>
        <section className="about" id='about-section'>
            <div className="grid1" >
                  <div>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
                  </div>
                  <div className="double-image">
                        <img className="about-1" src={photo} alt="chef"/>
                        <img className="about-2" src={photo} alt="chef"/>
                  </div>
                  </div>
         </section>
        </>
    )
}