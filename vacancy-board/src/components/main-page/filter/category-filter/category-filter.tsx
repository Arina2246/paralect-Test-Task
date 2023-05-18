import { Image, Select } from '@mantine/core';
import { getCatalogues } from '../../../../services/api';
import { Catalogue } from '../../../../types/api';
import { useEffect, useState } from 'react';

export default function CategoryFilter(props: {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}) {
  let [categoriesList, setCategoriesList] = useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    const catalogues = getCatalogues();

    catalogues.then((data: Catalogue[]) => {
      const categoriesData = data.map((elem) => {
        return {
          value: String(elem.key),
          label: elem.title_trimmed,
        };
      });

      setCategoriesList(categoriesData);
    });
  }, []);

  const handleSelect = (value: string | null) => {
    value ? props.setCategory(value) : props.setCategory('');
  };

  return (
    <Select
      value={props.category}
      onChange={(value) => handleSelect(value)}
      size='md'
      radius={8}
      data={categoriesList}
      placeholder='Выберите отрасль'
      styles={{
        input: {
          fontFamily: 'Inter',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
        },
      }}
      rightSection={
        <Image
          src='select-icon.png'
          alt='select-icon'
          width={25}
        />
      }
      rightSectionWidth={47}
    />
  );
}
