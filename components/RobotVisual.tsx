import Image from "next/image";

type RobotVisualProps = {
  src: string;
  alt: string;
  size?: "large" | "card" | "small";
};

export function RobotVisual({ src, alt, size = "card" }: RobotVisualProps) {
  return (
    <div className={`robot robot-${size}`}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 720px) 90vw, 600px"
      />
    </div>
  );
}
