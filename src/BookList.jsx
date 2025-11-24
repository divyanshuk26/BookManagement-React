import "./style.css";

import Book from "./Book";

function BookList(props) {
  // console.log("props", props)
  return (
    <div className="booklist">
      {props.BookData.map((data) => (
        <Book key={data.id} bookDetails={data} />
      ))}
    </div>
  );
}
export default BookList;
