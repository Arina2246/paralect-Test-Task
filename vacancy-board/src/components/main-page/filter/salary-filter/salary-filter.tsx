import filterIcon from '../../../../assets/filter-icon.png';
import { Image, NumberInput } from '@mantine/core';
import { SalaryFilterProps } from '../../../../types/props';

export default function SalaryFilter({
  paymentSize,
  placeholder,
  setPaymentSize,
  dataElem,
}: SalaryFilterProps) {
  return (
    <NumberInput
      data-elem={dataElem}
      value={paymentSize === '' ? '' : Number(paymentSize)}
      onChange={(value) => setPaymentSize(value.toString())}
      size='md'
      radius={8}
      placeholder={placeholder}
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
          src={filterIcon}
          alt='filter-icon'
          width={12}
        />
      }
      rightSectionWidth={35}
    />
  );
}
