import image from "../assets/image-8.jpg";

function Header() {
  return (
    <>
      <header>
        
          
            <div className="header-subtitle">
              <h1>bring home a chic look with beautiful ready made curtains</h1>
            

          </div>

          <div className="header-img">
              <img src={image} alt="" />
            </div>

      </header>
    </>
  );
}

export default Header;
