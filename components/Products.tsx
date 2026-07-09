import { products } from "@/data/products";
import { RobotVisual } from "./RobotVisual";

export function Products() {
  return (
    <section id="produkty" className="productsShell">
      <p className="sectionKicker">Najobľúbenejšie modely</p>
      <div className="productGrid">
        {products.map((product) => (
          <article className="productCard" key={product.id}>
            <span className={`tag tag-${product.tone}`}>{product.tag}</span>
            <RobotVisual tone={product.tone} />
            <h2>{product.name}</h2>
            <p className="productType">{product.type}</p>
            <p className="productDescription">{product.description}</p>
            <div className="specGrid">
              <span><b>{product.specs.battery}</b><small>výdrž</small></span>
              <span><b>{product.specs.pool}</b><small>plocha</small></span>
              <span><b>{product.specs.filter}</b><small>filter</small></span>
            </div>
            <div className="productBuy">
              <div>
                {product.oldPrice && <small>{product.oldPrice}</small>}
                <strong>{product.price}</strong>
              </div>
              <button aria-label={`Pridať ${product.name} do košíka`}>🛒</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
