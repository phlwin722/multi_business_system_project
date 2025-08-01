import { useState } from "react";

const NavBarMainLayout = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <>
      <div className="grid grid-cols-2 items-center h-13 border-bottom">
        {/* Left side */}
        <div className="flex justify-start items-center pl-5 md:pl-10  gap-3">
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`h-0.5 w-6 bg-gray-800 my-1 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
          <p className="cursor-pointer font-bold pt-[14px]">MuBui</p>
        </div>

        {/* Right side */}
        <div className="flex justify-end items-center gap-4 pr-5 md:pr-10 ">
          <p>ga</p>
          <button
            class="bg-red-500 w-10 h-10"
            style={{borderRadius: '50%' }}
            title="Add New"
          >
            p
          </button>
        </div>
      </div>

      {isOpen && (
        <ul
          className="md:hidden mt-4 space-y-2 text-gray-700 font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          <li className="cursor-pointer hover:text-black-700">Dashboard</li>
          <li className="cursor-pointer hover:text-black-700">Settings</li>
          <li className="cursor-pointer hover:text-black-700">Logout</li>
        </ul>
      )}
    </>
  );
};

export default NavBarMainLayout;
