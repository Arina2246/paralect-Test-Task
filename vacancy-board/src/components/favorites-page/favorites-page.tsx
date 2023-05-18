import { useEffect, useState } from 'react';
import Header from '../header/header';
import { Vacancy } from '../../types/vacansy';
import { getFavorites, getFavoritesPerPage } from '../../services/favorites';
import { useNavigate } from 'react-router-dom';
import VacancyCard from '../vacancy-card/vacancy-card';
import './favorites-page.css';
import Pagination from '../pagination/pagination';
import { getPagesCount } from '../../services/pagination';
import { VACANCIES_PER_PAGE } from '../../constants/pagination';

export default function FavoritesPage() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<Vacancy[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const favoritesList = getFavorites() as Vacancy[];
    if (favoritesList && favoritesList.length) {
      setTotalPages(getPagesCount(favoritesList.length));
      const favoritesPerPage = getFavoritesPerPage(page, favoritesList);
      setFavorites(favoritesPerPage);
    } else {
      navigate('/favorites/404');
    }
  }, [page]);

  return (
    <>
      <Header></Header>
      <div className='favorites-page'>
        {favorites.map((elem) => {
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
