import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo-icon.png';
import './header.css';

export default function Header() {
  return (
    <header>
      <div>
        <img
          src={Logo}
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
