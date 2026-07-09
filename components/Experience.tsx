import { Fragment } from "react";
import { RobotVisual } from "./RobotVisual";
import { ArrowRightIcon, PlayIcon } from "./icons";

const steps = ["Nabíjanie", "Ponorenie", "Čistenie", "Vybratie z vody"];

export function Experience() {
  return (
    <section id="porovnanie" className="experience">
      <div className="videoPanel">
        <RobotVisual size="small" src="/images/experience.png" alt="Aiper robotický vysávač pri čistení bazéna" />
        <button aria-label="Prehrať ukážku"><PlayIcon /></button>
      </div>
      <div className="stepsPanel">
        <p className="sectionKicker alignLeft">Ako funguje Aiper?</p>
        <h2>Inteligentne. Dôkladne. Bez námahy.</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <Fragment key={step}>
              <div>
                <span>{index + 1}</span>
                <b>{step}</b>
              </div>
              {index < steps.length - 1 && <ArrowRightIcon className="stepArrow" />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
