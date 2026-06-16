import { useEffect } from 'react';
import { ReadingModeToggle } from '../components/ReadingModeToggle';
import { PipelineDiagram } from '../components/saleskit/PipelineDiagram';
import { DashboardMock } from '../components/saleskit/DashboardMock';
import { LoopDiagram } from '../components/saleskit/LoopDiagram';
import { FlowChips } from '../components/saleskit/FlowChips';
import { Timeline } from '../components/saleskit/Timeline';

export function SalesKitPage() {
  // Simple reveal-on-scroll, mirroring the static page's IntersectionObserver.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="wrap">
      <div className="pt-5">
        <ReadingModeToggle />
      </div>
      {/* ============ COVER ============ */}
      <header className="cover">
        <span className="eyebrow">
          <span className="radar-dot"></span> Sales Kit · 2026
        </span>
        <h1 className="title">
          Software <span className="accent">Radar</span>
          <br />
          Sales Kit
        </h1>
        <p className="lede">
          Dành cho sales / founder khi nói chuyện với đối tác, đại lý, IT service provider, hoặc
          khách SME. Mục tiêu: giúp người đi bán giải thích đúng sản phẩm, hỏi đúng câu hỏi, demo
          đúng workflow, và không overclaim về pháp lý.
        </p>
        <div className="cover-meta">
          <span className="chip">
            <b>Agentless</b> · không cài máy nhân viên
          </span>
          <span className="chip">
            <b>Self-hosted</b> · data ở lại LAN
          </span>
          <span className="chip">
            <b>Passive</b> · port mirror
          </span>
          <span className="chip">
            <b>SME-first</b>
          </span>
        </div>
        <div className="cover-purpose">
          <div className="purpose-card">
            <div className="k">One-line pitch</div>
            <p>
              Software Radar giúp doanh nghiệp biết thiết bị nào trong mạng đang dùng phần mềm gì,
              bằng cách giám sát DNS/TLS SNI thụ động qua port mirror — không cần cài agent lên máy
              nhân viên.
            </p>
          </div>
          <div className="purpose-card">
            <div className="k">Nói ngắn hơn</div>
            <p>
              <em>
                "Cắm vào switch là biết mạng công ty đang dùng những phần mềm nào, máy nào dùng, rủi
                ro nào cần IT kiểm tra."
              </em>
            </p>
          </div>
        </div>
      </header>

      {/* ============ 2. WHY NOW ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">02</span>
          <h2>Vì sao vấn đề này đang nóng</h2>
        </div>
        <p className="lead-strong">
          Vi phạm bản quyền phần mềm ở Việt Nam không còn là chuyện "để sau tính". Năm 2026, áp lực
          đến từ cả phía Mỹ và phía Chính phủ Việt Nam: Mỹ đưa Việt Nam vào nhóm bị quan ngại cao về
          thực thi sở hữu trí tuệ, còn Việt Nam đang tăng cường kiểm tra và xử lý vi phạm, bao gồm
          bản quyền phần mềm trong doanh nghiệp.
        </p>

        <div className="grid2">
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--cobalt)' }}></span> Bối cảnh Mỹ
            </div>
            <ul className="clean">
              <li>
                USTR công bố <b>Special 301 Report 2026</b> về mức độ bảo hộ và thực thi quyền sở hữu
                trí tuệ của các đối tác thương mại.
              </li>
              <li>
                Trong báo cáo 2026, Việt Nam bị nêu là một điểm nóng về thực thi IP, bao gồm vấn đề{' '}
                <b>unlicensed software use</b>.
              </li>
              <li>
                Điều này tạo áp lực thương mại và reputational risk cho doanh nghiệp Việt Nam, đặc
                biệt là doanh nghiệp có khách hàng/đối tác nước ngoài.
              </li>
            </ul>
          </div>
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--orange)' }}></span> Bối cảnh Việt
              Nam
            </div>
            <ul className="clean warn">
              <li>
                Chính phủ Việt Nam đã phát đi thông điệp tăng cường thực thi quyền sở hữu trí tuệ
                trong năm 2026.
              </li>
              <li>
                Công điện/chiến dịch tháng 5/2026 yêu cầu các bộ, ngành và địa phương tăng cường kiểm
                tra, giám sát, xử lý nghiêm vi phạm SHTT.
              </li>
              <li>
                Bộ Văn hóa, Thể thao và Du lịch được giao tổ chức kiểm tra việc tuân thủ bản quyền,
                trong đó có <b>bản quyền phần mềm máy tính tại doanh nghiệp</b>.
              </li>
              <li>Cổng Thông tin Chính phủ nêu yêu cầu tăng số vụ xử lý vi phạm SHTT trong đợt cao điểm.</li>
            </ul>
          </div>
        </div>

        <h3>Tính nghiêm trọng với SME</h3>
        <p className="muted">SME thường có 4 điểm yếu:</p>
        <ul className="clean bad">
          <li>Không có IT asset inventory đầy đủ.</li>
          <li>Nhân viên dùng BYOD hoặc tự cài phần mềm.</li>
          <li>Không có bằng chứng doanh nghiệp đã chủ động rà soát.</li>
          <li>
            Khi bị hỏi, chủ doanh nghiệp thường chỉ có thể nói <b>"không biết"</b>.
          </li>
        </ul>
        <p className="muted" style={{ marginTop: 14 }}>
          Software Radar không thay thế luật sư hoặc hệ thống SAM enterprise, nhưng giúp doanh nghiệp
          có bước kiểm soát đầu tiên:
        </p>
        <ul className="clean">
          <li>Biết thiết bị nào đang phát sinh chỉ dấu phần mềm thương mại/rủi ro.</li>
          <li>Có dashboard để IT/admin rà soát định kỳ.</li>
          <li>Có lịch sử quan sát để chứng minh doanh nghiệp không thờ ơ.</li>
          <li>Có cơ sở để lập kế hoạch mua license, gỡ phần mềm không cần thiết, hoặc siết policy.</li>
        </ul>

        <div className="quote orange">
          <span className="qlabel">Cách nói với khách</span>
          <em>
            "Điểm quan trọng không phải là phần mềm này kết luận ai vi phạm. Điểm quan trọng là doanh
            nghiệp bắt đầu có quy trình nhìn thấy rủi ro, rà soát và xử lý. Trong bối cảnh Việt Nam
            và Mỹ đều đang chú ý mạnh hơn tới SHTT, việc không có visibility là rủi ro quản trị."
          </em>
        </div>

        <h3 className="alt">Concept "McKinsey" / due diligence</h3>
        <p className="muted">
          Nhiều doanh nghiệp không chỉ mua phần mềm vì tính năng. Họ mua{' '}
          <b>sự yên tâm về trách nhiệm quản trị</b>. Một phần giá trị của McKinsey, Big 4, luật sư,
          kiểm toán là: khi có vấn đề xảy ra, doanh nghiệp chứng minh được rằng họ đã có cố vấn, có
          quy trình, có ghi nhận, có hành động. Software Radar đi theo logic tương tự ở quy mô SME:
        </p>
        <ul className="clean">
          <li>Không bán lời hứa "miễn trách nhiệm tuyệt đối".</li>
          <li>
            Bán khả năng chứng minh doanh nghiệp <b>không thờ ơ</b> với rủi ro phần mềm.
          </li>
          <li>Bán quy trình: quan sát → rà soát → xử lý → lưu lịch sử.</li>
          <li>
            Khi có audit hoặc tranh chấp, doanh nghiệp có thể nói:{' '}
            <b>
              "Chúng tôi có hệ thống theo dõi, có dashboard, có lịch sử phát hiện và đã yêu cầu IT xử
              lý."
            </b>
          </li>
        </ul>

        <FlowChips />

        <div className="quote">
          <span className="qlabel">Câu sale nên dùng</span>
          <em>
            "Điều khách hàng mua không chỉ là dashboard. Họ mua một lớp bằng chứng rằng công ty đã
            chủ động quản trị rủi ro phần mềm, giống cách doanh nghiệp thuê tư vấn/kiểm toán để chứng
            minh đã làm due diligence."
          </em>
        </div>

        <h3>Nguồn để sale tham khảo</h3>
        <div className="sources">
          <div className="src">
            <span className="si">USTR</span>
            <span>2026 Special 301 Report.</span>
          </div>
          <div className="src">
            <span className="si">USTR</span>
            <span>
              USTR Releases 2026 Special 301 Report on Intellectual Property Protection and
              Enforcement.
            </span>
          </div>
          <div className="src">
            <span className="si">VN GOV</span>
            <span>
              Cổng Thông tin Chính phủ, "Gov't strengthens crackdown on infringements of
              intellectual property rights", May 2026.
            </span>
          </div>
          <div className="src">
            <span className="si">PRESS</span>
            <span>
              Vietnam News / VietnamNet, tin về chiến dịch kiểm tra SHTT và bản quyền phần mềm tại
              doanh nghiệp, May 2026.
            </span>
          </div>
        </div>
      </section>

      {/* ============ 3. PROFILE ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">03</span>
          <h2>Software Radar là dự án gì</h2>
        </div>

        <h3>Tại sao làm</h3>
        <p className="muted">
          Phần lớn SME Việt Nam không có công cụ đơn giản để biết trong mạng nội bộ đang có phần mềm
          gì hoạt động. Các giải pháp SAM truyền thống yêu cầu cài agent lên từng máy, tốn chi phí và
          khó triển khai trong môi trường BYOD. Các công cụ NDR/NTA enterprise thì mạnh nhưng quá
          rộng, quá đắt, và không tập trung vào bài toán software visibility/compliance.
        </p>
        <p className="lead-strong">
          Software Radar được làm để lấp khoảng trống đó:{' '}
          <span style={{ color: 'var(--cobalt)' }}>một công cụ nhẹ, self-hosted, không agent</span>,
          giúp SME nhìn thấy chỉ dấu phần mềm qua traffic mạng.
        </p>

        <div className="grid2">
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--cobalt)' }}></span> Sản phẩm làm gì
            </div>
            <ul className="clean">
              <li>Bắt bản sao traffic từ port mirror của switch/router.</li>
              <li>Phân tích DNS và TLS SNI bằng nDPI.</li>
              <li>Map traffic về từng thiết bị bằng MAC/IP.</li>
              <li>Match domain/SNI với danh mục phần mềm.</li>
              <li>Hiển thị dashboard realtime: Hosts, Live Feed, Software, Coverage, Settings.</li>
              <li>Cho phép cập nhật pattern, dùng AI/BYO-key, MCP và weekly digest trong bản Pro.</li>
            </ul>
          </div>
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--green)' }}></span> Công dụng thực tế
            </div>
            <ul className="clean">
              <li>IT biết thiết bị nào đang dùng phần mềm gì.</li>
              <li>Manager thấy rủi ro phần mềm mới, VPN, P2P, remote access chưa phê duyệt.</li>
              <li>Doanh nghiệp có lịch sử quan sát để rà soát policy/license.</li>
              <li>MSP có thể dùng như công cụ audit nhẹ cho nhiều khách SME.</li>
              <li>
                Sau pilot, khách có danh sách việc cần làm: gỡ app, mua license, whitelist, update
                policy, hoặc bổ sung pattern theo ngành.
              </li>
            </ul>
          </div>
        </div>

        <h3>Ưu điểm</h3>
        <div className="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Ưu điểm</th>
                <th>Ý nghĩa với khách</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row-em">
                <td>Không agent</td>
                <td>Không cần cài vào máy nhân viên, hợp BYOD</td>
              </tr>
              <tr className="row-em">
                <td>Self-hosted</td>
                <td>Dữ liệu ở lại mạng khách hàng</td>
              </tr>
              <tr className="row-em">
                <td>Passive</td>
                <td>Không nằm inline, không làm gián đoạn mạng</td>
              </tr>
              <tr className="row-em">
                <td>Triển khai nhanh</td>
                <td>Docker + port mirror + browser</td>
              </tr>
              <tr className="row-em">
                <td>SME-first</td>
                <td>Dashboard đơn giản, không đòi SOC/SAM team</td>
              </tr>
              <tr className="row-em">
                <td>Có blindspot disclosure</td>
                <td>Nói rõ giới hạn: VPN, ECH/DoH, mobile hotspot, local-only traffic</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="alt">So sánh nhanh với đối thủ</h3>
        <div className="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Nhóm giải pháp</th>
                <th>Ví dụ</th>
                <th>Mạnh ở đâu</th>
                <th>Vì sao Software Radar khác</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>SAM enterprise</b>
                </td>
                <td>Flexera, Snow, ServiceNow SAM</td>
                <td>Quản lý license sâu, reconciliation mạnh</td>
                <td>Đắt, nặng, thường cần agent và đội IT trưởng thành</td>
              </tr>
              <tr>
                <td>
                  <b>Endpoint management</b>
                </td>
                <td>Intune, ManageEngine, Jamf</td>
                <td>Quản trị endpoint, inventory chính xác hơn</td>
                <td>Cần cài agent/quản lý thiết bị, khó với BYOD</td>
              </tr>
              <tr>
                <td>
                  <b>NDR/NTA</b>
                </td>
                <td>ntopng, Cisco Secure Network Analytics, Darktrace</td>
                <td>Network visibility/security rộng</td>
                <td>Không tập trung software compliance/risk workflow cho SME</td>
              </tr>
              <tr>
                <td>
                  <b>Piracy detection endpoint</b>
                </td>
                <td>Ping32</td>
                <td>Phát hiện piracy sâu hơn nhờ endpoint agent</td>
                <td>Cần agent, thị trường hẹp, không phải network-passive</td>
              </tr>
              <tr className="row-self">
                <td>
                  <b>Software Radar</b>
                </td>
                <td>Software Radar / NCR</td>
                <td>Agentless software visibility cho SME</td>
                <td>Nhẹ, self-hosted, tập trung rà soát phần mềm và quy trình compliance</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="quote">
          <span className="qlabel">Câu chốt profile</span>
          <em>
            "Software Radar không cố thay Flexera hay endpoint agent. Nó là lớp visibility đầu tiên
            cho SME: triển khai nhẹ, thấy nhanh, đủ để IT và chủ doanh nghiệp bắt đầu quản trị rủi ro
            phần mềm một cách có quy trình."
          </em>
        </div>
      </section>

      {/* ============ 4. PAINS ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">04</span>
          <h2>Vấn đề khách đang gặp</h2>
        </div>
        <h3>Pain chính</h3>
        <ul className="clean bad">
          <li>Chủ doanh nghiệp không biết nhân viên đang dùng phần mềm gì trong mạng công ty.</li>
          <li>
            IT không có tool nào nhanh để nhìn nhanh Zoom, TeamViewer, AnyDesk, BitTorrent, VPN cá
            nhân, CAD/design/accounting tools.
          </li>
          <li>
            SME không muốn cài agent lên từng máy vì vướng BYOD, quyền riêng tư, thiếu IT, hoặc nhân
            viên phản đối.
          </li>
          <li>
            Tool enterprise như Flexera, ServiceNow SAM, Cisco, Darktrace quá đắt và quá nặng cho
            SME.
          </li>
        </ul>
        <div className="quote">
          <span className="qlabel">Cách nói với khách</span>
          <em>
            "Hiện tại nếu anh/chị không cài agent lên từng máy, gần như không có visibility. Software
            Radar chọn cách nhẹ hơn: chỉ nhìn tín hiệu mạng để tạo bản đồ phần mềm đang hoạt động. Nó
            không đọc file, không chụp màn hình, không lấy dữ liệu cá nhân."
          </em>
        </div>
      </section>

      {/* ============ 5. ICP ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">05</span>
          <h2>Khách phù hợp</h2>
        </div>
        <h3>ICP tốt</h3>
        <div className="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Nhóm khách</th>
                <th>Vì sao phù hợp</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row-em">
                <td>Công ty 30–500 máy</td>
                <td>Đủ lớn để có rủi ro, nhưng chưa đủ lớn để mua SAM enterprise</td>
              </tr>
              <tr className="row-em">
                <td>Thiết kế, xây dựng, kiến trúc, in ấn</td>
                <td>Dùng nhiều Adobe, Autodesk, Corel, CAD/design tools</td>
              </tr>
              <tr className="row-em">
                <td>Kế toán, dịch vụ, giáo dục, đào tạo</td>
                <td>Nhiều máy văn phòng, BYOD, remote access</td>
              </tr>
              <tr className="row-em">
                <td>IT service provider / MSP</td>
                <td>Có thể triển khai cho nhiều khách SME</td>
              </tr>
              <tr className="row-em">
                <td>Công ty đang chuẩn bị audit hoặc rà soát phần mềm</td>
                <td>Có nhu cầu visibility và bằng chứng quy trình</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="alt">Không phù hợp ở giai đoạn hiện tại</h3>
        <ul className="clean bad">
          <li>Nhà riêng hoặc mạng không có managed switch/router hỗ trợ mirror.</li>
          <li>Khách muốn kết luận pháp lý "máy này chắc chắn vi phạm bản quyền".</li>
          <li>Khách yêu cầu gỡ app từ xa, block traffic, hoặc quét ổ cứng endpoint.</li>
          <li>
            Khách enterprise cần SSO, multi-tenant, SIEM integration, formal SAM reconciliation ngay
            từ đầu.
          </li>
        </ul>
      </section>

      {/* ============ 6. POSITIONING ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">06</span>
          <h2>Định vị sản phẩm</h2>
        </div>
        <div className="grid2">
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--green)' }}></span> Software Radar LÀ
              gì
            </div>
            <ul className="clean">
              <li>Passive network software monitor.</li>
              <li>Chạy trong mạng khách hàng.</li>
              <li>Phân tích DNS và TLS SNI qua nDPI.</li>
              <li>Map traffic về thiết bị theo MAC/IP.</li>
              <li>Hiển thị dashboard: Hosts, Live Feed, Software, Coverage, Settings.</li>
              <li>Có AI/BYO-key, MCP, weekly digest cho bản Pro.</li>
            </ul>
          </div>
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--red)' }}></span> Software Radar
              KHÔNG phải gì
            </div>
            <ul className="clean bad">
              <li>Không phải endpoint agent.</li>
              <li>Không đọc file, không scan ổ cứng.</li>
              <li>Không phải công cụ kết luận vi phạm pháp lý.</li>
              <li>Không thay thế hoàn toàn SAM/ITAM enterprise.</li>
              <li>
                Không nhìn được traffic đi qua VPN cá nhân, 4G/mobile hotspot, local crack/KMS chạy
                ngay trên máy.
              </li>
            </ul>
          </div>
        </div>
        <div className="quote">
          <span className="qlabel">Câu bắt buộc khi nói về compliance</span>
          <em>
            "Software Radar báo cáo chỉ dấu mạng liên quan đến phần mềm đang hoạt động. Nó giúp doanh
            nghiệp rà soát và chứng minh có quy trình giám sát, nhưng không tự kết luận license hợp
            lệ hay không hợp lệ nếu thiếu hồ sơ mua sắm/license."
          </em>
        </div>
      </section>

      {/* ============ 7. VALUE PROP ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">07</span>
          <h2>Value proposition</h2>
        </div>
        <div className="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Giá trị</th>
                <th>Cách giải thích</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row-em">
                <td>Không cần agent</td>
                <td>Không đụng máy nhân viên, hợp BYOD, triển khai nhanh</td>
              </tr>
              <tr className="row-em">
                <td>Data ở lại nội bộ</td>
                <td>Chạy self-hosted, raw packet không gửi lên cloud</td>
              </tr>
              <tr className="row-em">
                <td>Dễ triển khai</td>
                <td>Docker + port mirror, 1 máy Linux trong LAN</td>
              </tr>
              <tr className="row-em">
                <td>Visibility nhanh</td>
                <td>Sau vài phút bắt đầu thấy host/software active</td>
              </tr>
              <tr className="row-em">
                <td>Chi phí SME</td>
                <td>Nhẹ hơn nhiều so với SAM/NDR enterprise</td>
              </tr>
              <tr className="row-em">
                <td>Có workflow review</td>
                <td>Admin thấy tín hiệu, review, gắn nhãn host, xử lý theo chính sách</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============ 8. DEMO SCRIPT ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">08</span>
          <h2>Demo script 10 phút</h2>
        </div>
        <div className="quote">
          <span className="qlabel">0–1 phút: mở vấn đề</span>
          <em>
            "Em demo theo góc nhìn IT manager: sáng mở dashboard xem mạng công ty hôm qua/today có
            phần mềm gì mới, máy nào phát sinh rủi ro, và coverage sensor có ổn không."
          </em>
        </div>
        <Timeline />
      </section>

      {/* ============ 9. DISCOVERY ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">09</span>
          <h2>Discovery questions</h2>
        </div>
        <div className="grid2">
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--cobalt)' }}></span> Câu hỏi để
              qualify nhanh
            </div>
            <ul className="clean">
              <li>Công ty hiện có khoảng bao nhiêu máy tính/laptop trong LAN?</li>
              <li>Nhân viên có dùng máy cá nhân/BYOD không?</li>
              <li>Công ty có managed switch hoặc router hỗ trợ port mirror không?</li>
              <li>
                Hiện anh/chị có cách nào biết nhân viên đang dùng TeamViewer, VPN, P2P,
                CAD/design/accounting tools không?
              </li>
              <li>Công ty có từng bị audit/license review hoặc có kế hoạch tự rà soát phần mềm không?</li>
              <li>Ai là người xem dashboard hằng ngày: IT, admin, chủ doanh nghiệp, hay MSP?</li>
              <li>Dữ liệu có được phép gửi cloud không, hay bắt buộc self-hosted?</li>
            </ul>
          </div>
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--green)' }}></span> Tín hiệu khách có
              nhu cầu mạnh
            </div>
            <ul className="clean">
              <li>"Không muốn cài agent lên máy nhân viên."</li>
              <li>"Không biết nhân viên dùng app gì."</li>
              <li>"Có BYOD."</li>
              <li>"Sợ audit phần mềm."</li>
              <li>"Đang dùng TeamViewer/AnyDesk lung tung."</li>
              <li>"Muốn báo cáo định kỳ cho sếp."</li>
              <li>"Có nhiều chi nhánh/khách hàng nếu là MSP."</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ 10. OBJECTIONS ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">10</span>
          <h2>Objection handling</h2>
        </div>
        <div className="obj">
          <div className="q">
            <span className="mark">“</span>Không cài agent thì có chính xác không?
          </div>
          <div className="a">
            "Không chính xác như endpoint agent trong việc biết app đã cài trên ổ cứng. Nhưng
            Software Radar không cố thay endpoint agent. Nó cho visibility nhanh về phần mềm đang hoạt
            động qua mạng, triển khai nhẹ hơn rất nhiều. Với SME, đây thường là bước đầu đủ giá trị
            trước khi đầu tư SAM đầy đủ."
          </div>
        </div>
        <div className="obj">
          <div className="q">
            <span className="mark">“</span>Có phát hiện được phần mềm lậu không?
          </div>
          <div className="a">
            "Sản phẩm phát hiện chỉ dấu rủi ro qua mạng, ví dụ domain phần mềm thương mại, remote
            access, P2P, VPN, một số pattern liên quan activation/update. Nó không kết luận pháp lý
            là phần mềm lậu. Kết quả dùng để IT rà soát với hồ sơ license và policy nội bộ."
          </div>
        </div>
        <div className="obj">
          <div className="q">
            <span className="mark">“</span>Nếu nhân viên dùng VPN thì sao?
          </div>
          <div className="a">
            "Khi dùng VPN, traffic thật nằm trong tunnel nên hệ thống không đọc được domain bên
            trong. Software Radar có thể ghi nhận có VPN traffic và đưa vào blindspot/risk. Đây là
            giới hạn cố hữu của giải pháp agentless."
          </div>
        </div>
        <div className="obj">
          <div className="q">
            <span className="mark">“</span>Có ảnh hưởng hiệu năng mạng không?
          </div>
          <div className="a">
            "Không nằm inline, không proxy, không chặn traffic. Hệ thống chỉ nhận bản sao traffic từ
            port mirror, nên nếu sensor tắt thì mạng vẫn chạy bình thường."
          </div>
        </div>
        <div className="obj">
          <div className="q">
            <span className="mark">“</span>Có vi phạm quyền riêng tư nhân viên không?
          </div>
          <div className="a">
            "Hệ thống không đọc nội dung payload, không chụp màn hình, không scan file. Nó lưu
            metadata như domain/SNI, phần mềm match, MAC/IP, thời điểm. Doanh nghiệp vẫn nên thông
            báo chính sách giám sát mạng nội bộ cho nhân viên."
          </div>
        </div>
        <div className="obj">
          <div className="q">
            <span className="mark">“</span>Tại sao không dùng ntopng?
          </div>
          <div className="a">
            "ntopng là network monitoring tổng quát. Software Radar tập trung vào software visibility
            và compliance workflow cho SME: danh mục phần mềm, risk theo policy, dashboard đơn giản,
            guide triển khai, và sau này report/digest cho quản lý."
          </div>
        </div>
      </section>

      {/* ============ 11. USER GUIDE ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">11</span>
          <h2>User guide cho khách</h2>
        </div>
        <p className="muted">Phần này dùng khi khách hỏi: "Sau khi cài xong thì dùng thế nào?"</p>
        <h3>Đăng nhập</h3>
        <div className="login-box">
          <span className="lt">Mở browser:</span>
          <code>{'http://<server-ip>:8080'}</code>
        </div>
        <p className="muted">
          Lần đầu hệ thống yêu cầu tạo mật khẩu admin. Sau đó admin dùng mật khẩu này để vào
          dashboard.
        </p>

        <div className="guide">
          <div className="gcard">
            <div className="gt">
              <span className="pin">TAB</span> Hosts
            </div>
            <div className="gd">Xem các thiết bị đã phát hiện trong mạng.</div>
            <ul className="clean">
              <li>
                <code>MAC address</code> — định danh chính của thiết bị.
              </li>
              <li>
                <code>IP hiện tại</code> — IP gần nhất hệ thống thấy.
              </li>
              <li>
                <code>Hostname/label</code> — tên máy hoặc nhãn admin đặt.
              </li>
              <li>
                <code>Software count</code> — số phần mềm đã match.
              </li>
              <li>
                <code>Last seen</code> — lần cuối thiết bị có traffic.
              </li>
            </ul>
            <p className="muted" style={{ fontSize: 13, margin: '8px 0 0' }}>
              <b>Workflow:</b> vào Hosts → tìm host nhiều software/traffic mới → gắn nhãn → mở chi
              tiết xem phần mềm/domain liên quan.
            </p>
          </div>
          <div className="gcard">
            <div className="gt">
              <span className="pin">TAB</span> Live Feed
            </div>
            <div className="gd">Xem sự kiện realtime.</div>
            <ul className="clean">
              <li>
                <span className="badge b-green">Xanh</span> phần mềm/risk thấp.
              </li>
              <li>
                <span className="badge b-yellow">Vàng</span> cần chú ý.
              </li>
              <li>
                <span className="badge b-red">Đỏ</span> rủi ro cao theo policy nội bộ.
              </li>
            </ul>
            <p className="muted" style={{ fontSize: 13, margin: '8px 0 0' }}>
              <b>Workflow:</b> mở Live Feed mỗi sáng → ưu tiên event đỏ/vàng → xem MAC/IP và phần mềm
              → chuyển sang Hosts để gắn nhãn hoặc xử lý.
            </p>
          </div>
          <div className="gcard">
            <div className="gt">
              <span className="pin">TAB</span> Software
            </div>
            <div className="gd">Xem toàn mạng đang có phần mềm nào hoạt động.</div>
            <ul className="clean">
              <li>Tên phần mềm · Vendor · Category.</li>
              <li>Risk level.</li>
              <li>Số host đang dùng.</li>
            </ul>
            <p className="muted" style={{ fontSize: 13, margin: '8px 0 0' }}>
              <b>Workflow:</b> vào Software → sắp xếp theo số host/risk → chọn phần mềm cần rà soát →
              đối chiếu với policy/license nội bộ.
            </p>
          </div>
          <div className="gcard">
            <div className="gt">
              <span className="pin">TAB</span> Coverage
            </div>
            <div className="gd">Kiểm tra sensor có đang thấy mạng đúng kỳ vọng không.</div>
            <ul className="clean">
              <li>Packet stats · Drop rate.</li>
              <li>Interface đang capture.</li>
              <li>Blindspot: VPN, DoH/ECH, mobile hotspot, local-only.</li>
            </ul>
            <p className="muted" style={{ fontSize: 13, margin: '8px 0 0' }}>
              <b>Workflow:</b> sau deploy kiểm tra Coverage trước → nếu không thấy host/event kiểm
              tra port mirror và interface → nếu drop rate cao đổi NIC/server hoặc giảm nguồn mirror.
            </p>
          </div>
        </div>
        <div className="gcard" style={{ marginTop: 14 }}>
          <div className="gt">
            <span className="pin">TAB</span> Settings
          </div>
          <div className="gd">Cấu hình tính năng nâng cao.</div>
          <ul className="clean">
            <li>
              <b>AI key:</b> BYO-key cho OpenAI/Anthropic/Gemini/custom provider.
            </li>
            <li>
              <b>L2 update:</b> kiểm tra pattern update, xem diff, approve.
            </li>
            <li>
              <b>AI Agent:</b> đề xuất pattern mới.
            </li>
            <li>
              <b>Weekly Digest:</b> tạo báo cáo tuần bằng AI.
            </li>
          </ul>
        </div>
      </section>

      {/* ============ 12. PILOT ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">12</span>
          <h2>Pilot proposal</h2>
        </div>
        <div className="grid2">
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--cobalt)' }}></span> Mục tiêu pilot
              (7–14 ngày)
            </div>
            <ul className="clean">
              <li>Sensor bắt được traffic ổn định qua port mirror.</li>
              <li>Dashboard phát hiện được host/software thực tế.</li>
              <li>IT/admin hiểu và dùng được workflow hằng ngày.</li>
              <li>Danh sách pattern cần bổ sung cho ngành của khách được ghi nhận.</li>
            </ul>
          </div>
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--orange)' }}></span> Điều kiện cần từ
              khách
            </div>
            <ul className="clean warn">
              <li>1 máy Linux/VM/mini PC trong LAN.</li>
              <li>Docker Engine.</li>
              <li>1 port mirror từ switch/router.</li>
              <li>1 người IT/admin phụ trách.</li>
              <li>Cho phép truy cập dashboard nội bộ qua browser.</li>
            </ul>
          </div>
        </div>
        <h3>Success criteria</h3>
        <div className="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Tiêu chí</th>
                <th>Cách đo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row-em">
                <td>Thấy host trong mạng</td>
                <td>Hosts tab có thiết bị sau 1–2 giờ</td>
              </tr>
              <tr className="row-em">
                <td>Thấy phần mềm phổ biến</td>
                <td>
                  Software tab có các app như Zoom, Teams, Google, Microsoft, remote access
                </td>
              </tr>
              <tr className="row-em">
                <td>IT hiểu rủi ro/blindspot</td>
                <td>Coverage tab được đọc và xác nhận</td>
              </tr>
              <tr className="row-em">
                <td>Có action rõ</td>
                <td>Ít nhất 3 host/app được rà soát hoặc gắn nhãn</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="quote">
          <span className="qlabel">Pilot close question</span>
          <em>
            "Sau 7 ngày, nếu dashboard giúp anh/chị nhìn được phần mềm/remote access/VPN/P2P trong
            mạng mà trước đây không thấy, mình có thể chuyển sang gói theo dõi định kỳ không?"
          </em>
        </div>
      </section>

      {/* ============ 13. PRICING ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">13</span>
          <h2>Pricing framing</h2>
        </div>
        <p className="muted">Chưa chốt giá công khai thì nói theo hướng pilot:</p>
        <div className="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Gói</th>
                <th>Đối tượng</th>
                <th>Nội dung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Free / Community</b>
                </td>
                <td>Team nhỏ, self-serve</td>
                <td>Dashboard cơ bản, bundled patterns</td>
              </tr>
              <tr>
                <td>
                  <b>Pilot</b>
                </td>
                <td>SME muốn thử nghiệm nghiêm túc</td>
                <td>Hỗ trợ deploy, review kết quả 7–14 ngày, bổ sung pattern theo ngành</td>
              </tr>
              <tr className="row-self">
                <td>
                  <b>Pro / NCR</b>
                </td>
                <td>Khách cần compliance workflow</td>
                <td>AI digest, MCP, signed updates, báo cáo định kỳ, support ưu tiên</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="quote">
          <span className="qlabel">Câu nói an toàn</span>
          <em>
            "Giai đoạn đầu mình ưu tiên pilot để chứng minh visibility trước. Sau pilot mới chốt gói
            theo số host/site và mức support."
          </em>
        </div>
      </section>

      {/* ============ 14. LEAVE-BEHIND ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">14</span>
          <h2>Leave-behind summary</h2>
        </div>
        <p className="muted">Gửi cho khách sau buổi gặp:</p>
        <div className="quote">
          <em>
            Software Radar là công cụ giám sát phần mềm qua mạng cho SME. Hệ thống chạy self-hosted
            trong LAN, nhận bản sao traffic từ port mirror, phân tích DNS/TLS SNI để nhận diện phần
            mềm đang hoạt động trên từng thiết bị. Sản phẩm không cần cài agent, không đọc file cá
            nhân, không gửi raw packet lên cloud. Kết quả dùng để IT/admin rà soát policy, remote
            access, VPN/P2P, và các chỉ dấu phần mềm thương mại cần kiểm tra license.
          </em>
        </div>
        <h3>Link nội bộ</h3>
        <ul className="clean">
          <li>
            Deployment guide: <code>DEPLOYMENT.md</code>
          </li>
          <li>
            User guide: <code>USER_GUIDE.md</code>
          </li>
          <li>
            Landing docs page: <code>landing/docs.html</code>
          </li>
        </ul>
      </section>

      {/* ============ 15. ILLUSTRATIONS ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">15</span>
          <h2>Ảnh minh hoạ cho sales deck</h2>
        </div>
        <p className="muted">
          Các hình dưới đây là minh hoạ concept, dùng để đưa vào sales deck, proposal hoặc email
          follow-up. Khi có screenshot thật từ pilot, nên thay hình dashboard mockup bằng screenshot
          sản phẩm đang chạy.
        </p>

        <PipelineDiagram />

        <h3 className="alt">Giao diện dashboard minh hoạ</h3>
        <DashboardMock />

        <h3>Vòng lặp due diligence</h3>
        <LoopDiagram />
      </section>

      {/* footer */}
      <footer className="foot">
        <div className="fbrand">Software Radar — Sales Kit</div>
        <div>Passive software visibility cho SME · agentless · self-hosted · 2026</div>
      </footer>
    </div>
  );
}
