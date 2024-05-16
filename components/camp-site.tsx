import Image from 'next/image';
import { cn } from '@/lib/cn';
import { PEOPLE_URL } from '@/constants';

export default function CampSite({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampSiteProps) {
  return (
    <div
      className={cn(
        'h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl',
        backgroundImage,
      )}
    >
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flex-center gap-4'>
          <div className='rounded-full bg-green-50 p-4'>
            <Image src='/folded-map.svg' alt='map' width={28} height={28} />
          </div>

          <div className='flex flex-col gap-1 text-white'>
            <h4 className='bold-18'>{title}</h4>
            <p className='regular-14'>{subtitle}</p>
          </div>
        </div>

        <div className='flex-center gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {PEOPLE_URL.map((url) => (
              <Image
                key={url}
                src={url}
                alt='person'
                width={52}
                height={52}
                className='inline-block size-10 rounded-full'
              />
            ))}
          </span>
          <p className='bold-16 md:bold-20 text-white'>{peopleJoined} Joined</p>
        </div>
      </div>
    </div>
  );
}
