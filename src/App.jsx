import BookList from "./BookList";
import { books } from "./utils/mockData";
import "./style.css";
import { useState } from "react";
function App() {

  const[serchText, setSerchText] = useState("");
  const[filteredBooks, setfilteredBooks] = useState(books)
  function handleSearch(){
    console.log(serchText, "serchText")
    const filterbooks = books.filter((book)=> book.title.toLowerCase().includes(serchText.toLowerCase()));
    console.log(filterbooks,"filtered books ")
    setfilteredBooks(filterbooks);

  }

  return (
    <>
    <div className="search">
    <h2>Search Books</h2>
    <input  className = "serchBox" type="text" onChange={(e) => setSerchText(e.target.value) } />
    <button onClick={handleSearch}>Search</button>
    </div>
      <BookList BookData={filteredBooks} />
    </>
  );
}

export default App;
