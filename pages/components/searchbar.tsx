import { FiSearch as Search } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="relative flex items-center gap-3 border border-gray-300 w-full py-3 px-3">
        <label htmlFor="search">
            <Search className="cursor-pointer text-gray-400"/>
        </label>
        <input type="text" id="search" placeholder="Search..." className="border-none outline-none bg-inherit w-full"/>
    </div>
  )
}

export default SearchBar
