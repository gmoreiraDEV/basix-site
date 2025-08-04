import Link from 'next/link';
import BasixLogoFull from './basix-logo-full';

export default function Header() {
    return (
        <header className="w-full bg-neutral-100 shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-neutral-900">
                    <BasixLogoFull />
                </Link>
                <nav className="hidden md:flex space-x-6 text-sm font-medium text-neutral-800">
                    <a href="#sobre" className="hover:text-neutral-900">Sobre</a>
                    <a href="#solucoes" className="hover:text-neutral-900">Soluções</a>
                    <a href="#perfil" className="hover:text-neutral-900">Perfil Ideal</a>
                    <a href="#contato" className="hover:text-neutral-900">Contato</a>
                </nav>
            </div>
        </header>
    );
}
