import NavBar from "./Components/NavBar";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Section from "./Section";
import Vedioo from "./Vedioo";
import Bodyy from "./Bodyy";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section2 from "./Section2";
import Galerie from "./Galerie";
import Sectionend from "./Sectionend";
import Footer from "./Components/Footer";
import { Element } from "react-scroll";

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Hero2 />
      <Section />
      <Vedioo />
      <Bodyy />
      <Element name="Section3">
        <Section3 />
      </Element>
      <Element name="Section4">
        <Section4 />
      </Element>
      <Element name="Galerie">
        <Galerie />
      </Element>
      <Sectionend />
      <Section2 />
      <Footer />
    </div>
  );
}
