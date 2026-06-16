export function Timeline() {
  return (
    <div className="figure">
      <div className="fig-title">Lộ trình demo theo phút</div>
      <div className="fig-sub">Mỗi mốc gắn với một tab dashboard và điểm cần nói.</div>
      <div className="timeline">
        <div className="tl-item">
          <div className="tl-time">1–3 phút</div>
          <div className="tl-title">Hosts tab</div>
          <ul className="clean">
            <li>Mỗi thiết bị được track bằng MAC, không chỉ IP.</li>
            <li>IP có thể đổi do DHCP nhưng lịch sử vẫn gom về cùng thiết bị.</li>
            <li>Host có thể gắn nhãn: "Máy kế toán", "Laptop thiết kế", "Máy phòng sales".</li>
          </ul>
        </div>
        <div className="tl-item">
          <div className="tl-time">3–5 phút</div>
          <div className="tl-title">Live Feed</div>
          <ul className="clean">
            <li>Sự kiện realtime khi hệ thống thấy domain/SNI match với pattern phần mềm.</li>
            <li>Màu risk là để ưu tiên rà soát, không phải kết luận vi phạm.</li>
            <li>
              Ví dụ: TeamViewer/AnyDesk giúp IT biết có remote access tool; BitTorrent/P2P là policy
              risk.
            </li>
          </ul>
        </div>
        <div className="tl-item">
          <div className="tl-time">5–7 phút</div>
          <div className="tl-title">Software tab</div>
          <ul className="clean">
            <li>Xem toàn mạng đang có phần mềm nào hoạt động.</li>
            <li>Biết phần mềm đó xuất hiện trên bao nhiêu host.</li>
            <li>Dùng để rà soát: "Công ty có thật sự cần app này không?", "Có nằm trong policy không?"</li>
          </ul>
        </div>
        <div className="tl-item">
          <div className="tl-time">7–8 phút</div>
          <div className="tl-title">Coverage tab</div>
          <ul className="clean">
            <li>Hệ thống minh bạch về blindspot.</li>
            <li>VPN, DoH/ECH, local-only crack/KMS, mobile hotspot có thể làm mất visibility.</li>
            <li>Đây là điểm tạo niềm tin: không overclaim.</li>
          </ul>
        </div>
        <div className="tl-item">
          <div className="tl-time">8–10 phút</div>
          <div className="tl-title">Settings / Pro</div>
          <ul className="clean">
            <li>Pattern update có chữ ký, admin review trước khi apply.</li>
            <li>BYO-key: khách tự dùng OpenAI/Anthropic/Gemini key của họ, không giữ key trên cloud.</li>
            <li>Weekly digest giúp manager đọc tóm tắt thay vì xem dashboard mỗi ngày.</li>
            <li>MCP giúp Claude Desktop query dữ liệu bằng ngôn ngữ tự nhiên.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
