import React from "react";

const Pagination = ({
  updatePage,
  currentPage,
  totalPageCount,
  next,
  prev,
}) => {
  let pagination = [];

  for (let index = 1; index <= totalPageCount; index++) {
    pagination.push(index);
  }

  return (
    <>
      <p className="pages-count">
        Page {currentPage} of {totalPageCount} pages
      </p>
      <div className="buttons">
        <button
          disabled={currentPage <= 1}
          onClick={prev}
          className="pagination-btn"
        >
          Prev
        </button>
        {pagination.map((page, index) => {
          return (
            <button onClick={updatePage} key={index} className="pagination-btn">
              {page}
            </button>
          );
        })}
        <button
          disabled={currentPage >= totalPageCount}
          onClick={next}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
