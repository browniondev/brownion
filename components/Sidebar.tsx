import Image from 'next/image';

export default function Sidebar() {
  return (
    <ul className="sidebar fixed md:left-6 left-1/2 md:transform-none -translate-x-1/2 bottom-6
      bg-gray-900/30 backdrop-blur-md backdrop-filter 
      p-3 flex flex-col gap-2 shadow-2xl rounded-full 
      border border-white/10 z-50">
      {[...Array(4)].map((_, i) => (
        <li key={i}>
          <Image src="/images/whatsapp.png" alt="WhatsApp Icon" width={32} height={32} className="w-8 h-8" />
        </li>
      ))}
    </ul>
  );
}
