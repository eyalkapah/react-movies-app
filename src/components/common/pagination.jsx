import React from "react";

const Pagination = props => {
  const { itemsCount, pageSize } = props;
  let pages = [];

  let numberOfPages = Math.ceil(itemsCount / pageSize);

  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i + 1);
  }

  if (numberOfPages === 1) return null;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(p => (
          <li key={p} className="page-item">
            <a className="page-link" onClick={() => props.onPageChange({ p })}>
              {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
