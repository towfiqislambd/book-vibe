
const Header = () => {
    return (
        <div className="lg:flex gap-20 bg-slate-100 rounded-xl justify-center items-center py-20">
            <div>
                <h1 className="text-4xl font-sans font-semibold mb-7">Books to freshen up <br /> your bookshelf</h1>
                <button className="btn bg-[#36dd36] min-h-0 h-11 text-gray-100">View The List</button>
            </div>
            <div className="mt-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnw50byMFGA9YIMCPbnmSMK2LKxAs3UfO0AoRyIIAVK-VAiJ5jVuorci0jH2z0GS3vII&usqp=CAU" className="lg:w-96" />
            </div>
        </div>
    );
};

export default Header;