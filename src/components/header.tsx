import { Coffee } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <span className="flex items-center justify-center gap-x-2 font-bold">
        <Coffee className="h-6 w-6" />
        Memórias Impressas
      </span>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#catalogo"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Catálogo
        </Link>
      </nav>
    </header>
  );
}
