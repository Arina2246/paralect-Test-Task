type AuthResponse = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  reg_user_resumes_count: number;
  token_type: string;
  ttl: number;
};

type AuthData = {
  token: string;
  type: string;
  expiresIn: number;
};

type VacancyResponse = {
  id: number;
  profession: string;
  town: {
    title: string;
  };
  type_of_work: {
    title: string;
  };
  payment_to: number;
  payment_from: number;
  currency: string;
  vacancyRichText: string;
};

type VacanciesResponse = {
  more: boolean;
  objects: VacancyResponse[];
  subscription_active: boolean;
  subscription_id: number;
  total: number;
};

type Catalogue = {
  key: number;
  title_trimmed: string;
};

export type {
  AuthResponse,
  VacanciesResponse,
  VacancyResponse,
  AuthData,
  Catalogue,
};
