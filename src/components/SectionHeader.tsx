type SectionHeaderProps = {
  label: string;
  title: string;
  intro?: string;
};

export function SectionHeader({ label, title, intro }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
      <div className="section-rule" />
    </div>
  );
}
