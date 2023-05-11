import {
  Navbar,
  Home,
  About,
  Tutors,
  Aircraft,
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
      <Aircraft />
      <Boats />
      <Tutors />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
