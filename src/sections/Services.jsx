import React from 'react';
import { ServiceData } from '../data/data.js';
import ItemService from './../components/ItemService';

const Services = () => {
  return (
    <section className='py-30'>
      <aside className='flex flex-col items-center text-app-white'>
        <h1 className='font-semibold text-5xl'>{ServiceData.header.title}</h1>
        <p className='mt-4 max-w-[705px] text-lg text-center'>
          {ServiceData.header.subTitle}
        </p>
      </aside>
      <section>
        <ul className='flex flex-col items-center pt-[80px] gap-y-[80px]'>
          {ServiceData.items.map((item) => (
            <ItemService data={item} />
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Services;
