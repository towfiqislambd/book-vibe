import ReadBook from "./ReadBook";

const ReadBooks = () => {
    const readBooks = localStorage.getItem('readBooks');
    const readBooksObj = JSON.parse(readBooks)

    return (
        <div>
            {
                readBooksObj.map((readBook, idx) => <ReadBook key={idx} readBook={readBook}></ReadBook>)
            }
        </div >
    );
};

export default ReadBooks;