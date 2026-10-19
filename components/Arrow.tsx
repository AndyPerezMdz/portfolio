export function Arrow({ tenue = false }: { tenue?: boolean }) {
  return (
    <div className={tenue ? "arrow arrow-muted" : "arrow"} aria-hidden="true">
      <span className="arrow-line" />
      <span className="arrow-head" />
    </div>
  );
}
