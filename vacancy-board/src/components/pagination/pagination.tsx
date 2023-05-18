import nextPageIcon from '../../assets/next-page-icon.png';
import prevPageIcon from '../../assets/prev-page-icon.png';
import ReactPaginate from 'react-paginate';
import './pagination.css';
import { PaginationProps } from '../../types/props';
import { useCallback } from 'react';

export default function Pagination({
  resetPagination,
  setPage,
  totalPages,
}: PaginationProps) {
  const handlePageClick = useCallback(
    (event: { selected: number }) => {
      setPage(event.selected);
    },
    [setPage]
  );

  return (
    <ReactPaginate
      key={resetPagination}
      breakLabel=''
      previousLabel={
        <img
          src={prevPageIcon}
          alt='prev-page'
        />
      }
      nextLabel={
        <img
          src={nextPageIcon}
          alt='next-page'
        />
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={0}
      activeClassName='active-page'
      pageClassName='page'
      pageCount={totalPages}
    />
  );
}
