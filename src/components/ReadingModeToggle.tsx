import { NavLink } from 'react-router-dom';
import { cn } from '../shared/lib/cn';

const item =
  'text-center whitespace-nowrap rounded-[10px] px-5 py-[9px] text-[13.5px] font-semibold transition-all duration-150 no-underline';

function cls({ isActive }: { isActive: boolean }) {
  return cn(
    item,
    isActive ? 'bg-white text-cobalt shadow-card' : 'text-ink-soft hover:text-ink',
  );
}

/** Toggle chuyển giữa bản kỹ thuật (/) và bản dễ đọc (/easy). */
export function ReadingModeToggle() {
  return (
    <div className="no-print mb-2 mt-1 flex flex-wrap items-center justify-between gap-3">
      <div className="inline-flex gap-1 rounded-xl border border-line bg-paper-2 p-1">
        <NavLink to="/" end className={cls}>
          Bản kỹ thuật
        </NavLink>
        <NavLink to="/easy" className={cls}>
          Bản dễ đọc
        </NavLink>
      </div>
    </div>
  );
}
