import './HomeHero.css'
import image from '../../img/78711034.jpeg'
function HomeHero() {
  
    return (
      <div className='homeHero'>
        <h1 className='heroTitle'>About Me</h1>
        <div className='heroContentContainer'>
            <div className='heroLeft'>
                <p className='imgText'>Hey thats me!</p>
                <img className='heroImg' src={image} />
            </div>
            <div className='heroRight'> Hi</div>
        </div>
      </div>
    );
  }
  
  export default HomeHero;