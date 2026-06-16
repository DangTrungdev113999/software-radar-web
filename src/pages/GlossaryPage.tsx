import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { CATEGORIES, TERMS, type CatKey } from '../data/terms';
import { TermCard } from '../components/glossary/TermCard';
import { cn } from '../shared/lib/cn';

type Filter = CatKey | 'all';

function searchText(t: (typeof TERMS)[number]) {
  return `${t.name} ${t.full ?? ''} ${t.mean} ${t.ex}`.toLowerCase();
}

export function GlossaryPage() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<Filter>('all');

  const q = query.trim().toLowerCase();

  const groups = useMemo(() => {
    return CATEGORIES.map((cat) => {
      const items = TERMS.filter(
        (t) =>
          t.cat === cat.key &&
          (active === 'all' || active === cat.key) &&
          (q === '' || searchText(t).includes(q)),
      );
      return { cat, items };
    }).filter((g) => g.items.length > 0);
  }, [q, active]);

  const filterBtns: { key: Filter; label: string }[] = [
    { key: 'all', label: 'Tất cả' },
    ...CATEGORIES.map((c) => ({ key: c.key as Filter, label: c.label })),
  ];

  return (
    <div className="mx-auto max-w-[980px] px-7">
      {/* HERO */}
      <header className="pb-[26px] pt-[54px]">
        <span className="inline-flex items-center gap-[9px] rounded-pill border border-[#D4E0FA] bg-cobalt-wash px-[15px] py-[7px] text-[12px] font-semibold uppercase tracking-[0.14em] text-cobalt">
          Cheat-sheet cho người đi bán
        </span>
        <h1 className="mt-5 font-serif text-[clamp(34px,5.4vw,52px)] font-semibold leading-[1.04] tracking-tight text-ink">
          Từ điển <span className="italic text-cobalt">thuật ngữ</span>
        </h1>
        <p className="mt-4 max-w-[680px] text-[clamp(16px,1.9vw,19px)] leading-[1.55] text-ink-soft">
          Mọi từ tiếng Anh, viết tắt và thuật ngữ kỹ thuật xuất hiện trong bộ Sales Kit — giải thích kiểu{' '}
          <b className="font-semibold text-ink">không cần biết kỹ thuật</b>, kèm ví dụ so sánh đời thường để dễ hình dung.
        </p>
        <div className="mt-4 max-w-[680px] rounded-xl border border-[#F3D8CC] bg-orange-wash p-[11px_16px] text-[14px] text-ink-soft">
          💡 <b className="text-orange">Mẹo:</b> Gõ vào ô tìm kiếm để tra nhanh 1 từ khi đang nói chuyện với khách, hoặc bấm nút nhóm để xem từng mảng.
        </div>
      </header>

      {/* TOOLBAR */}
      <div className="sticky top-[53px] z-40 mb-2 border-b border-line bg-paper/90 pb-3 pt-3.5 backdrop-blur-md">
        <div className="relative mb-3">
          <Search className="absolute left-[15px] top-1/2 -translate-y-1/2 text-ink-faint" size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            autoComplete="off"
            placeholder="Tìm thuật ngữ… (vd: BYOD, port mirror, due diligence)"
            className="w-full rounded-xl border border-line-2 bg-white py-[13px] pl-11 pr-4 text-[15.5px] text-ink shadow-card outline-none transition-all placeholder:text-ink-faint focus:border-cobalt focus:shadow-[0_0_0_3px_var(--cobalt-wash)]"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {filterBtns.map((b) => (
            <button
              key={b.key}
              onClick={() => setActive(b.key)}
              className={cn(
                'rounded-pill border px-3.5 py-[7px] text-[13px] font-medium transition-all',
                active === b.key
                  ? 'border-ink bg-ink text-white'
                  : 'border-line bg-white text-ink-soft hover:border-line-2 hover:text-ink',
              )}
            >
              {b.label}
              {b.key === 'all' && <span className="ml-[5px] font-mono text-[11px] opacity-55">{TERMS.length}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* GROUPS */}
      <main>
        {groups.map(({ cat, items }) => (
          <section key={cat.key} className="px-0 pb-1 pt-6">
            <div className="mb-4 mt-1.5 flex items-baseline gap-3">
              <h2 className="font-serif text-[clamp(20px,2.6vw,26px)] font-semibold tracking-tight text-ink">{cat.label}</h2>
              <span className="font-mono text-[12px] text-ink-faint">{items.length} thuật ngữ</span>
            </div>
            <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
              {items.map((t) => (
                <TermCard key={t.name} term={t} category={cat} />
              ))}
            </div>
          </section>
        ))}

        {groups.length === 0 && (
          <div className="py-[60px] text-center text-ink-faint">
            <b className="font-semibold text-ink-soft">Không tìm thấy thuật ngữ nào.</b>
            <br />
            Thử từ khoá khác hoặc bấm “Tất cả”.
          </div>
        )}
      </main>

      <footer className="mt-9 border-t border-line py-[26px_0_50px] text-[13.5px] text-ink-faint">
        Software Radar — Từ điển thuật ngữ · Bổ trợ cho bộ Sales Kit. Giải thích để dễ bán, không phải định nghĩa kỹ thuật chính xác tuyệt đối.
      </footer>
    </div>
  );
}
