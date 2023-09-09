import React, { useState } from "react";
import MenuCard from "../MenuCard/MenuCard";
import "../MenuList/MenuList.css";

//
const MenuList = ({ menuData }) => {
  const [searchInput, setSearchInput] = useState("");

  let dataToDisplay = menuData;

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  if (searchInput) {
    dataToDisplay = menuData.filter((menu) => {
      const { name } = menu;
      return name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }

  const renderContent = () => {
    if (dataToDisplay.length === 0) {
      return (
        <div className="Menu__noResult text-4xl font-bold">
          <p>No results for: {searchInput}</p>
        </div>
      )
    } else {
      return (
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {dataToDisplay.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <div className="Menu__search w-full p-4 bg-gray-100">
        <div class="relative h-10 w-2/5 min-w-[200px] mx-auto">
        <input
          value={searchInput}
          type="text"
          id="searchInput"
          placeholder=" "
          onChange={handleChange}
          className="peer h-full w-full rounded-[7px] border-2 border-gray-400 bg-white px-3 py-2.5 font-sans text-sm font-normal text-gray-400 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-4 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        />
        <label 
          className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-4 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          for="searchInput"
        >Search by name
        </label>    
        </div>
      </div>
      
      <section >
        {renderContent()}
      </section>
    </>
  );
}

export default MenuList;