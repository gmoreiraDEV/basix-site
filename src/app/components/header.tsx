import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-black">
                    Basix Digital
                </Link>
                <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
                    <a href="#sobre" className="hover:text-black">Sobre</a>
                    <a href="#solucoes" className="hover:text-black">Soluções</a>
                    <a href="#perfil" className="hover:text-black">Perfil Ideal</a>
                    <a href="#contato" className="hover:text-black">Contato</a>
                </nav>
            </div>
        </header>
    );
}
