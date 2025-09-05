import GeneralPageHeader from "../components/GeneralPageHeader";
import image from "../assets/image-9.jpg"
export default function StyleExpertPage() {
  return (
    <>
      <h1>This is style Page</h1>

      <GeneralPageHeader>
        <div className="header-description">
            <p>Discover our exquisite range of ready-made curtains that blend
                style and functionality. Perfect for any room, these curtains
                are designed to enhance your home decor with elegance.</p>
        </div>

        <div className="general-header-img">
            <img src={image} alt="" />
        </div>
      </GeneralPageHeader>

      <div>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, nihil. Fuga atque omnis enim suscipit consequatur neque laudantium? Excepturi aspernatur assumenda quaerat ut nihil repudiandae voluptas natus repellat odit incidunt?
        </p>
      </div>
    </>
  );
}
