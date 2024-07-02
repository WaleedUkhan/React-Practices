import Price from "./price";

function Product({ title, idx }) {
  let oldPrice = ["120", "162", "186", "205","360", "450"];
  let newPrice = ["12", "16", "18", "20", "36", "45"];
  let description = ["Awesome Chapal", "Banu Speciel ", "Charsada ", "Alrehman Senatory"];
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description[idx]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}
export default Product;
