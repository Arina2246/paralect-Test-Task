import {
  URL_AUTH,
  URL_VACANCIES,
  URL_CATALOGUES,
  LOGIN,
  PASSWORD,
  CLIENT_ID,
  CLIENT_SECRET,
  HR,
  AUTH_DATA_LOCALSTORAGE,
  REQUIRED_HEADERS,
  PUBLISHED,
} from '../constants/api';
import { VACANCIES_PER_PAGE } from '../constants/pagination';
import { AuthData, AuthResponse, VacanciesResponse } from '../types/api';
import getPagesCount from './pagination';

async function authorization() {
  const url = `${URL_AUTH}/?login=${LOGIN}&password=${PASSWORD}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&hr=${HR}`;

  try {
    const response = await fetch(url, {
      headers: REQUIRED_HEADERS,
    });

    const responseData = (await response.json()) as AuthResponse;
    const authData: AuthData = {
      token: responseData.access_token,
      type: responseData.token_type,
      expiresIn: responseData.expires_in,
    };

    localStorage.setItem(AUTH_DATA_LOCALSTORAGE, JSON.stringify(authData));
  } catch (error: unknown) {
    throw new Error();
  }
}

async function validateTokenActivation() {
  const authData = localStorage.getItem(AUTH_DATA_LOCALSTORAGE);

  if (!authData) {
    await authorization();
  } else {
    const data = JSON.parse(authData) as AuthData;
    const { expiresIn } = data;

    if (!expiresIn) {
      await authorization();
    }
  }
}

export async function getVacanciesData(
  keyword: string,
  paymentFrom: string,
  paymentTo: string,
  catalogues: string,
  page: string
) {
  await validateTokenActivation();

  const authData = localStorage.getItem(AUTH_DATA_LOCALSTORAGE) as string;
  const authDataObject = JSON.parse(authData) as AuthData;
  const url = `${URL_VACANCIES}/?published=${PUBLISHED}&keyword=${keyword}&payment_from=${paymentFrom}&payment_to=${paymentTo}&catalogues=${catalogues}&count=${VACANCIES_PER_PAGE}&page=${page}`;
  const headers = {
    Authorization: `${authDataObject.type} ${authDataObject.token}`,
    ...REQUIRED_HEADERS,
  };

  try {
    const response = await fetch(url, {
      headers: headers,
    });

    const responseData = (await response.json()) as VacanciesResponse;
    const vacanciesData = responseData.objects.map((vacancy) => {
      return {
        id: String(vacancy.id),
        profession: vacancy.profession,
        paymentTo: vacancy.payment_to,
        paymentFrom: vacancy.payment_from,
        workType: vacancy.type_of_work.title,
        town: vacancy.town.title,
        currency: vacancy.currency,
        template: vacancy.vacancyRichText,
      };
    });
    const pagesCount = getPagesCount(responseData.total);
    return { vacancies: vacanciesData, totalPages: pagesCount };
  } catch (error: unknown) {
    throw new Error();
  }
}

export async function getCatalogues() {
  try {
    const response = await fetch(URL_CATALOGUES, {
      headers: REQUIRED_HEADERS,
    });
    return response.json();
  } catch (error: unknown) {
    throw new Error();
  }
}
