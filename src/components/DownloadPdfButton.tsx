import { useEffect } from 'react';
import { Download } from 'lucide-react';

type Props = {
  /** Tên file gợi ý khi lưu PDF (không kèm .pdf). */
  filename: string;
};

/**
 * Nút "Tải PDF" nổi góc dưới phải. Dùng window.print() để người dùng lưu thành PDF —
 * tận dụng bộ @media print sẵn có nên ra bản vector sắc nét, đúng layout web.
 * Tên file lưu = document.title, nên ta đặt title tạm rồi khôi phục sau khi in.
 */
export function DownloadPdfButton({ filename }: Props) {
  useEffect(() => {
    // Phòng trường hợp title chưa kịp khôi phục (vd người dùng huỷ giữa chừng).
    const original = document.title;
    const restore = () => {
      document.title = original;
    };
    window.addEventListener('afterprint', restore);
    return () => {
      window.removeEventListener('afterprint', restore);
      document.title = original;
    };
  }, []);

  function handleDownload() {
    const original = document.title;
    document.title = filename;
    // Khôi phục sau khi hộp thoại in đóng (afterprint cũng đã gắn ở trên).
    const restore = () => {
      document.title = original;
      window.removeEventListener('afterprint', restore);
    };
    window.addEventListener('afterprint', restore);
    window.print();
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      aria-label="Tải trang này về dạng PDF"
      title="Tải PDF (mở hộp thoại in → chọn Save as PDF)"
      className="no-print group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-pill border border-cobalt-deep/30 bg-cobalt px-4 py-2.5 text-[13.5px] font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobalt-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt sm:bottom-7 sm:right-7 print:hidden"
    >
      <Download className="h-[17px] w-[17px] transition-transform duration-200 group-hover:translate-y-0.5" />
      <span>Tải PDF</span>
    </button>
  );
}
