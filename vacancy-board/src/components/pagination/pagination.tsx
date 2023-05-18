import nextPageIcon from '../../assets/next-page-icon.png';
import prevPageIcon from '../../assets/prev-page-icon.png';
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
      pageCount={props.totalPages}
    />
  );
}
