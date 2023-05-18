import { VACANCIES_PER_PAGE, MAX_TOTAL } from '../constants/pagination';

export const getPagesCount = (total: number) => {
  if (total >= MAX_TOTAL) {
    return MAX_TOTAL / VACANCIES_PER_PAGE;
  } else {
    return Math.ceil(total / VACANCIES_PER_PAGE);
  }
};
