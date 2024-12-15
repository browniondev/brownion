import Image from 'next/image';

export default function Sidebar() {
  return (
    <ul className="sidebar fixed md:left-6 left-1/2 md:transform-none -translate-x-1/2 bottom-6
     bg-gradient-to-b from-gray-500/30 to-gray-800/50 backdrop-blur-md backdrop-filter 
      p-3 flex flex-row w-10/12 sm:w-auto sm:flex-col gap-2 shadow-2xl rounded-full z-50 justify-between">
      {[...Array(4)].map((_, i) => (
        <li key={i}>
          <Image src="/brand.jpg" alt="WhatsApp Icon" width={32} height={32} className="w-8 h-8" />
        </li>
      ))}
    </ul>
  );
}
