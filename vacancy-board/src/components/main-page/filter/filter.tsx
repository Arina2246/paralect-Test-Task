import CategoryFilter from './category-filter/category-filter';
import SalaryFilter from './salary-filter/salary-filter';
import './filter.css';

export default function Filter() {
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
        <CategoryFilter />
      </section>
      <section>
        <span>Оклад</span>
        <SalaryFilter placeholder={'От'} />
        <SalaryFilter placeholder={'До'} />
      </section>
      <button>Применить</button>
    </div>
  );
}
