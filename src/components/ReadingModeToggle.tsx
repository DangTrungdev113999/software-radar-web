import { NavLink } from 'react-router-dom';
import { cn } from '../shared/lib/cn';

const item =
  'text-center whitespace-nowrap rounded-[9px] px-4 sm:px-5 py-[9px] text-[13px] sm:text-[13.5px] font-semibold transition-all duration-150 no-underline';

function cls({ isActive }: { isActive: boolean }) {
  return cn(
    item,
    isActive ? 'bg-ink text-white' : 'text-ink-soft hover:text-ink',
  );
}

/** Toggle chuyển giữa bản kỹ thuật (/) và bản dễ đọc (/easy). */
export function ReadingModeToggle() {
  return (
    <div className="no-print mb-2 mt-1 flex flex-wrap items-center justify-between gap-3">
      <div className="inline-flex gap-1 rounded-xl border-[1.5px] border-ink bg-paper-2 p-1">
        <NavLink to="/" end className={cls}>
          Bản kỹ thuật
        </NavLink>
        <NavLink to="/easy" className={cls}>
          Bản dễ đọc
        </NavLink>
      </div>
      <p className="m-0 text-[12.5px] text-ink-faint">Chọn cách đọc phù hợp với bạn</p>
    </div>
  );
}
