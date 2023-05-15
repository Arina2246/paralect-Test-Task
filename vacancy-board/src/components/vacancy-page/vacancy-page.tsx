import { useParams } from 'react-router-dom';
import { getVacancyById } from '../../services/api';
import { useEffect, useState } from 'react';
import { Vacancy } from '../../types/vacansy';
import VacancyCard from '../vacancy-card/vacancy-card';
import Header from '../header/header';
import './vacancy-page.css';
import Loading from '../loading/loading';

export default function VacancyPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [vacancy, setVacancy] = useState<Vacancy | null>(null);

  useEffect(() => {
    setLoading(true);
    getVacancyById(String(id)).then((data: Vacancy) => {
      setLoading(false);
      setVacancy(data);
    });
  }, []);

  return (
    <>
      <Header />
      {!loading ? (
        <div className='vacancy-page'>
          {vacancy && (
            <>
              <VacancyCard
                id={vacancy.id}
                profession={vacancy.profession}
                paymentFrom={vacancy.paymentFrom}
                paymentTo={vacancy.paymentTo}
                workType={vacancy.workType}
                currency={vacancy.currency}
                town={vacancy.town}
                template={vacancy.template}
              />
              <div
                className='vacancy-template'
                dangerouslySetInnerHTML={{ __html: vacancy.template }}
              ></div>
            </>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
