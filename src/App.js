import React from "react";
import "./App.scss";

import Navbar from "./components/Navbar";
import BookLists from "./components/BookList";
import { BookProvider } from "./contexts/BookContext";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Navbar />
        <BookLists/>
        <BookForm/>
      </BookProvider>
    </div>
  );
}

export default App;