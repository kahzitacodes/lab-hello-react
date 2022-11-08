import {Navbar} from "./components/Navbar";
import {Hero} from "./components/Hero";
import {Features} from "./components/Features";
import {Card} from "./components/Card";

import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero title="Say hello to ReactJS"/>
      <Features>
        <Card img={icon1} title="Declarative" text="React makes it painless to create interactive UIs."/>
        <Card img={icon2} title="Components" text="Build encapsulated components that manage their state."/>
        <Card img={icon3} title="Single-Way" text="A set of immutable values are passed to the component's."/>
        <Card img={icon4} title="JSX" text="Statically-typed, designed to run on modern browsers."/>
      </Features>
    </div>
  );
}

export default App;
