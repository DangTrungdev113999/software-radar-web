import type { Category, Term } from '../../data/terms';

export function TermCard({ term, category }: { term: Term; category: Category }) {
  return (
    <article className="flex flex-col gap-[9px] rounded-2xl border border-line bg-white p-[18px_20px] shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-line-2 hover:shadow-lg">
      <div className="flex items-start justify-between gap-2.5">
        <div>
          <div className="font-mono text-[16px] font-semibold tracking-tight text-ink">{term.name}</div>
          {term.full && <div className="mt-px text-[12.5px] italic text-ink-faint">{term.full}</div>}
        </div>
        <span className={`flex-none whitespace-nowrap rounded-pill px-[9px] py-1 text-[10.5px] font-semibold uppercase tracking-wide ${category.badge}`}>
          {category.short}
        </span>
      </div>
      <p
        className="m-0 text-[14.5px] leading-[1.55] text-ink-soft [&_b]:font-semibold [&_b]:text-ink"
        dangerouslySetInnerHTML={{ __html: term.mean }}
      />
      <div className="rounded-xl border-l-[3px] border-yellow bg-paper-2 p-[10px_13px] text-[13.5px] leading-[1.5] text-ink-soft [&_b]:font-semibold [&_b]:text-ink">
        <span className="mb-[3px] block text-[11px] font-semibold uppercase tracking-wide text-[#9A7B12]">
          Ví dụ dễ hình dung
        </span>
        <span dangerouslySetInnerHTML={{ __html: term.ex }} />
      </div>
    </article>
  );
}
