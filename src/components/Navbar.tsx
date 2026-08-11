import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 border-b">
      <Link href="/">Umbral</Link>
      <Link href="/analisis">Análisis</Link>
      <Link href="/personajes">Personajes</Link>
    </nav>
    );
}
