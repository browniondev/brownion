import Image from 'next/image';

export default function Sidebar() {
  return (
    <>

    <ul className="sidebar fixed md:left-6 left-1/2 md:transform-none -translate-x-1/2 bottom-6
     bg-gradient-to-b from-gray-500/30 to-gray-800/50 backdrop-blur-sm backdrop-filter 
      p-3 flex flex-row w-10/12 sm:w-auto sm:flex-col gap-2 shadow-2xl rounded-full z-40 justify-evenly">
      {[...Array(4)].map((_, i) => (
        <li key={i} className="bg-glow">
          <Image src="/brand.jpg" alt="WhatsApp Icon" width={32} height={32} className="w-8 h-8" />
        </li>
      ))}
    </ul>

    <div className="sidebar fixed md:left-6 left-1/2 md:transform-none -translate-x-1/2 bottom-6
     bg-gray-900 backdrop-blur-sm backdrop-filter 
      p-3 flex flex-col items-center sm:hidden w-10/12 sm:w-auto sm:flex-col gap-2 shadow-2xl rounded-lg z-50 justify-evenly">
        <div className="close bg-gray-900 shadow h-16 w-16 absolute rounded-full -top-1/2">

        </div>
      {[...Array(4)].map((_, i) => (
        <div className="p-4">
          <h2 className='text-center w-full text-white text-sm font-bold tracking-wide uppercase font-serif'>Home</h2>
        </div>
      ))}
    </div>
    </>
  );
}
