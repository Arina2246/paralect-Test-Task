import { useEffect, useState } from 'react';
import Header from '../header/header';
import { getVacanciesData } from '../../services/api';
import Filter from './filter/filter';
import Search from './search/search';
import VacancyCard from '../vacancy-card/vacancy-card';
import { Vacancy } from '../../types/vacansy';
import Loading from '../loading/loading';
import { useNavigate } from 'react-router-dom';
import Pagination from '../pagination/pagination';
import './main.page.css';

export default function MainPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [vacancies, setVacansies] = useState<Vacancy[]>([]);
  const [categories, setCategories] = useState<string>('');
  const [paymentFrom, setPaymentFrom] = useState<string>('');
  const [paymentTo, setPaymentTo] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [resetPagination, setResetPagination] = useState<number>(0);

  useEffect(() => {
    getVacancies(page, false);
  }, [page]);

  function getVacancies(pageNumber: number, rstPagination: boolean) {
    setLoading(true);
    if (rstPagination) {
      setResetPagination(resetPagination + 1);
    }
    getVacanciesData(
      searchValue,
      paymentFrom,
      paymentTo,
      categories,
      String(pageNumber)
    ).then((data: { vacancies: Vacancy[]; totalPages: number }) => {
      setLoading(false);
      if (!data.totalPages) {
        navigate('/404');
      }
      setTotalPages(data.totalPages);
      setVacansies(data.vacancies);
    });
  }

  return (
    <div className='main-page'>
      <Header></Header>
      <div className='main-page-container'>
        <Filter
          setCategories={setCategories}
          setPaymentFrom={setPaymentFrom}
          setPaymentTo={setPaymentTo}
          getVacancies={getVacancies}
        />
        <div className='search-container'>
          <Search
            setSearchValue={setSearchValue}
            getVacancies={getVacancies}
          />
          {!loading ? (
            vacancies.map((elem) => {
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
            })
          ) : (
            <Loading />
          )}
          <Pagination
            setPage={setPage}
            totalPages={totalPages}
            resetPagination={resetPagination}
          />
        </div>
      </div>
    </div>
  );
}

// клик на вакансию

// добавление в избранное
// страничка избранное

//добавить подсвечивание странички в not found and vacancy
//раскинуть методы апи
//переделать чек ап
