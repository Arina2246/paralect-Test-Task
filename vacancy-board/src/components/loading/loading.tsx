import { Loader } from '@mantine/core';
import './loading.css';

export default function Loading() {
  return (
    <div className='loading'>
      <Loader />
    </div>
  );
}
