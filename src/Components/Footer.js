import logo from './Assets/icons_assets/Logo.svg';
export function Footer()
{
    return(
        <footer>
            <div className="grid2">
                  <div className="imgfooter"><img src={logo} alt="logo"/></div>
                  <div>
                        <h5> Doormat Navigation </h5>
                        <h6>Home</h6>
                        <h6>About</h6>
                        <h6>Menu</h6>
                        <h6>Reservation</h6>
                        <h6>Order online</h6>
                        <h6>Login</h6>
                  </div>
                  <div>
                        <h5>Contact</h5>
                        <h6>Address</h6>
                        <h6>Phone Number</h6>
                        <h6>Email</h6>
                  </div>
                  <div>
                        <h5>Social Media Link</h5>
                        <h6>Address</h6>
                        <h6>Phone Number</h6>
                        <h6>Email</h6>
                  </div>
            </div>
        </footer>
    );
}