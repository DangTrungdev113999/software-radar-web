import { NavLink } from 'react-router-dom';
import { cn } from '../shared/lib/cn';

const linkBase =
  'text-[13.5px] font-medium px-[13px] py-[6px] rounded-pill border border-transparent transition-all duration-150';

function navClass({ isActive }: { isActive: boolean }) {
  return cn(
    linkBase,
    isActive
      ? 'text-cobalt bg-cobalt-wash border-[#D4E0FA]'
      : 'text-ink-soft hover:text-ink hover:bg-white hover:border-line',
  );
}

export function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md backdrop-saturate-150 print:hidden">
      <div className="mx-auto flex max-w-[980px] items-center justify-between gap-4 px-7 py-[11px]">
        <NavLink to="/" className="inline-flex items-center gap-[9px] text-[15px] font-semibold tracking-tight text-ink no-underline">
          <span className="relative inline-block h-2 w-2 rounded-full bg-green">
            <span className="absolute -inset-1 animate-ping rounded-full border-[1.5px] border-green opacity-50" />
          </span>
          Software <span className="text-cobalt">Radar</span>
        </NavLink>
        <div className="flex items-center gap-1.5">
          <NavLink to="/" end className={navClass}>
            Sales Kit
          </NavLink>
          <NavLink to="/easy" className={navClass}>
            Bản dễ đọc
          </NavLink>
          <NavLink to="/glossary" className={navClass}>
            Từ điển thuật ngữ
          </NavLink>
          <a href={`${import.meta.env.BASE_URL}pipeline.html`} className={navClass({ isActive: false })}>
            Cơ chế (Pipeline)
          </a>
        </div>
      </div>
    </nav>
  );
}
