type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-label">{eyebrow}</p>
      <div className="min-w-0">
        <h2 className="section-title">{title}</h2>
        {description && (
          <p className="mt-4 max-w-[66ch] text-base leading-relaxed text-fg-muted sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
