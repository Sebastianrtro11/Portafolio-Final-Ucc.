import React from 'react';

const ItemService = ({ data }) => {
  const orientationLeft = data.orientation === 'left';
  const reverse = orientationLeft ? 'flex-row' : 'flex-row-reverse';
  const orientationText = orientationLeft ? 'text-left' : 'text-right';

  return (
    <aside
      className={`flex flex-col items-center justify-between gap-x-8 lg:w-[700px] lg:${reverse}`}
    >
      <img src={data.icon} alt={data.title} />
      <section className={`text-center lg:${orientationText}`}>
        <h2 className='text-app-white font-extrabold text-lg'>{data.title}</h2>
        <p className={`mt-3 text-app-white font-light text-sm`}>
          {data.subTitle}
        </p>
      </section>
    </aside>
  );
};

export default ItemService;
