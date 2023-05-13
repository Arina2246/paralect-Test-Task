import { Image, NumberInput } from '@mantine/core';

export default function SalaryFilter(props: { placeholder: string }) {
  return (
    <div className='filter-input-wrapper'>
      <NumberInput
        onChange={(value) => console.log(value)}
        size='xs'
        radius={6}
        placeholder={props.placeholder}
        rightSection={
          <Image
            src='filter-icon.png'
            alt='filter-icon'
            width={10}
          />
        }
        rightSectionWidth={25}
      />
    </div>
  );
}
