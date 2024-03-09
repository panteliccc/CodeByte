import React from "react";

function Pagination() {
  return (
    <div className={`container flex justify-between`}>
      <div
        className={`bg-black text-white p-5 rounded-md w-36 text-center cursor-pointer`}
      >
        Previous
      </div>
      <div
        className={`bg-black text-white p-5 rounded-md w-36 text-center cursor-pointer`}
      >
        Next
      </div>
    </div>
  );
}

export default Pagination;
