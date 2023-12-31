import "./NavBar.css"


function NavBar() {
  
    return (
      <div className='NavBar'>
        <div className="gridHome grid"> <p className="rotate">:)</p></div>

        <div className="gridTitle grid">Micah Shumaker</div>
        <div className="gridNavOne grid">Projects</div>
        <div className="gridNavTwo grid">Blog</div>
        <div className="gridNavThree grid">Contact</div>
      </div>
    );
  }
  
  export default NavBar;