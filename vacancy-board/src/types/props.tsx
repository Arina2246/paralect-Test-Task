export type FilterProps = {
  category: string;
  paymentFrom: string;
  paymentTo: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setPaymentFrom: React.Dispatch<React.SetStateAction<string>>;
  setPaymentTo: React.Dispatch<React.SetStateAction<string>>;
  getVacancies: (pageNumber: number, resetPagination: boolean) => void;
};

export type CategoryFilterProps = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export type SalaryFilterProps = {
  paymentSize: string;
  placeholder: string;
  setPaymentSize: React.Dispatch<React.SetStateAction<string>>;
};

export type SearchProps = {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  getVacancies: (pageNumber: number, resetPagination: boolean) => void;
};

export type PaginationProps = {
  resetPagination: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};
