import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 px-6 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image src='/logo.jpg' alt='Logo' width={120} height={50} priority />
        </Link>
        <h1>swistoklik</h1>
      </div>

      <div>
        <Link
          href='/studio'
          className='flex items-center justify-center px-6 py-2 rounded-full duration-150 bg-[#202020] hover:bg-[#373737] text-white text-xl font-semibold'
        >
          Studio
        </Link>
      </div>
    </header>
  );
}

export default Header;
