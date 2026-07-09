import { poolTypes } from "@/data/products";

export function PoolChooser() {
  return (
    <section id="bazeny" className="poolChooser">
      <div className="chooserIntro">
        <p className="darkKicker">Výber podľa bazéna</p>
        <h2>Vyberte si model presne pre váš bazén</h2>
        <p>Jednoduchá cesta od typu bazéna k odporúčanému modelu. Bez preklikávania cez desiatky parametrov.</p>
      </div>
      <div className="poolCards">
        {poolTypes.map(([title, size, model]) => (
          <article key={title} className="poolCard">
            <b>{title}</b>
            <small>{size}</small>
            <div className="poolShape" />
            <p>{model}</p>
            <button aria-label={`Zobraziť odporúčanie pre ${title}`}>→</button>
          </article>
        ))}
      </div>
    </section>
  );
}
