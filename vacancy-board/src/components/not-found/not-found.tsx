import { NavLink } from 'react-router-dom';
import './not-found.css';

export default function NotFound() {
  return (
    <div className='not-found'>
      <img
        src='not-found.png'
        alt='not-found'
      />
      <p>Упс, здесь еще ничего нет!</p>
      <button>
        <NavLink to='/main'>Поиск Вакансий</NavLink>
      </button>
    </div>
  );
}
