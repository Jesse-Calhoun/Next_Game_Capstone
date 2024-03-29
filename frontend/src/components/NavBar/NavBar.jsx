import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar position-fixed">
      <ul>
        <li>
          {user && (<button onClick={() => navigate(`/profile/${user.id}`)}>Profile</button>)}
        </li>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color:'dodgerblue' }}>
            <b>NextGame</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
              )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
