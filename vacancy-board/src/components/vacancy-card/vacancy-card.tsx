import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Vacancy } from '../../types/vacansy';
import './vacancy-card.css';

export default function VacancyCard(props: Vacancy) {
  const navigate = useNavigate();
  const [salary, setSalary] = useState('');

  useEffect(() => {
    if (!props.paymentFrom && !props.paymentTo) {
      setSalary('не указана');
    } else if (props.paymentFrom && props.paymentTo) {
      setSalary(`${props.paymentFrom} - ${props.paymentTo} ${props.currency}`);
    } else if (props.paymentFrom) {
      setSalary(`от ${props.paymentFrom} ${props.currency}`);
    } else if (props.paymentTo) {
      setSalary(`до ${props.paymentTo} ${props.currency}`);
    }
  }, [props]);

  return (
    <div
      className='vacancy-card'
      onClick={() => navigate(`/${props.id}`)}
    >
      <img
        src='star-icon.png'
        alt='star-icon'
      />
      <p>{props.profession}</p>
      <section className='vacancy-card-salary'>
        <span>з/п {salary}</span>
        <span>•</span>
        <span>{props.workType}</span>
      </section>
      <section className='vacancy-card-location'>
        <img
          src='location-icon.png'
          alt='location-icon'
        />
        <span>{props.town}</span>
      </section>
    </div>
  );
}
