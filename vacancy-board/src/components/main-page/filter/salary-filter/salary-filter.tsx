import { Image, NumberInput } from '@mantine/core';

export default function SalaryFilter(props: { placeholder: string }) {
  return (
    <NumberInput
      onChange={(value) => console.log(value)}
      size='md'
      radius={8}
      placeholder={props.placeholder}
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
