import "./App.css";
import ImageData from "./imagesData.json";
function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <div className="grid">
        {ImageData.map((image, index) => (
          <div className="box" key={index}>
            {/* <h1>{image.name}</h1> */}
            <img src={image.imagePath} alt="grid-item" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
