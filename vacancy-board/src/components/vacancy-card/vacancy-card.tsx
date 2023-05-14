import { useState, useEffect } from 'react';
import './vacancy-card.css';

export default function VacancyCard(props: {
  profession: string;
  paymentFrom: number;
  paymentTo: number;
  workType: string;
  town: string;
}) {
  const [salary, setSalary] = useState('');

  useEffect(() => {
    if (!props.paymentFrom && !props.paymentTo) {
      setSalary('не указана');
    } else if (props.paymentFrom && props.paymentTo) {
      setSalary(`${props.paymentFrom} - ${props.paymentTo}`);
    } else if (props.paymentFrom) {
      setSalary(`от ${props.paymentFrom}`);
    } else if (props.paymentTo) {
      setSalary(`до ${props.paymentTo}`);
    }
  }, [props]);

  return (
    <div className='vacancy-card'>
      <img
        src='star-icon.png'
        alt='star-icon'
      />
      <p>{props.profession}</p>
      <section>
        <span>з/п {salary}</span>
        <span>•</span>
        <span>{props.workType}</span>
      </section>
      <section>
        <img
          src='location-icon.png'
          alt='location-icon'
        />
        <span>{props.town}</span>
      </section>
    </div>
  );
}
