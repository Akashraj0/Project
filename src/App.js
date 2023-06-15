import './App.css';
import {Main} from './Components/Main';
import {Route,Routes} from 'react-router-dom';
import { Special } from './Components/Special';
import { Hero } from './Components/Hero';
import Login from './Components/Login';
import Bookingpage from './Pages/Bookingpage';
function App() {
  return (
    <div className="App">
      <>
      <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="about" element={<Hero/>}/>
                <Route path="menu" element={<Special/>}/>
                <Route path="bookingform" element={<Bookingpage/>}/>
                <Route path="Order online" element={<Main/>}/>
                <Route path="login" element={<Login/>}/>
      </Routes>
      </>
    </div>
  );
}
export default App;