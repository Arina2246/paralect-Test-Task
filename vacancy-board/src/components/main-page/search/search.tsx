import { TextInput, Image, Button } from '@mantine/core';

export default function Search() {
  return (
    <TextInput
      onChange={(value) => console.log(value)}
      icon={
        <Image
          src='search-icon.png'
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
          fontFamily: 'Inter',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '21px',
        },
      }}
      rightSection={
        <Button
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
