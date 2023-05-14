import { useEffect, useState } from 'react';
import Header from '../header/header';
import { getVacanciesData } from '../../services/api';
import { VacancyResponse } from '../../types/api';
import Filter from './filter/filter';
import Search from './search/search';
import VacancyCard from '../vacancy-card/vacancy-card';
import { Vacancy } from '../../types/vacansy';
import Loading from '../loading/loading';
import { useNavigate } from 'react-router-dom';
import './main.page.css';

export default function MainPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [vacancies, setVacansies] = useState<Vacancy[]>([]);
  const [categories, setCategories] = useState<string>('');
  const [paymentFrom, setPaymentFrom] = useState<string>('');
  const [paymentTo, setPaymentTo] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    getVacancies();
  }, []);

  function getVacancies() {
    setLoading(true);
    getVacanciesData(searchValue, paymentFrom, paymentTo, categories).then(
      (data: VacancyResponse[]) => {
        setLoading(false);
        if (!data.length) {
          console.log('j');
          navigate('/404');
        }
        const vacanciesData = data.map((vacancy) => {
          return {
            id: String(vacancy.id),
            profession: vacancy.profession,
            paymentTo: vacancy.payment_to,
            paymentFrom: vacancy.payment_from,
            workType: vacancy.type_of_work.title,
            town: vacancy.town.title,
            currency: vacancy.currency,
            template: vacancy.vacancyRichText,
          };
        });
        setVacansies(vacanciesData);
      }
    );
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
                  profession={elem.profession}
                  paymentFrom={elem.paymentFrom}
                  paymentTo={elem.paymentTo}
                  workType={elem.workType}
                  town={elem.town}
                />
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

// пагинация

// клик на вакансию
// добавление в избранное

// сохранение фильтров
