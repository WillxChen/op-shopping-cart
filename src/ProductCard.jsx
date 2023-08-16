export default function ProductCard({ product }) {
  const { image, coffee_name, price, tasting_notes } = product;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image} alt="" />
      <div className="grid px-3">
        <p className="font-bold text-2xl mt-3 h-16 leading-7 border-b">
          {coffee_name}
        </p>
        <p className="text-slate-600 mt-2 mb-1">
          {[...tasting_notes].slice(0, 2).join(" & ")}
        </p>
        <p className="text-sm mb-5">{`$${price.toFixed(2)}`}</p>
        <label htmlFor="qty">Qty</label>
        <input placeholder="Quantity" type="number" id="qty" />
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
