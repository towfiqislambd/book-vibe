import WatchlistBook from "./WatchlistBook";

const WatchlistBooks = () => {
    const wishBooks = localStorage.getItem('wishBooks');
    const wishBooksObj = JSON.parse(wishBooks);
    return (
        <div>
            {
                wishBooksObj.map((wishBook,idx) => <WatchlistBook wishBook={wishBook} key={idx}></WatchlistBook>)
            }
        </div>
    );
};

export default WatchlistBooks;