type RobotVisualProps = {
  size?: "large" | "card" | "small";
  tone?: "cyan" | "violet" | "blue" | "orange";
};

export function RobotVisual({ size = "card", tone = "cyan" }: RobotVisualProps) {
  return (
    <div className={`robot robot-${size} tone-${tone}`} aria-hidden="true">
      <div className="robotShell" />
      <div className="robotPanel" />
      <div className="robotLight" />
      <div className="robotTrack robotTrackLeft" />
      <div className="robotTrack robotTrackRight" />
      <div className="robotBrush" />
    </div>
  );
}
