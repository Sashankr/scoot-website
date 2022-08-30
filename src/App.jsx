import "./App.css";
import Banner from "./components/Banner";
import HowToUse from "./components/HowToUse";
import ImageWithContent from "./components/ImageWithContent";
import Navbar from "./components/Navbar";
import { homeImageWithContentSection } from "./helpers/mock";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <HowToUse />
      {homeImageWithContentSection.map((data) => {
        return (
          <ImageWithContent
            key={data.id}
            arrowIconDirection={data.arrowIconDirection}
            thumbnail={data.thumbnail}
            title={data.title}
            description={data.description}
            isButtonRequired={data.isButtonRequired}
            buttonText={data.buttonText}
            alignTopwards={data.alignTopwards}
          />
        );
      })}
    </div>
  );
}

export default App;
