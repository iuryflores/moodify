import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import {
  HomePage,
  QuestionList,
  MoodChoice,
  MoodSelection,
  MoodResult,
  MediaDetails,
  FilteredLists
} from "./pages";
import { NavBar } from "./components/NavBar";


const App = () => {
  return (
    <div className="App">
      {useLocation().pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mood-quiz" element={<QuestionList />} />
        <Route path="/mood-choice/:mood" element={<MoodChoice />} />
        <Route path="/mood-selection" element={<MoodSelection />} />
        <Route path="/mood-result/:mood" element={<MoodResult />} />
        <Route path="/mood-enhancer/:mood" element={<FilteredLists />} />
        <Route path="/media-details/:_id" element={<MediaDetails />} />
      </Routes>
    </div>
  );
};

export default App;
