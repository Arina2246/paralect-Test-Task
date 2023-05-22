import selectIcon from '../../../../assets/select-icon.png';
import { Image, Select } from '@mantine/core';
import { getCatalogues } from '../../../../services/api';
import { Catalogue } from '../../../../types/api';
import { useCallback, useEffect, useState } from 'react';
import { CategoryFilterProps } from '../../../../types/props';

export default function CategoryFilter({
  category,
  setCategory,
}: CategoryFilterProps) {
  const [categoriesList, setCategoriesList] = useState<
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

  const handleSelect = useCallback(
    (value: string | null) => {
      value ? setCategory(value) : setCategory('');
    },
    [setCategory]
  );

  return (
    <Select
      data-elem='industry-select'
      value={category}
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
          src={selectIcon}
          alt='select-icon'
          width={25}
        />
      }
      rightSectionWidth={47}
    />
  );
}
