import Button from '@/components/button';
import Image from 'next/image';

export default function GetAppSection() {
  return (
    <section className='flex-center w-full flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>
            Get for free now!
          </h2>
          <p className='regular-16 text-gray-10'>
            Available on iOS and Android
          </p>

          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
            <Button type='button' className='btn_white w-full'>
              <Image src='/apple.svg' alt='apple' width={28} height={28} />
              <span className='bold-16 whitespace-nowrap'>App Store</span>
            </Button>

            <Button type='button' className='btn_dark_green_outline w-full'>
              <Image src='/android.svg' alt='android' width={28} height={28} />
              <span className='bold-16 whitespace-nowrap'>Play Store</span>
            </Button>
          </div>
        </div>

        <div className='flex flex-1 items-center justify-end'>
          <Image src='/phones.png' alt='phones' width={550} height={870} />
        </div>
      </div>
    </section>
  );
}
