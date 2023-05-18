import { useCallback, useEffect, useState } from 'react';
import closeIcon from '../../../assets/close-icon.png';
import CategoryFilter from './category-filter/category-filter';
import SalaryFilter from './salary-filter/salary-filter';
import { FilterProps } from '../../../types/props';
import './filter.css';

export default function Filter({
  category,
  paymentFrom,
  paymentTo,
  setCategory,
  setPaymentFrom,
  setPaymentTo,
  getVacancies,
}: FilterProps) {
  const [resetFilter, setResetFilter] = useState(false);

  useEffect(() => {
    if (
      resetFilter &&
      category === '' &&
      paymentFrom === '' &&
      paymentTo === ''
    ) {
      getVacancies(0, true);
      setResetFilter(false);
    }
  }, [category, paymentFrom, paymentTo, resetFilter, getVacancies]);

  const handleReset = useCallback(() => {
    setCategory('');
    setPaymentTo('');
    setPaymentFrom('');
    setResetFilter(true);
  }, [setCategory, setPaymentFrom, setPaymentTo]);

  return (
    <div className='filter'>
      <section>
        <span>Фильтры</span>
        <button onClick={() => handleReset()}>
          <span>Сбросить все </span>
          <img
            src={closeIcon}
            alt='close-icon'
          />
        </button>
      </section>
      <section>
        <span>Отрасль</span>
        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />
      </section>
      <section>
        <span>Оклад</span>
        <SalaryFilter
          placeholder={'От'}
          paymentSize={paymentFrom}
          setPaymentSize={setPaymentFrom}
        />
        <SalaryFilter
          placeholder={'До'}
          paymentSize={paymentTo}
          setPaymentSize={setPaymentTo}
        />
      </section>
      <button onClick={() => getVacancies(0, true)}>Применить</button>
    </div>
  );
}
