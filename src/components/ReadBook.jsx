import { Link } from "react-router-dom";

const ReadBook = ({ readBook }) => {
    const { bookId, image, bookName, author, rating, category, tags, totalPages, publisher, yearOfPublishing } = readBook;
    return (
        <div className="lg:grid grid-cols-3 gap-10 items-center border p-5 mb-5">
            <div className="bg-slate-200 rounded-lg grid items-center justify-center h-[250px]">
                <img src={image} className="h-[170px] w-full rounded-lg" />
            </div>
            <div className="space-y-4 col-span-2">
                <h3 className="text-2xl font-semibold">{bookName}</h3>
                <p className="text-gray-700 font-medium">By: {author}</p>
                <div className="md:flex gap-12">
                    <div className="flex gap-3 font-medium">Tags:
                        {
                            tags.map((tag, index) => <button className="text-[#32cf32d0]" key={index}>#{tag}</button>)
                        }
                    </div>
                    <p className="text-gray-500"><span className="font-medium text-gray-700">Publish Year: </span>{yearOfPublishing}</p>
                </div>
                <div className="md:flex gap-7">
                    <p className="text-gray-500"><span className="font-medium text-gray-700">Publisher: </span>{publisher}</p>
                    <p className="text-gray-500"><span className="font-medium text-gray-700">Pages: </span>{totalPages}</p>
                </div>
                <div className="flex gap-1 md:gap-3 flex-wrap">
                    <Link className="text-sky-500 font-semibold rounded-full bg-[#46c2f365] text-sm px-4 py-2">Category: {category}</Link>
                    <Link className="text-orange-400 font-semibold rounded-full bg-[#ffa60075] text-sm px-4 py-2">Rating: {rating}</Link>
                    <Link to={`/books/${bookId}`} className="btn hover:bg-[#36dd36] bg-[#36dd36] min-h-0 h-10 text-gray-100 rounded-full">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ReadBook;