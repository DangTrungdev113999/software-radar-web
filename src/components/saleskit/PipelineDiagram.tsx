const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function PipelineDiagram() {
  return (
    <div className="figure">
      <div className="fig-title">Software Radar: passive software visibility</div>
      <div className="fig-sub">
        Không cài agent lên máy nhân viên. Sensor chỉ nhận bản sao traffic từ port mirror.
      </div>
      <div className="pipeline">
        <div className="pstep">
          <div className="picon" style={{ background: 'var(--cobalt-wash)' }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1E50C8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="12" rx="2" />
              <path d="M8 20h8M12 16v4" />
            </svg>
          </div>
          <div className="pstep-num">01</div>
          <div className="pstep-name">LAN traffic</div>
          <div className="pstep-sub">
            PC, laptop, BYOD
            <br />
            DNS / TLS SNI
          </div>
        </div>
        <div className="parrow">
          <ArrowRight />
        </div>
        <div className="pstep">
          <div className="picon" style={{ background: '#E5F5EE' }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1FA971"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7h16M4 7l4-3M4 7l4 3M20 17H4M20 17l-4-3M20 17l-4 3" />
            </svg>
          </div>
          <div className="pstep-num">02</div>
          <div className="pstep-name">Port mirror</div>
          <div className="pstep-sub">
            Managed switch
            <br />
            Copy traffic only
          </div>
        </div>
        <div className="parrow">
          <ArrowRight />
        </div>
        <div className="pstep">
          <div className="picon" style={{ background: 'var(--orange-wash)' }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E8663C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="2" />
              <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
            </svg>
          </div>
          <div className="pstep-num">03</div>
          <div className="pstep-name">Sensor</div>
          <div className="pstep-sub">
            Docker + nDPI
            <br />
            Domain pattern match
          </div>
        </div>
        <div className="parrow">
          <ArrowRight />
        </div>
        <div className="pstep dark">
          <div className="picon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 13h4l3 7 4-16 3 9h4" />
            </svg>
          </div>
          <div className="pstep-num">04</div>
          <div className="pstep-name">Review</div>
          <div className="pstep-sub">
            Dashboard
            <br />
            Action history
          </div>
        </div>
      </div>
      <div className="fig-output">
        <div className="ol">Output cho IT / Admin</div>
        <div className="pills">
          <span className="opill">Hosts đang hoạt động</span>
          <span className="opill">Phần mềm phát hiện</span>
          <span className="opill">Risk theo policy</span>
          <span className="opill">Coverage &amp; blindspots</span>
          <span className="opill">Weekly digest</span>
        </div>
      </div>
    </div>
  );
}
