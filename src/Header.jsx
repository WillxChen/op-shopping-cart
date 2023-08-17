import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "./routes/Root";

export default function Header() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="sticky top-0 z-50 shadow">
      <header className="min-w-full top-0 z-10 px-5 py-3 flex justify-between items-center bg-slate-700">
        <NavLink className="text-6xl text-slate-200" to="/">
          Gravitasse
        </NavLink>
        <nav className="flex gap-5 text-4xl">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-slate-50 font-medium" : "text-slate-400"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-slate-50 font-medium" : "text-slate-400"
            }
          >
            Cart {cartItems.length > 0 && `- ${cartItems.length}`}
          </NavLink>
        </nav>
      </header>
    </div>
  );
}
