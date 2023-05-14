import { Image, MultiSelect } from '@mantine/core';
import { getCatalogues } from '../../../../services/api';
import { Catalogue } from '../../../../types/api';
import { useEffect, useState } from 'react';

export default function CategoryFilter() {
  let [categories, setCategories] = useState<
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

      setCategories(categoriesData);
    });
  }, []);

  return (
    <MultiSelect
      onChange={(value) => console.log(value)}
      size='md'
      radius={8}
      data={categories}
      placeholder='Выберите отрасль'
      styles={{
        searchInput: {
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
