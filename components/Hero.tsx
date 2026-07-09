import { RobotVisual } from "./RobotVisual";
import { HeadsetIcon, RefreshIcon, ShieldIcon, TruckIcon } from "./icons";

export function Hero() {
  return (
    <section className="hero">
      <div className="heroPattern" />
      <div className="heroCopy">
        <p className="pretitle">Robotické čistenie bazéna novej generácie</p>
        <h1>Inteligentné čistenie bazéna bez námahy</h1>
        <p className="heroLead">Prémiové robotické vysávače Aiper pre krištáľovo čistú vodu, čisté steny a viac času na oddych.</p>
        <div className="heroCtas">
          <a className="button buttonPrimary" href="#produkty">Pozrieť produkty <span>→</span></a>
          <a className="button buttonGhost" href="#bazeny">Vybrať podľa bazéna</a>
        </div>
        <div className="heroTrust">
          <div><span><ShieldIcon /></span><b>2–3 roky</b><small>záruka</small></div>
          <div><span><TruckIcon /></span><b>Doprava zdarma</b><small>nad 100 €</small></div>
          <div><span><RefreshIcon /></span><b>30 dní</b><small>na vrátenie</small></div>
          <div><span><HeadsetIcon /></span><b>Slovenská</b><small>podpora</small></div>
        </div>
      </div>
      <div className="heroStage">
        <div className="waterHalo" />
        <div className="award"><b>reddot</b><small>winner 2024</small></div>
        <RobotVisual size="large" src="/images/hero.png" alt="Aiper robotický vysávač bazéna" />
        <div className="bubbleStack">
          <i /><i /><i /><i /><i />
        </div>
      </div>
    </section>
  );
}
