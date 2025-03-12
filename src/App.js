import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import BookList from "./components/BookList/BookList"
import BookForm from "./components/BookForm/BookForm"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/booklist" element={<BookList/>} />
          <Route path="/bookform" element={<BookForm/>} />
        </Routes>
      </div>
    </Router>
  );
}