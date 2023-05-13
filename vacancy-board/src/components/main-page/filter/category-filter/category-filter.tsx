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
    <div className='filter-input-wrapper'>
      <MultiSelect
        onChange={(value) => console.log(value)}
        size='xs'
        radius={6}
        data={categories}
        placeholder='Выберите отрасль'
        rightSection={
          <Image
            src='select-icon.png'
            alt='select-icon'
            width={19}
          />
        }
        rightSectionWidth={34}
      />
    </div>
  );
}
