import { products } from "@/data/products";
import { RobotVisual } from "./RobotVisual";
import { AreaIcon, ArrowRightIcon, BatteryIcon, CartIcon, FilterIcon } from "./icons";

export function Products() {
  return (
    <section id="produkty" className="productsShell">
      <p className="sectionKicker">Najobľúbenejšie modely</p>
      <div className="productGrid">
        {products.map((product) => (
          <article className="productCard" key={product.id}>
            <span className={`tag tag-${product.tone}`}>{product.tag}</span>
            <RobotVisual size="card" src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="productType">{product.type}</p>
            <p className="productDescription">{product.description}</p>
            <div className="specGrid">
              <span><BatteryIcon /><b>{product.specs.battery}</b><small>výdrž</small></span>
              <span><AreaIcon /><b>{product.specs.pool}</b><small>plocha</small></span>
              <span><FilterIcon /><b>{product.specs.filter}</b><small>filter</small></span>
            </div>
            <div className="productBuy">
              <div>
                {product.oldPrice && <small>{product.oldPrice}</small>}
                <strong>{product.price}</strong>
              </div>
              <button aria-label={`Pridať ${product.name} do košíka`}><CartIcon /></button>
            </div>
          </article>
        ))}
      </div>
      <button className="carouselNext" aria-label="Ďalšie produkty">
        <ArrowRightIcon />
      </button>
    </section>
  );
}
