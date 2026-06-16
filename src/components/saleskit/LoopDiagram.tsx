export function LoopDiagram() {
  return (
    <div className="figure">
      <div className="fig-title">Due diligence loop: điều doanh nghiệp thật sự mua</div>
      <div className="fig-sub">
        Không phải "miễn trừ tuyệt đối", mà là bằng chứng rằng công ty có quy trình quản trị rủi
        ro.
      </div>
      <div className="loop">
        <div className="lnode">
          <div className="lnum" style={{ background: 'var(--cobalt)' }}>
            1
          </div>
          <div className="ln-name">Monitor</div>
          <div className="ln-sub">Quan sát software signals</div>
        </div>
        <div className="lnode">
          <div className="lnum" style={{ background: 'var(--orange)' }}>
            2
          </div>
          <div className="ln-name">Review</div>
          <div className="ln-sub">IT/admin kiểm tra</div>
        </div>
        <div className="lnode">
          <div className="lnum" style={{ background: 'var(--green)' }}>
            3
          </div>
          <div className="ln-name">Remediate</div>
          <div className="ln-sub">Gỡ app, mua license, whitelist</div>
        </div>
        <div className="lnode">
          <div className="lnum" style={{ background: 'var(--navy)' }}>
            4
          </div>
          <div className="ln-name">Report</div>
          <div className="ln-sub">Lưu lịch sử xử lý</div>
        </div>
      </div>
      <div className="loop-rail">
        <span className="ico">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-3-6.7" />
            <path d="M21 3v5h-5" />
          </svg>
        </span>
        <span className="ttl">
          <b>McKinsey-style value:</b> bán sự yên tâm rằng công ty đã có quy trình đúng đắn — lặp
          lại định kỳ.
        </span>
      </div>
    </div>
  );
}
