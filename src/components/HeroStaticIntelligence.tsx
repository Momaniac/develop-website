type Props = {
  className?: string;
};

export default function HeroStaticIntelligence({ className = "" }: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ zIndex: 1 }}
    >
      <div className="hero-fluid-field" />
      <div className="hero-fluid-veil" />
      <div className="hero-fluid-blob hero-fluid-blob-1" />
      <div className="hero-fluid-blob hero-fluid-blob-2" />
      <div className="hero-fluid-blob hero-fluid-blob-3" />
      <div className="hero-fluid-caustic hero-fluid-caustic-1" />
      <div className="hero-fluid-caustic hero-fluid-caustic-2" />
    </div>
  );
}
