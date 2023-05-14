import CategoryFilter from './category-filter/category-filter';
import SalaryFilter from './salary-filter/salary-filter';
import './filter.css';

export default function Filter(props: {
  setCategories: React.Dispatch<React.SetStateAction<string>>;
  setPaymentFrom: React.Dispatch<React.SetStateAction<string>>;
  setPaymentTo: React.Dispatch<React.SetStateAction<string>>;
  getVacancies: () => void;
}) {
  return (
    <div className='filter'>
      <section>
        <span>Фильтры</span>
        <button>
          <span>Сбросить все </span>
          <img
            src='close-icon.png'
            alt='close-icon'
          />
        </button>
      </section>
      <section>
        <span>Отрасль</span>
        <CategoryFilter setCategories={props.setCategories} />
      </section>
      <section>
        <span>Оклад</span>
        <SalaryFilter
          placeholder={'От'}
          setPaymentSize={props.setPaymentFrom}
        />
        <SalaryFilter
          placeholder={'До'}
          setPaymentSize={props.setPaymentTo}
        />
      </section>
      <button onClick={() => props.getVacancies()}>Применить</button>
    </div>
  );
}
