import './vacancy-card.css';

export default function VacancyCard(props: {
  title: string;
  salary: string;
  type: string;
  location: string;
}) {
  return (
    <div className='vacancy-card'>
      <img
        src='star-icon.png'
        alt='star-icon'
      />
      <p>{props.title}</p>
      <section>
        <span>з/п {props.salary}</span>
        <span>•</span>
        <span>{props.type}</span>
      </section>
      <section>
        <img
          src='location-icon.png'
          alt='location-icon'
        />
        <span>{props.location}</span>
      </section>
    </div>
  );
}
