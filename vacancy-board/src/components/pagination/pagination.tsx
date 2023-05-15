import ReactPaginate from 'react-paginate';
import './pagination.css';

export default function Pagination(props: {
  resetPagination: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}) {
  const handlePageClick = (event: { selected: number }) => {
    props.setPage(event.selected);
  };
  return (
    <ReactPaginate
      key={props.resetPagination}
      breakLabel=''
      nextLabel={
        <img
          src='next-page-icon.png'
          alt='next-page'
        />
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={0}
      activeClassName='active-page'
      pageClassName='page'
      pageCount={props.totalPages}
      previousLabel={
        <img
          src='prev-page-icon.png'
          alt='prev-page'
        />
      }
    />
  );
}
