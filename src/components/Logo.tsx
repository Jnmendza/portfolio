import { Img } from "@react-email/components";

export function Logo({
  dark = false,
  size = 48,
  className,
}: {
  dark?: boolean;
  size?: number;
  className?: string;
}) {
  const src = dark
    ? "https://jonathanmendoza.dev/assets/darkLogo.png"
    : "https://jonathanmendoza.dev/assets/greenLogo.png";

  return (
    <Img
      src={src}
      width={size}
      height={size}
      alt='Jonathan Mendoza'
      style={{
        display: "block",
        border: "0",
        outline: "none",
        textDecoration: "none",
      }}
      className={className}
    />
  );
}
