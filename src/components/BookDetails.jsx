import { useLoaderData, useParams } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const BookDetails = () => {
    const data = useLoaderData();
    const { bookId } = useParams();
    const bookIdNum = Number(bookId)
    const SingleBook = data.find(book => book.bookId === bookIdNum);
    const { image, bookName, author, rating, category, tags, review, totalPages, publisher, yearOfPublishing } = SingleBook;

    const handleReadBooks = book => {
        const existingBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
        existingBooks.push(book);
        localStorage.setItem('readBooks', JSON.stringify(existingBooks));
    }

    const handleWishBooks = book => {
        const existingBooksWish = JSON.parse(localStorage.getItem('wishBooks')) || [];
        existingBooksWish.push(book)
        localStorage.setItem('wishBooks', JSON.stringify(existingBooksWish));
    }

    return (
        <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="bg-slate-200 rounded-lg grid items-center justify-center h-[600px]">
                <img src={image} className="h-[400px] rounded-lg" />
            </div>
            <div className="space-y-3">
                <h3 className="text-2xl font-semibold">{bookName}</h3>
                <p className="text-gray-700 font-medium">By: {author}</p>
                <div className="flex justify-between text-gray-500">
                    <p>{category}</p>
                    <p className="flex items-center gap-1"><IoIosStarOutline /> {rating}</p>
                </div>
                <div className="divider"></div>
                <p className="text-gray-500"><span className="font-medium text-gray-700">Reviews:</span> {review}</p>
                <div className="flex gap-3 font-medium">Tags:
                    {
                        tags.map((tag, index) => <button className="text-[#32cf32d0]" key={index}>{tag}</button>)
                    }
                </div>
                <p className="text-gray-500"><span className="font-medium text-gray-700">Number Of Pages: </span>{totalPages}</p>
                <p className="text-gray-500"><span className="font-medium text-gray-700">Publisher: </span>{publisher}</p>
                <p className="text-gray-500"><span className="font-medium text-gray-700">Publish Year: </span>{yearOfPublishing}</p>
                <div className="flex gap-2">
                    <Link to="/" className="btn border-gray-700 text-gray-900 min-h-0 h-10">Back</Link>
                    <a onClick={() => handleReadBooks(SingleBook)} className="btn bg-[#47a7f5] min-h-0 h-10 text-gray-100">Read</a>
                    <a onClick={() => handleWishBooks(SingleBook)} className="btn bg-[#32cf32d0] min-h-0 h-10 text-gray-100">Wishlist</a>
                </div>
            </div>
        </div >
    );
};

export default BookDetails;