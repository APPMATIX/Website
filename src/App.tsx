import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Services from "./components/Services";
import Story from "./components/Story";
import Footer from "./components/Footer";
import Why from "./components/Why";
// import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <About />
      <Why />
      <Story />
      <Services />
      <Footer />
      {/* <Contact/> */}
    </>
  );
}

export default App;
