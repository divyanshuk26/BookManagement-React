import "./style.css";

function Book(props){
    return(
        <div className="bookCard">
        <img src={props.bookDetails.image} className="bookImage" />
        <div>
            <h2 className="bookTitle">{props.bookDetails.title}</h2>
            <p className="bookAuthor">{props.bookDetails.author}</p>
            <p className="bookYear">{props.bookDetails.year}</p>
            <p className="bookGenere">{props.bookDetails.genere}</p>
            <p className="bookRating">{props.bookDetails.rating}</p>
            <p className="bookDescription">{props.bookDetails.description}</p>

        </div> 
        </div>
    )
}
export default Book;
