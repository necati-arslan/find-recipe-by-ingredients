import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav style={{ width: "100%" }}>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            className={`${currentPage === number && "active"}`}
            onClick={() => paginate(number)}
            key={number}
          >
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
