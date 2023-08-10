export default function Header() {
  return (
    <header className="absolute min-w-full top-0 z-10 px-5 flex justify-between bg-transparent">
      <a className="text-6xl text-slate-200">Gravitasse</a>
      <nav className="flex gap-5 text-4xl">
        <a className="text-slate-200">Products</a>
        <a className="text-slate-200">Cart</a>
      </nav>
    </header>
  );
}
