import type { ReactNode } from "react";
import { BatteryIcon, FanIcon, FilterIcon, HandIcon, ShieldIcon } from "./icons";

function AiIcon() {
  return <span style={{ fontSize: "1em", fontWeight: 950 }}>AI</span>;
}

const reasons: { icon: ReactNode; title: string; text: string }[] = [
  { icon: <AiIcon />, title: "Inteligentná navigácia", text: "Presné mapovanie trasy bez vynechaných miest." },
  { icon: <FanIcon />, title: "Výkonné sanie", text: "Silný výkon pre prach, lístie aj jemné nečistoty." },
  { icon: <FilterIcon />, title: "Pokročilá filtrácia", text: "Jemná filtrácia pre čistú a vizuálne sviežu vodu." },
  { icon: <BatteryIcon />, title: "Dlhá výdrž", text: "Až 240 minút čistenia podľa modelu." },
  { icon: <HandIcon />, title: "Jednoduchá údržba", text: "Vybrať, opláchnuť, nabiť a hotovo." },
  { icon: <ShieldIcon />, title: "Servis a záruka", text: "Podpora pre zákazníkov a jasné podmienky nákupu." }
];

export function WhyAiper() {
  return (
    <section id="preco" className="why">
      <p className="darkKicker center">Prečo si vybrať Aiper?</p>
      <div className="whyGrid">
        {reasons.map((reason) => (
          <article key={reason.title}>
            <span>{reason.icon}</span>
            <b>{reason.title}</b>
            <small>{reason.text}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
