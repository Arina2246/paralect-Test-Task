import CategoryFilter from './category-filter/category-filter';
import SalaryFilter from './salary-filter/salary-filter';
import './filter.css';

export default function Filter() {
  return (
    <div className='filter'>
      <CategoryFilter />
      <SalaryFilter placeholder={'От'} />
      <SalaryFilter placeholder={'До'} />
    </div>
  );
}
