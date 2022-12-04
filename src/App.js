import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import RandomQuotes from "./components/pages/RandomQuotes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/randomQuotes" element={<RandomQuotes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
