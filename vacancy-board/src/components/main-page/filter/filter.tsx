import CategoryFilter from './category-filter/category-filter';
import SalaryFilter from './salary-filter/salary-filter';
import './filter.css';
import { useEffect, useState } from 'react';

export default function Filter(props: {
  category: string;
  paymentFrom: string;
  paymentTo: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setPaymentFrom: React.Dispatch<React.SetStateAction<string>>;
  setPaymentTo: React.Dispatch<React.SetStateAction<string>>;
  getVacancies: (pageNumber: number, resetPagination: boolean) => void;
}) {
  const [resetFilter, setResetFilter] = useState(false);
  useEffect(() => {
    if (
      resetFilter &&
      props.category === '' &&
      props.paymentFrom === '' &&
      props.paymentTo === ''
    ) {
      props.getVacancies(0, true);
      setResetFilter(false);
    }
  }, [props, resetFilter]);

  function handleReset() {
    props.setCategory('');
    props.setPaymentTo('');
    props.setPaymentFrom('');
    setResetFilter(true);
  }

  return (
    <div className='filter'>
      <section>
        <span>Фильтры</span>
        <button onClick={() => handleReset()}>
          <span>Сбросить все </span>
          <img
            src='close-icon.png'
            alt='close-icon'
          />
        </button>
      </section>
      <section>
        <span>Отрасль</span>
        <CategoryFilter
          category={props.category}
          setCategory={props.setCategory}
        />
      </section>
      <section>
        <span>Оклад</span>
        <SalaryFilter
          placeholder={'От'}
          paymentSize={props.paymentFrom}
          setPaymentSize={props.setPaymentFrom}
        />
        <SalaryFilter
          placeholder={'До'}
          paymentSize={props.paymentTo}
          setPaymentSize={props.setPaymentTo}
        />
      </section>
      <button onClick={() => props.getVacancies(0, true)}>Применить</button>
    </div>
  );
}
