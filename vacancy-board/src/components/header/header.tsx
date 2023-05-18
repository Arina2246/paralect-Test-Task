import { NavLink } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>
      <div>
        <img
          src='icon.png'
          alt='icon'
        />
        <span>Jobored</span>
      </div>
      <nav>
        <NavLink to='/main'>Поиск Вакансий</NavLink>
        <NavLink to='/favorites'>Избранное</NavLink>
      </nav>
    </header>
  );
}
