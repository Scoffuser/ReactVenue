import './resources/styles.css'

import Header from './components/header_footer/Header';
import Featured from './components/Featured';
import VenueNfo from './components/VenueNfo';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';

function App() {
  return (
    <div
      className="App"
      style={{
      height:'1500px',
      background:'cornflowerblue'
       }}
    >
      <Header/>
      <Featured/>
      <VenueNfo/>
      <Highlights/>
      <Pricing/>
      <Location/>

    </div>
  );
}

export default App;
