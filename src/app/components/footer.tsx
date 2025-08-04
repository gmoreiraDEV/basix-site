import Link from 'next/link';
import XLogo from './x-logo';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-neutral-100 py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                <Link href="/" className="text-lg font-bold tracking-tight">
                    <XLogo />
                </Link>

                <p className="text-neutral-400">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>

                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/basix.digital/" className="hover:text-neutral-100">Instagram</a>
                </div>
            </div>
        </footer>
    );
}
