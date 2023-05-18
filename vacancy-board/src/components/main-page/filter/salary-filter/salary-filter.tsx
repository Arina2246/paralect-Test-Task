import { Image, NumberInput } from '@mantine/core';

export default function SalaryFilter(props: {
  paymentSize: string;
  placeholder: string;
  setPaymentSize: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <NumberInput
      value={props.paymentSize === '' ? '' : Number(props.paymentSize)}
      onChange={(value) => props.setPaymentSize(value.toString())}
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
