import { NavLink } from 'react-router-dom';
import './not-found.css';
import Header from '../header/header';

export default function NotFound() {
  return (
    <>
      <Header />
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
    </>
  );
}
