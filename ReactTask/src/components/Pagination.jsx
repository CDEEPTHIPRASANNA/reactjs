function Pagination({ currentPage, totalPages, previousPage, nextPage, onPageClick }) {
  const pageNumbers = [];

  for (let index = 1; index <= totalPages; index += 1) {
    pageNumbers.push(index);
  }

  return (
    <div className="pagination">
      <button onClick={previousPage} disabled={currentPage === 1}>
        Previous
      </button>

      <div className="page-numbers">
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`page-number ${page === currentPage ? "active" : ""}`}
            onClick={() => onPageClick(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
