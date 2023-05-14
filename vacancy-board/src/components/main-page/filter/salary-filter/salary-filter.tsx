import { Image, NumberInput } from '@mantine/core';

export default function SalaryFilter(props: { placeholder: string }) {
  return (
    <NumberInput
      onChange={(value) => console.log(value)}
      size='md'
      radius={8}
      placeholder={props.placeholder}
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
          src='filter-icon.png'
          alt='filter-icon'
          width={12}
        />
      }
      rightSectionWidth={35}
    />
  );
}
