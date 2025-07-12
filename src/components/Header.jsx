function Header() {
  return (
    <header className="header">
      <div className="header-title">QUICK CURTAINS AND DECO</div>
      <nav>
        <ul className="header-nav">
          <li>
            <a href="#home" className="header-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="header-link">
              Shop
            </a>
          </li>
          <li>
            <a href="#contact" className="header-link">
              Discover
            </a>
          </li>
          <li>
            <a href="#test" className="header-link">
              Style Expert
            </a>
          </li>
          <li>
            <a href="ready-made-curtains" className="header-link">
                Ready Made Curtains
            </a>
          </li>
          <li>
            <a href="store-locator" className="header-link">
                Store Locator
            </a>
          </li>
          <li>
            <a href="furniture" className="header-link">
                Furniture
            </a>
          </li>
          <li>
            <a href="outdoor" className="header-link">
                Outdoor
            </a>
          </li>
        </ul>
      </nav>
      <div className="header-subtitle">
        <p>bring home a chic look with beautiful ready made curtains</p>
      </div>
    </header>
  );
}

export default Header;
