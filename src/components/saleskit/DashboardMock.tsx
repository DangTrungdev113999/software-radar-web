export function DashboardMock() {
  return (
    <div className="dash">
      <div className="dash-top">
        <div className="brand">
          <span className="dash-logo">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="4" />
              <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
            </svg>
          </span>{' '}
          Software Radar
        </div>
        <div className="tag">
          <span className="radar-dot"></span> self-hosted sensor
        </div>
      </div>
      <div className="dash-body">
        <div className="dash-stats">
          <div className="stat">
            <div className="sh">
              <span className="sl">Active hosts</span>
              <span className="sdot" style={{ background: 'var(--green)' }}></span>
            </div>
            <div className="sv">128</div>
          </div>
          <div className="stat">
            <div className="sh">
              <span className="sl">Software detected</span>
              <span className="sdot" style={{ background: 'var(--cobalt)' }}></span>
            </div>
            <div className="sv">37</div>
          </div>
          <div className="stat">
            <div className="sh">
              <span className="sl">Policy risks</span>
              <span className="sdot" style={{ background: 'var(--yellow)' }}></span>
            </div>
            <div className="sv">9</div>
          </div>
          <div className="stat">
            <div className="sh">
              <span className="sl">Packet drop</span>
              <span className="sdot" style={{ background: 'var(--cobalt)' }}></span>
            </div>
            <div className="sv">0.1%</div>
          </div>
        </div>
        <div className="dash-panels">
          <div className="panel">
            <div className="ph">Live feed</div>
            <div className="feed">
              <div className="fitem">
                <span className="fb" style={{ background: 'var(--green)' }}></span>{' '}
                <span>
                  Zoom observed on <b>Laptop-Sales-04</b>
                </span>
              </div>
              <div className="fitem">
                <span className="fb" style={{ background: 'var(--yellow)' }}></span>{' '}
                <span>
                  TeamViewer observed on <b>Design-PC-12</b>
                </span>
              </div>
              <div className="fitem">
                <span className="fb" style={{ background: 'var(--red)' }}></span>{' '}
                <span>
                  BitTorrent traffic on <b>3C:52:A1…</b> · review required
                </span>
              </div>
              <div className="fitem">
                <span className="fb" style={{ background: 'var(--green)' }}></span>{' '}
                <span>
                  Microsoft 365 observed on <b>Finance-PC-02</b>
                </span>
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="ph">Top software</div>
            <div className="toplist">
              <div className="titem">
                <span className="tn">Microsoft Teams</span>
                <span className="tc">64 hosts</span>
              </div>
              <div className="titem">
                <span className="tn">Adobe services</span>
                <span className="tc">18 hosts</span>
              </div>
              <div className="titem">
                <span className="tn">AnyDesk</span>
                <span className="tc">7 hosts</span>
              </div>
              <div className="titem">
                <span className="tn">BitTorrent</span>
                <span className="tc warn">3 hosts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
