import { BatteryIcon, FanIcon, FilterIcon, HandIcon, ShieldIcon } from "./icons";
import type { ComponentType, SVGProps } from "react";

function AiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <span {...props} style={{ fontSize: "1em", fontWeight: 950 }}>AI</span>
  );
}

const reasons: [ComponentType<SVGProps<SVGSVGElement>>, string, string][] = [
  [AiIcon, "Inteligentná navigácia", "Presné mapovanie trasy bez vynechaných miest."],
  [FanIcon, "Výkonné sanie", "Silný výkon pre prach, lístie aj jemné nečistoty."],
  [FilterIcon, "Pokročilá filtrácia", "Jemná filtrácia pre čistú a vizuálne sviežu vodu."],
  [BatteryIcon, "Dlhá výdrž", "Až 240 minút čistenia podľa modelu."],
  [HandIcon, "Jednoduchá údržba", "Vybrať, opláchnuť, nabiť a hotovo."],
  [ShieldIcon, "Servis a záruka", "Podpora pre zákazníkov a jasné podmienky nákupu."]
];

export function WhyAiper() {
  return (
    <section id="preco" className="why">
      <p className="darkKicker center">Prečo si vybrať Aiper?</p>
      <div className="whyGrid">
        {reasons.map(([IconComponent, title, text]) => (
          <article key={title}>
            <span><IconComponent /></span>
            <b>{title}</b>
            <small>{text}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
