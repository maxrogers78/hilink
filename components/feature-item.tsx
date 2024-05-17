import Image from 'next/image';

export default function FeatureItem({ icon, title, description }: Feature) {
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='rounded-full bg-green-50 p-4 lg:p-5'>
        <Image src={icon} alt={title} width={28} height={28} />
      </div>

      <h2 className='bold-20 lg:bold-22 mt-5 capitalize'>{title}</h2>

      <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>
        {description}
      </p>
    </li>
  );
}
