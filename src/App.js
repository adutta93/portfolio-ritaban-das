import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import StoryBoard from "./Components/StoryBoard";

import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/story-board" component={StoryBoard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
