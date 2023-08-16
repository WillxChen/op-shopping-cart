export default function Header() {
  return (
    <div className="sticky top-0 z-50 shadow">
      <header className="min-w-full top-0 z-10 px-5 py-3 flex justify-between items-center bg-slate-700">
        <a className="text-6xl text-slate-200">Gravitasse</a>
        <nav className="flex gap-5 text-4xl">
          <a
            className={`text-slate-400 ${
              window.location.pathname === "/products" &&
              "text-slate-100 font-medium"
            }`}
          >
            Products
          </a>
          <a className="text-slate-400">Cart</a>
        </nav>
      </header>
    </div>
  );
}
