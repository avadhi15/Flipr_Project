import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 shadow-md bg-white fixed top-0 left-0 right-0 z-50">
      <Link href="/" className="flex items-center space-x-2">
       <Image src="/assets/images/logo.svg" alt="Real Trust Logo" width={130} height={130} /> 
          {/* <span className="text-xl font-semibold tracking-tight text-blue-900">Real Trust</span> */}
      </Link>

      <ul className=" font-inter hidden md:flex space-x-6 text-gray-700 font-medium uppercase">
        <li><Link href="#">Home</Link></li>
        <li><Link href="#">Services</Link></li>
        <li><Link href="#">About Projects</Link></li>
        <li><Link href="#">Testimonials</Link></li>
      </ul>

      <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 uppercase font-medium transition-colors hidden md:block">
        Contact
      </button>
    </nav>
  );
}
