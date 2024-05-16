import CampSite from '@/components/camp-site';
import Image from 'next/image';

export default function CampSection() {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite
          backgroundImage='bg-bg-img-1'
          title='Putuk Truno Camp'
          subtitle='Prigen, Pasuruan'
          peopleJoined='50+'
        />

        <CampSite
          backgroundImage='bg-bg-img-2'
          title='Mountain View Camp'
          subtitle='Somewhere in the Wild'
          peopleJoined='50+'
        />
      </div>

      <div className='flex-end mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='relative w-full overflow-hidden rounded-3xl bg-green-50 p-8 text-white lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 capitalize'>
            <strong>Feeling Lost</strong> and not knowing the way?
          </h2>
          <p className='regular-14 xl:regular-16 mt-5'>
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That&apos;s why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src='/quote.svg'
            alt='camp-2'
            width={186}
            height={219}
            className='camp-quote'
          />
        </div>
      </div>
    </section>
  );
}
