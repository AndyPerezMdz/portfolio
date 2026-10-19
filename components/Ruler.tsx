const marcas = Array.from({ length: 13 }, (_, i) => i * 100);

export function Ruler() {
  return (
    <div className="ruler" aria-hidden="true">
      <div className="ruler-nums">
        {marcas.map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>
    </div>
  );
}
