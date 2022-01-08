import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className = "navbar">
            <h1 className='navbar-header'>Breaking bad api</h1>
            <div className="links">
                <a href='/' className="fas fa-home"> Home</a>
            </div>
        </div>
      );
}
 
export default NavBar;