import Link from 'next/link';
import XLogo from './x-logo';

export default function Footer() {
    return (
        <footer className="py-8 px-4 border-t border-[#F244C4]/20">
            <div className="container mx-auto text-center text-white flex flex-col items-center gap-4">
                <Link href="/" className="text-lg font-bold tracking-tight">
                    <XLogo />
                </Link>
                <a href="https://www.instagram.com/basix.digital/" className="hover:text-neutral-100">Instagram</a>
                <p className="text-gray-400">© {new Date().getFullYear()} Basix Digital. Consultoria e Mentoria em Inteligência Artificial.</p>
            </div>
        </footer>
    );
}
