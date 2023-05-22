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

export default function VacancyCard({
  id,
  profession,
  paymentTo,
  paymentFrom,
  workType,
  town,
  currency,
  template,
}: Vacancy) {
  const navigate = useNavigate();
  const [salary, setSalary] = useState('');
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favoriteValue = checkFavorite(id);
    setFavorite(favoriteValue);
    if (paymentFrom && paymentTo) {
      setSalary(`${paymentFrom} - ${paymentTo} ${currency}`);
    } else if (paymentFrom) {
      setSalary(`от ${paymentFrom} ${currency}`);
    } else if (paymentTo) {
      setSalary(`до ${paymentTo} ${currency}`);
    }
  }, [paymentTo, paymentFrom, id, currency]);

  const handleFavoritesClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    event.stopPropagation();
    !favorite
      ? addFavorites({
          id,
          profession,
          paymentTo,
          paymentFrom,
          workType,
          town,
          currency,
          template,
        })
      : removeFavorites(id);
    setFavorite(!favorite);
  };

  return (
    <div
      data-elem={`vacancy-${id}`}
      className='vacancy-card'
      onClick={() => navigate(`/main/${id}`)}
    >
      {favorite ? (
        <img
          data-elem={`vacancy-${id}-shortlist-button`}
          onClick={(event) => {
            handleFavoritesClick(event);
          }}
          src={filledStarIcon}
          alt='filled-star-icon'
        />
      ) : (
        <img
          data-elem={`vacancy-${id}-shortlist-button`}
          onClick={(event) => {
            handleFavoritesClick(event);
          }}
          src={starIcon}
          alt='star-icon'
        />
      )}
      <p>{profession}</p>
      <section className='vacancy-card-salary'>
        <span>з/п {salary}</span>
        <span>•</span>
        <span>{workType}</span>
      </section>
      <section className='vacancy-card-location'>
        <img
          src={locationIcon}
          alt='location-icon'
        />
        <span>{town}</span>
      </section>
    </div>
  );
}
