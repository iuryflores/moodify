import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  MoodQuiz,
  MoodChoice,
  MoodSelection,
  MoodResult,
  MoodEnhancer,
  MediaDetails,
} from "./pages";
import { NavBar } from "./components/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mood-quiz" element={<MoodQuiz />} />
        <Route path="/mood-choice/:mood" element={<MoodChoice />} />
        <Route path="/mood-selection" element={<MoodSelection />} />
        <Route path="/mood-result" element={<MoodResult />} />
        <Route path="/mood-enhancer" element={<MoodEnhancer />} />
        <Route path="/media-detail/:id" element={<MediaDetails />} />
      </Routes>
    </div>
  );
};

export default App;
