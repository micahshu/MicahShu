import React, { useState } from 'react';
import './NavBar.css';

// Create a separate Menu component
const Menu = ({ onClose }) => (
    <>
    {/* Add your menu items or components here */}
    <div className={`gridNavOne font`} onClick={onClose}>Micah Shumaker</div>
    <div className="gridNavTwo font" onClick={onClose}>Home</div>
    <div className="gridNavThree font" onClick={onClose}>Projects</div>
    <div className="gridNavFour font" onClick={onClose}>Blog</div>
    <div className="gridNavFive font" onClick={onClose}>Contact</div>
    </>
  
);

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    // Toggle the menu state
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    // Your menu item click logic goes here
    console.log('Menu item clicked!');
    // Close the menu after handling the click event
  };

  return (
    <div className={`NavBar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div onClick={handleMenuClick} className="gridMenu"> <p className='noMargin'>:)</p></div>
      
      {/* Conditionally render the menu based on the state */}
      {isMenuOpen && <Menu onClose={handleMenuItemClick} />}
    </div>
  );
}

export default NavBar;
