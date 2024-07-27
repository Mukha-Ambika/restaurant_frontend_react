import './App.css';
import {Nav,Home,Popularcatagories,Standoutdishes,Ourbestchef,Ourservices,Footer} from './containers'

function App() {
  return (
    <div className="App">
     <Nav/>
     <Home/>
     <Popularcatagories/>
     <Standoutdishes/>
     <Ourbestchef/>
     <Ourservices/>
     <Footer/>
    </div>
  );
}

export default App;
