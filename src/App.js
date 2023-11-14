import "./App.css";
import { About } from "./components/about/About";
import { AboutUs } from "./components/about_us/AboutUs";
import { Benefit } from "./components/benefit/Benefit";
import { OutTeam } from "./components/out_team/OutTeam";
import { ProudOf } from "./components/proud_of/ProudOf";
import { Section } from "./components/section/Section";
import { Subcribe } from "./components/subcribe/Subcribe";
import { Footer } from "./layouts/footer/Footer";
import { Header } from "./layouts/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Section>
        <AboutUs />
        <ProudOf title={"What we are proud of."} />
        <About />

        <OutTeam />
        <Benefit />
        <Subcribe />
        <Footer />
      </Section>
    </div>
  );
}

export default App;
