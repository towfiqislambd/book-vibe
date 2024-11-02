import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId,image, bookName, author, rating, category, tags } = book;
    return (
        <div className="border rounded-xl p-5 space-y-3">
            <img src={image} className="w-full h-56 rounded-lg" />
            <div className="flex gap-3 text-[#32cf32d0] font-medium">
                {
                    tags.map((tag, index) => <button key={index}>{tag}</button>)
                }
            </div>
            <h3 className="text-2xl font-semibold">{bookName}</h3>
            <p className="text-gray-700 font-medium">By: {author}</p>
            <div className="divider"></div>
            <div className="flex justify-between text-gray-500">
                <p>{category}</p>
                <p className="flex items-center gap-1"><IoIosStarOutline /> {rating}</p>
            </div>
            <Link to={`/books/${bookId}`} className="btn hover:bg-[#36dd36] bg-[#36dd36] min-h-0 h-11 text-gray-100">View Details</Link>
        </div>
    );
};

export default Book;