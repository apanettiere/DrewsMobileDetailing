import {
  Navbar,
  Home,
  About,
  Tutors,
  Boats,
  Contact,
  Subjects,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="font-Montserrat bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Subjects />
      <Boats />
      <Tutors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
