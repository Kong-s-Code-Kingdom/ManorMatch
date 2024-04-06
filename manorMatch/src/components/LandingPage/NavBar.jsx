import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="bg-blue-500 w-screen">
      <div className="flex justify-start">
        <div>
          Logo
        </div>
        <div className="mx-2">
          About
        </div>
        <div className="mx-2">
          Contact
        </div>
      </div>
      <div className="mx-2 flex justify-end">
        <Link to="/login">
        Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;