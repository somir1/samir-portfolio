import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />

      <main className="w-full gap-2">
        <Hero />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
