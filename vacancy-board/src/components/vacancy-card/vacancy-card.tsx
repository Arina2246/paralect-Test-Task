import starIcon from '../../assets/star-icon.png';
import filledStarIcon from '../../assets/filled-star-icon.png';
import locationIcon from '../../assets/location-icon.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Vacancy } from '../../types/vacansy';
import './vacancy-card.css';
import {
  addFavorites,
  checkFavorite,
  removeFavorites,
} from '../../services/favorites';

export default function VacancyCard(props: Vacancy) {
  const navigate = useNavigate();
  const [salary, setSalary] = useState('');
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favoriteValue = checkFavorite(props.id);
    setFavorite(favoriteValue);
    if (props.paymentFrom && props.paymentTo) {
      setSalary(`${props.paymentFrom} - ${props.paymentTo} ${props.currency}`);
    } else if (props.paymentFrom) {
      setSalary(`от ${props.paymentFrom} ${props.currency}`);
    } else if (props.paymentTo) {
      setSalary(`до ${props.paymentTo} ${props.currency}`);
    }
  }, [props]);

  const handleFavoritesClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    event.stopPropagation();
    !favorite ? addFavorites(props) : removeFavorites(props.id);
    setFavorite(!favorite);
  };

  return (
    <div
      className='vacancy-card'
      onClick={() => navigate(`/main/${props.id}`)}
    >
      {favorite ? (
        <img
          onClick={(event) => {
            handleFavoritesClick(event);
          }}
          src={filledStarIcon}
          alt='filled-star-icon'
        />
      ) : (
        <img
          onClick={(event) => {
            handleFavoritesClick(event);
          }}
          src={starIcon}
          alt='star-icon'
        />
      )}
      <p>{props.profession}</p>
      <section className='vacancy-card-salary'>
        <span>з/п {salary}</span>
        <span>•</span>
        <span>{props.workType}</span>
      </section>
      <section className='vacancy-card-location'>
        <img
          src={locationIcon}
          alt='location-icon'
        />
        <span>{props.town}</span>
      </section>
    </div>
  );
}
