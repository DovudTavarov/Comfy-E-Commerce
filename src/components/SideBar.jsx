import { Link } from "react-router-dom";
import { useMyCustomContextApi } from "../hooks/custom";

function SideBar() {
  const { showNavBar, setShowNavBar } = useMyCustomContextApi();

  const showNavbarClass = showNavBar
    ? "sidebar-overlay show"
    : "sidebar-overlay";

  return (
    <div className={showNavbarClass}>
      {/* <div className="sidebar-overlay"> */}
      <aside className="sidebar">
        {/* close */}
        <button
          onClick={() => setShowNavBar(!showNavBar)}
          className="sidebar-close"
        >
          <i className="fa fa-times"></i>
        </button>
        {/* links */}
        <ul className="sidebar-links">
          <li>
            <Link
              to="/"
              onClick={() => setShowNavBar(!showNavBar)}
              className="sidebar-link"
            >
              <i className="fa fa-home fa-fw"></i>
              home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => setShowNavBar(!showNavBar)}
              className="sidebar-link"
            >
              <i className="fa fa-couch fa-fw"></i>
              products
            </Link>
          </li>
          <li>
            <Link
              to="about"
              onClick={() => setShowNavBar(!showNavBar)}
              className="sidebar-link"
            >
              <i className="fa fa-book fa-fw"></i>
              about
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default SideBar;
