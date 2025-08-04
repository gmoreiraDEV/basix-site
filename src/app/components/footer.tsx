import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                <Link href="/" className="text-lg font-bold tracking-tight">
                    Basix Digital
                </Link>

                <p className="text-gray-400">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>

                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/basix.digital/" className="hover:text-white">Instagram</a>
                </div>
            </div>
        </footer>
    );
}
