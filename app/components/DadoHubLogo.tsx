type DadoHubLogoProps = {
  /** Tailwind classes (controla tamanho e cor) */
  className?: string;
  /** Acessibilidade */
  title?: string;
};

export function DadoHubLogo({
  className = "h-8 w-8",
  title = "DadoHub",
}: DadoHubLogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>

      {/* Square (dado chapado) */}
      <rect
        x="8"
        y="8"
        width="48"
        height="48"
        rx="8"
        stroke="currentColor"
        strokeWidth="4"
      />

      {/* Central hub */}
      <circle
        cx="32"
        cy="32"
        r="6"
        fill="currentColor"
      />
    </svg>
  );
}
