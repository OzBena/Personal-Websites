import Navbar from "./Component/Navbar/Navbar";
import './App.css'
import Intro from "./Component/Intro/Intro";
import Skills from "./Component/Skills/Skills";
import Portfolio from "./Component/Portfolio/Portfolio";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import UpButton from "./Component/UpButton/UpButton";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{
      background: darkMode? 'black' : '',
      color: darkMode ? "white" : '',
    }}
    >
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <UpButton/>
    </div>
  );
}

export default App;
