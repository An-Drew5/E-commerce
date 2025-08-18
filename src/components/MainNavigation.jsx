import { Link } from "react-router-dom"

export default function MainNavigation () {
    return  <nav>
            <ul className="header-nav">
              <li>
                <Link to='/' className="header-link">Home</Link>
              </li>
              <li>
                <Link to='/curtain-fabrics' className="header-link">
                  Curtain Fabrics
                </Link>
              </li>
              <li>
                <Link to='/style-expert' className="header-link">
                  Style Expert
                </Link>
              </li>
              <li>
                <Link to="/ready-made-curtains" className="header-link">
                  Ready Made Curtains
                </Link>
              </li>
              <li>
                <Link to="/furniture" className="header-link">
                  Deco
                </Link>
              </li>
            </ul>
          </nav>
}