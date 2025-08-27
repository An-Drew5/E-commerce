import { Link } from "react-router-dom"

export default function MainNavigation () {
    return  <nav>
            <ul className="header-nav">
              <li>
                <Link to='/' className="header-nav-link">Home</Link>
              </li>
              <li>
                <Link to='/curtain-fabrics' className="header-nav-link">
                  Curtain Fabrics
                </Link>
              </li>
              <li>
                <Link to='/style-expert' className="header-nav-link">
                  Style Expert
                </Link>
              </li>
              <li>
                <Link to="/ready-made-curtains" className="header-nav-link">
                  Ready Made Curtains
                </Link>
              </li>
              <li>
                <Link to="/window-blinds" className="header-nav-link">
                  Window Blinds
                </Link>
              </li>
              <li>
                <Link to="/wallpapers" className="header-nav-link">
                  Wallpapers
                </Link>
              </li>
            </ul>
          </nav>
}