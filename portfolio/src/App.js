import './App.css';
import HomeHero from './Homepage/HeroSection/HomeHero';
import NavBar from './NavBar/NavBar';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <HomeHero />
      <div className='big'></div>
    </div>
  );
}

export default App;
