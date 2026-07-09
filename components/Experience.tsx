import { RobotVisual } from "./RobotVisual";

export function Experience() {
  return (
    <section id="porovnanie" className="experience">
      <div className="videoPanel">
        <RobotVisual size="small" />
        <button aria-label="Prehrať ukážku">▶</button>
      </div>
      <div className="stepsPanel">
        <p className="sectionKicker alignLeft">Ako funguje Aiper?</p>
        <h2>Inteligentne. Dôkladne. Bez námahy.</h2>
        <div className="steps">
          {["Nabitie", "Ponorenie", "Čistenie", "Vybratie"].map((step, index) => (
            <div key={step}>
              <span>{index + 1}</span>
              <b>{step}</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
