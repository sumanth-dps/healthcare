import { Bell, Menu, Plus, Search } from "lucide-react";

const Header = ({ onMenuClick }) => (
  <div className="flex flex-col md:flex-row p-2  bg-white">
    <header className="flex items-center justify-between p-2 bg-white  lg:hidden">
      <button onClick={onMenuClick}>
        <Menu className="h-6 w-6 text-violet-900" />
      </button>
    </header>
    <div className="flex flex-row justify-between items-center w-full ">
      <div className="flex items-center bg-white rounded-md  p-1 m-1 md:m-2 md:mr-4 border-1 border-gray-300 ">
        <Search
          size={36}
          className="text-xl md:mr-2 text-black rounded-l-lg p-2  "
        />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow outline-none text-gray-700 placeholder-gray-400 md:pr-25 lg:pr-74"
        />
        <div>
          <Bell size={36} className="w-min text-violet-900 rounded-l-lg p-2" />
        </div>
      </div>

      <div>
        <div className="flex flex-row items-center justify-end gap-1 md:gap-3 p-1 m-1 md:m-2 md:mr-4">
          <img
            src="/avatar.png"
            alt="User"
            className=" rounded-md z-3 w-8 h-8"
          />
          <Plus size={32} className="text-white bg-violet-900 rounded-md p-1" />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
