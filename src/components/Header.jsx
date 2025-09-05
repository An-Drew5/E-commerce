import image from '../assets/image-8.jpg'

function Header() {
  return (
    <>
      <header>
        <div className="header">
         

          <div className="header-img">
            <img src={image} alt="" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
