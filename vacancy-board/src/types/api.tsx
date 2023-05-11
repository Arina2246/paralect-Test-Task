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

type Vacancy = {
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
  objects: Vacancy[];
  subscription_active: boolean;
  subscription_id: number;
  total: number;
};

export type { AuthResponse, VacanciesResponse, Vacancy, AuthData };
