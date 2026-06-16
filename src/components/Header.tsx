import { NavLink } from 'react-router-dom';
import { cn } from '../shared/lib/cn';

const linkBase =
  'relative text-[12.5px] sm:text-[13.5px] font-medium px-2.5 sm:px-[13px] py-[6px] rounded-pill border border-transparent whitespace-nowrap transition-all duration-200';

function navClass({ isActive }: { isActive: boolean }) {
  return cn(
    linkBase,
    isActive
      ? 'text-cobalt bg-cobalt-wash border-[#d4e0fa]'
      : 'text-ink-soft hover:text-ink hover:bg-white hover:border-line',
  );
}

/** Radar brand mark — concentric rings + a rotating sweep, center blip. */
function RadarMark() {
  return (
    <span className="relative grid h-[26px] w-[26px] shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-white shadow-[0_1px_2px_rgba(16,31,54,0.12)] sm:h-7 sm:w-7">
      <span
        className="absolute inset-0 animate-radar-sweep"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(31,169,113,0) 0deg, rgba(31,169,113,0) 285deg, rgba(31,169,113,0.55) 352deg, rgba(31,169,113,0.9) 360deg)',
        }}
      />
      <span className="absolute inset-[3px] rounded-full border border-green/35" />
      <span className="absolute inset-[8px] rounded-full border border-green/45" />
      <span className="absolute h-full w-px bg-green/15" />
      <span className="absolute h-px w-full bg-green/15" />
      <span className="absolute h-[5px] w-[5px] rounded-full bg-green shadow-[0_0_6px_rgba(31,169,113,0.8)]" />
    </span>
  );
}

export function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-paper/75 backdrop-blur-md backdrop-saturate-150 print:hidden">
      <div className="mx-auto flex h-[52px] max-w-[980px] flex-nowrap items-center justify-between gap-2 px-4 sm:h-[60px] sm:gap-3 sm:px-7">
        <NavLink
          to="/"
          className="group inline-flex min-w-0 shrink-0 items-center gap-[9px] text-[14px] tracking-tight text-ink no-underline sm:text-[15.5px]"
        >
          <RadarMark />
          <span className="font-semibold">
            Software{' '}
            <span className="font-serif font-semibold italic text-cobalt transition-colors group-hover:text-cobalt-deep">
              Radar
            </span>
          </span>
        </NavLink>
        <div className="flex flex-nowrap items-center justify-end gap-1.5">
          <NavLink to="/glossary" className={navClass}>
            <span className="sm:hidden">Từ điển</span>
            <span className="hidden sm:inline">Từ điển thuật ngữ</span>
          </NavLink>
          <a
            href={`${import.meta.env.BASE_URL}pipeline.html`}
            className={navClass({ isActive: false })}
          >
            <span className="sm:hidden">Pipeline</span>
            <span className="hidden sm:inline">Cơ chế (Pipeline)</span>
          </a>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cobalt/35 to-transparent" />
    </nav>
  );
}
