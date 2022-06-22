import React from "react";

function Pagination({
  pages,
  curPage,
  handleNext,
  handlePrev,
  nextDisabled,
  prevDisabled,
  handlePageChange,
}) {
  return (
    <div className="flex gap-3 mx-auto lg:ml-auto lg:mr-0 items-center">
      <button
        onClick={handlePrev}
        disabled={prevDisabled}
        className="px-3 py-2 font-medium text-base hover:bg-gray-200 rounded disabled:opacity-[50%] disabled:cursor-not-allowed"
      >
        Previous
      </button>
      {pages.map((pg) => (
        <button
          className={`px-3 py-2 font-medium text-base rounded ${
            curPage === pg
              ? "bg-primary text-white hover:bg-primary"
              : "hover:bg-gray-200"
          }`}
          onClick={() => handlePageChange(pg)}
        >
          {pg}
        </button>
      ))}
      <button
        disabled={nextDisabled}
        onClick={handleNext}
        className="px-3 py-2 font-medium text-base hover:bg-gray-200 rounded disabled:opacity-[50%] disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
