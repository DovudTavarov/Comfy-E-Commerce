import logoBlack from "../images/logo-black.png";
import { useLocation } from "react-router-dom";
import logoWhite from "../images/logo-white.png";
import CartIcon from "./CartIcon";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav className={pathname !== "/" ? "navbar page" : "navbar"}>
      <div className="nav-center">
        <NavBarLinks />
        <img
          src={pathname !== "/" ? logoBlack : logoWhite}
          className="nav-logo"
          alt="logo"
        />
        <CartIcon />
      </div>
    </nav>
  );
}

export default NavBar;
