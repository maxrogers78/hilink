import Image from 'next/image';
import Link from 'next/link';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import { formatStringToHref } from '@/utils/formatters';

export default function Footer() {
  return (
    <footer className='flex-center mb-24'>
      <div className='p-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='/' className='mb-10'>
            <Image
              src='/hilink-logo.svg'
              alt='hilink logo'
              width={74}
              height={29}
            />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((column) => (
              <FooterColumn key={column.title} title={column.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {column.links.map((link) => (
                    <Link key={link} href={formatStringToHref(link)}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.value}
                      className='flex gap-4 md:flex-col lg:flex-row'
                    >
                      <p className='whitespace-nowrap'>{link.label}:</p>
                      <p className='medium-14 whitespace-nowrap text-blue-70'>
                        {link.value}
                      </p>
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='regular-14 flex gap-4 text-gray-30'>
                  {SOCIALS.links.map((link) => (
                    <Link key={link} href='/'>
                      <Image src={link} alt={link} width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className='border bg-gray-20' />

        <p className='regular-14 w-full text-center text-gray-30'>
          {new Date().getFullYear()} Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  );
}
