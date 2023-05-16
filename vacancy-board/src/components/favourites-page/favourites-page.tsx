import { useEffect, useState } from 'react';
import Header from '../header/header';
import { Vacancy } from '../../types/vacansy';
import { getFavourites } from '../../services/favourites';
import { useNavigate } from 'react-router-dom';
import VacancyCard from '../vacancy-card/vacancy-card';
import './favourites-page.css';
import Pagination from '../pagination/pagination';
import getPagesCount from '../../services/pagination';
import { VACANCIES_PER_PAGE } from '../../constants/pagination';

export default function FavouritesPage() {
  const navigate = useNavigate();
  const [favourites, setFavourites] = useState<Vacancy[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const favouritesList = getFavourites() as Vacancy[];
    if (favouritesList && favouritesList.length) {
      setTotalPages(getPagesCount(favouritesList.length));
      const favouritesPerPage = getFavouritesPerPage(favouritesList);
      setFavourites(favouritesPerPage);
    } else {
      navigate('/404');
    }
  }, [page]);

  function getFavouritesPerPage(vacancies: Vacancy[]) {
    const pageStart = page * VACANCIES_PER_PAGE;
    const favouritesPerPage = vacancies.slice(
      pageStart,
      pageStart + VACANCIES_PER_PAGE
    );
    return favouritesPerPage;
  }

  return (
    <>
      <Header></Header>
      <div className='favourites-page'>
        {favourites.map((elem) => {
          return (
            <VacancyCard
              key={elem.id}
              id={elem.id}
              profession={elem.profession}
              paymentFrom={elem.paymentFrom}
              paymentTo={elem.paymentTo}
              workType={elem.workType}
              currency={elem.currency}
              town={elem.town}
              template={elem.template}
            />
          );
        })}
        <Pagination
          resetPagination={totalPages}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}
