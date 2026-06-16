import { NavLink } from 'react-router-dom';
import { cn } from '../shared/lib/cn';

const linkBase =
  'text-[12.5px] sm:text-[13.5px] font-semibold px-2.5 sm:px-[13px] py-[6px] rounded-pill border-[1.5px] whitespace-nowrap transition-all duration-150';

function navClass({ isActive }: { isActive: boolean }) {
  return cn(
    linkBase,
    isActive
      ? 'text-white bg-ink border-ink'
      : 'text-ink border-ink hover:bg-ink hover:text-white',
  );
}

export function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b-2 border-ink bg-paper print:hidden">
      <div className="mx-auto flex max-w-[980px] items-center justify-between gap-3 px-4 py-[10px] sm:px-7">
        <NavLink
          to="/"
          className="inline-flex shrink-0 items-center gap-[8px] text-[14px] font-bold tracking-tight text-ink no-underline sm:text-[15px]"
        >
          <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-green">
            <span className="absolute -inset-1 animate-ping rounded-full border-[1.5px] border-green opacity-60" />
          </span>
          Software <span className="text-cobalt">Radar</span>
        </NavLink>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <NavLink to="/glossary" className={navClass}>
            Từ điển
          </NavLink>
          <a
            href={`${import.meta.env.BASE_URL}pipeline.html`}
            className={navClass({ isActive: false })}
          >
            Pipeline
          </a>
        </div>
      </div>
    </nav>
  );
}
