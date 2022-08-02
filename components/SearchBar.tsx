import React from "next";

export function SearchBar() {
  return (
    <div className="flex space-x-3">
      <input
        className="border-AppGreen border-2 cursor-pointer rounded-xl p-3"
        type="text"
        placeholder="Job search ..."
        name=""
        id=""
      />
      <button className="bg-AppOrange p-3 rounded-xl text-AppWhite cursor-pointer">
        Search
      </button>
    </div>
  );
}
