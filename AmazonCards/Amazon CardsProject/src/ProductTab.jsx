import Product from "./Product";


function ProductTab() {
  return (
    <div className="ProductTab">
      <Product title="Logitac MX master" idx={0} />
      <Product title="Apple Pencil second " idx={1} />
      <Product title="zenotic German Box" idx={2} />
      <Product title="Sultan Iron Market" idx={3} />
    </div>
  );
}

export default ProductTab;
