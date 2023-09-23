import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ShopContext } from "./routes/Root";

export default function Header() {
  const { cartItems } = useContext(ShopContext);
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    <div className="fixed top-0 z-50 shadow">
      <header className="fixed min-w-full top-0 z-10 px-5 py-3 flex justify-between items-center bg-opacity-75 bg-slate-700 transition-opacity">
        <NavLink
          className="text-6xl text-slate-200"
          to="/#"
          onClick={() =>
            isRootPath && window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          Gravitasse
        </NavLink>
        <nav className="flex gap-8 text-4xl">
          <NavLink
            to="/#about"
            className={({ isActive }) =>
              isActive ? "text-slate-50 font-medium" : "text-slate-400"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/#map"
            className={({ isActive }) =>
              isActive ? "text-slate-50 font-medium" : "text-slate-400"
            }
          >
            Map
          </NavLink>

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
