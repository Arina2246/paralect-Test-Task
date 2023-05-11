const URL = 'https://startup-summer-2023-proxy.onrender.com';
const URL_AUTH = `${URL}/2.0/oauth2/password`;
const URL_VACANCIES = `${URL}/2.0/vacancies`;

const LOGIN = 'sergei.stralenia@gmail.com';
const PASSWORD= 'paralect123';
const CLIENT_ID = '2356';
const CLIENT_SECRET = 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';
const HR = '0';
const AUTH_DATA_LOCALSTORAGE = 'authData';

const PUBLISHED = '1';

const HEADER_SECRET_KEY = 'GEU4nvd3rej*jeh.eqp';
const REQUIRED_HEADERS = {
    'x-secret-key': HEADER_SECRET_KEY,
    'X-Api-App-Id': CLIENT_SECRET,
}


export { URL, URL_AUTH, URL_VACANCIES, LOGIN, PASSWORD, CLIENT_ID, CLIENT_SECRET, HR, AUTH_DATA_LOCALSTORAGE, PUBLISHED, REQUIRED_HEADERS } ;
