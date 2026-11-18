import { marqueeStack } from "@/lib/data";

export function MarqueeStack() {
  return (
    <section aria-label="Tech Stack" className="border-y border-border bg-bg-subtle px-5 py-6 sm:px-8 lg:px-12">
      <div className="container-x flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
        <p className="section-label shrink-0">Tech Stack</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-fg-muted">
          {marqueeStack.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
