const reasons = [
  ["AI", "Inteligentná navigácia", "Presné mapovanie trasy bez vynechaných miest."],
  ["◌", "Výkonné sanie", "Silný výkon pre prach, lístie aj jemné nečistoty."],
  ["▦", "Pokročilá filtrácia", "Jemná filtrácia pre čistú a vizuálne sviežu vodu."],
  ["▯", "Dlhá výdrž", "Až 240 minút čistenia podľa modelu."],
  ["☝", "Jednoduchá údržba", "Vybrať, opláchnuť, nabiť a hotovo."],
  ["♢", "Servis a záruka", "Podpora pre zákazníkov a jasné podmienky nákupu."]
];

export function WhyAiper() {
  return (
    <section id="preco" className="why">
      <p className="darkKicker center">Prečo si vybrať Aiper?</p>
      <div className="whyGrid">
        {reasons.map(([icon, title, text]) => (
          <article key={title}>
            <span>{icon}</span>
            <b>{title}</b>
            <small>{text}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
