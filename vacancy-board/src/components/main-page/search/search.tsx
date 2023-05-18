import searchIcon from '../../../assets/search-icon.png';
import { TextInput, Image, Button } from '@mantine/core';
import { SearchProps } from '../../../types/props';

export default function Search({ setSearchValue, getVacancies }: SearchProps) {
  return (
    <TextInput
      onChange={(event) => setSearchValue(event.target.value)}
      icon={
        <Image
          src={searchIcon}
          alt='search-icon.png'
          width={16}
        />
      }
      iconWidth={38}
      size='lg'
      radius={8}
      placeholder={'Введите название вакансии'}
      styles={{
        input: {
          border: '1px solid #EAEBED',
          fontFamily: 'Inter',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '21px',
        },
      }}
      rightSection={
        <Button
          onClick={() => getVacancies(0, true)}
          size='xs'
          radius={8}
          styles={{
            root: {
              paddingLeft: '20px',
              paddingRight: '20px',
              backgroundColor: '#5E96FC',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '21px',
            },
          }}
        >
          Поиск
        </Button>
      }
      rightSectionWidth={105}
    />
  );
}
