import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';
import Button from './button';

export default function Navbar() {
  return (
    <nav className='flex-between max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image
          src='/hilink-logo.svg'
          alt='Hilink logo'
          width={74}
          height={29}
        />
      </Link>

      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className='regular-16 flex-center pb-1.5 text-gray-50 transition-all hover:text-gray-900'
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className='lg:flex-center hidden'>
        <Button type='button' className='btn_dark_green'>
          <Image src='/user.svg' alt='user login' width={24} height={24} />
          <span className='bold-16 whitespace-nowrap'>Login</span>
        </Button>
      </div>

      <Image
        src='/menu.svg'
        alt='Menu'
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
      />
    </nav>
  );
}
