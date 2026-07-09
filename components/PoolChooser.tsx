import Image from "next/image";
import { poolTypes } from "@/data/products";
import { ArrowRightIcon } from "./icons";

export function PoolChooser() {
  return (
    <section id="bazeny" className="poolChooser">
      <div className="chooserIntro">
        <p className="darkKicker">Výber podľa bazéna</p>
        <h2>Vyberte si model presne pre váš bazén</h2>
        <p>Jednoduchá cesta od typu bazéna k odporúčanému modelu. Bez preklikávania cez desiatky parametrov.</p>
      </div>
      <div className="poolCards">
        {poolTypes.map((pool) => (
          <article key={pool.title} className="poolCard">
            <b>{pool.title}</b>
            <small>{pool.size}</small>
            <div className="poolShape">
              <Image src={pool.image} alt={pool.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 720px) 45vw, 220px" />
            </div>
            <p>{pool.model}</p>
            <button aria-label={`Zobraziť odporúčanie pre ${pool.title}`}><ArrowRightIcon /></button>
          </article>
        ))}
      </div>
    </section>
  );
}
