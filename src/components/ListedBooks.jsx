import ReadBooks from "./ReadBooks";
import WatchlistBooks from "./WatchlistBooks";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ListedBooks = () => {
    return (
        <div className="py-5">
            <Tabs>
                <TabList className="text-gray-500 font-medium">
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel><ReadBooks></ReadBooks></TabPanel>
                <TabPanel><WatchlistBooks></WatchlistBooks></TabPanel>
            </Tabs>
        </div>
    )
}

export default ListedBooks;