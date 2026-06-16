import { NavLink } from 'react-router-dom';
import { cn } from '../shared/lib/cn';

const linkBase =
  'relative text-[13px] sm:text-[13.5px] font-medium px-3 sm:px-[13px] py-[6px] rounded-pill border border-transparent whitespace-nowrap transition-all duration-200';

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
    <span className="relative grid h-7 w-7 shrink-0 place-items-center overflow-hidden rounded-full border border-line bg-white shadow-[0_1px_2px_rgba(16,31,54,0.12)]">
      {/* rotating sweep */}
      <span
        className="absolute inset-0 animate-radar-sweep"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(31,169,113,0) 0deg, rgba(31,169,113,0) 285deg, rgba(31,169,113,0.55) 352deg, rgba(31,169,113,0.9) 360deg)',
        }}
      />
      {/* rings */}
      <span className="absolute inset-[3px] rounded-full border border-green/35" />
      <span className="absolute inset-[8px] rounded-full border border-green/45" />
      {/* crosshair */}
      <span className="absolute h-full w-px bg-green/15" />
      <span className="absolute h-px w-full bg-green/15" />
      {/* center blip */}
      <span className="absolute h-[5px] w-[5px] rounded-full bg-green shadow-[0_0_6px_rgba(31,169,113,0.8)]" />
    </span>
  );
}

export function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-paper/75 backdrop-blur-md backdrop-saturate-150 print:hidden">
      <div className="mx-auto flex max-w-[980px] items-center justify-between gap-3 px-4 py-[10px] sm:px-7">
        <NavLink
          to="/"
          className="group inline-flex items-center gap-[10px] text-[15.5px] tracking-tight text-ink no-underline"
        >
          <RadarMark />
          <span className="font-semibold">
            Software{' '}
            <span className="font-serif font-semibold italic text-cobalt transition-colors group-hover:text-cobalt-deep">
              Radar
            </span>
          </span>
        </NavLink>
        <div className="flex flex-wrap items-center justify-end gap-1.5">
          <NavLink to="/glossary" className={navClass}>
            Từ điển thuật ngữ
          </NavLink>
          <a
            href={`${import.meta.env.BASE_URL}pipeline.html`}
            className={navClass({ isActive: false })}
          >
            Cơ chế (Pipeline)
          </a>
        </div>
      </div>
      {/* gradient hairline accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cobalt/35 to-transparent" />
    </nav>
  );
}
