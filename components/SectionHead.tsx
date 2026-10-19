export function SectionHead({
  num,
  titulo,
  nota,
  as: Tag = "h2",
}: {
  num: string;
  titulo: string;
  nota?: string;
  as?: "h2" | "h3";
}) {
  return (
    <div className="section-head">
      <div className="section-title">
        <span className="num">{num}</span>
        <Tag>{titulo}</Tag>
      </div>
      {nota ? <span className="mono-note">{nota}</span> : null}
    </div>
  );
}
