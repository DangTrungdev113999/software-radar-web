import { useEffect } from 'react';
import { ReadingModeToggle } from '../components/ReadingModeToggle';
import { DownloadPdfButton } from '../components/DownloadPdfButton';
import { PipelineDiagram } from '../components/saleskit/PipelineDiagram';
import { DashboardMock } from '../components/saleskit/DashboardMock';
import { LoopDiagram } from '../components/saleskit/LoopDiagram';
import { FlowChips } from '../components/saleskit/FlowChips';
import { Timeline } from '../components/saleskit/Timeline';

export function SalesKitEasyPage() {
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
        <h1 className="title">
          Software <span className="accent">Radar</span>
          <br />
          Sales Kit
        </h1>
        <p className="lede">
          Bản này viết lại bằng lời thường, giải thích mọi thuật ngữ — dành cho người không rành kỹ
          thuật. Một bạn sales chưa biết gì về mạng máy tính cũng đọc và hiểu được, để nói chuyện tự
          tin với khách hàng.
        </p>
        <div className="cover-meta">
          <span className="chip">
            <b>Không cài lên máy nhân viên</b>
          </span>
          <span className="chip">
            <b>Dữ liệu ở lại công ty</b>
          </span>
          <span className="chip">
            <b>Chỉ đứng nhìn, không can thiệp</b>
          </span>
          <span className="chip">
            <b>Cho công ty vừa và nhỏ</b>
          </span>
        </div>
        <div className="cover-purpose">
          <div className="purpose-card">
            <div className="k">Nói một câu là gì</div>
            <p>
              Software Radar giúp công ty biết máy nào trong văn phòng đang dùng phần mềm gì, bằng
              cách lặng lẽ quan sát dữ liệu chạy qua mạng — không cần cài thêm phần mềm nào lên máy
              của nhân viên.
            </p>
          </div>
          <div className="purpose-card">
            <div className="k">Nói ngắn hơn nữa</div>
            <p>
              <em>
                "Cắm vào hộp chia mạng của công ty là biết cả văn phòng đang xài những phần mềm nào,
                máy nào xài, chỗ nào có rủi ro cần IT kiểm tra."
              </em>
            </p>
          </div>
        </div>
        <div className="plain">
          <span className="plabel">Hiểu nôm na</span> Mạng nội bộ (LAN) là <b>hệ thống nối các máy
          trong cùng một văn phòng</b> lại với nhau, giống đường dây điện thoại nội bộ của một khách
          sạn. Software Radar đứng bên trong mạng đó và <b>chỉ nhìn</b>, không sờ vào máy ai.
        </div>
      </header>

      {/* ============ 2. WHY NOW ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">02</span>
          <h2>Vì sao vấn đề này đang nóng</h2>
        </div>
        <p className="lead-strong">
          Chuyện dùng phần mềm lậu (phần mềm không mua bản quyền) ở Việt Nam giờ không còn là chuyện
          "để sau tính". Năm 2026, áp lực đến từ cả hai phía: phía Mỹ và phía Chính phủ Việt Nam. Mỹ
          xếp Việt Nam vào nhóm đáng lo về việc xài phần mềm không bản quyền, còn Việt Nam đang siết
          kiểm tra và xử phạt mạnh tay hơn, bao gồm cả phần mềm lậu trong doanh nghiệp.
        </p>

        <div className="grid2">
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--cobalt)' }}></span> Phía Mỹ
            </div>
            <ul className="clean">
              <li>
                Cơ quan thương mại Mỹ (USTR) hằng năm ra một bản báo cáo nêu tên các nước còn để xảy
                ra vi phạm bản quyền.
              </li>
              <li>
                Trong báo cáo năm 2026, Việt Nam bị nêu tên, trong đó có vấn đề doanh nghiệp dùng
                phần mềm không bản quyền.
              </li>
              <li>
                Bị nêu tên gây áp lực thương mại và làm xấu hình ảnh công ty, nhất là công ty có
                khách hàng hoặc đối tác nước ngoài.
              </li>
            </ul>
          </div>
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--orange)' }}></span> Phía Việt Nam
            </div>
            <ul className="clean warn">
              <li>Chính phủ đã nói rõ sẽ tăng cường xử lý vi phạm bản quyền trong năm 2026.</li>
              <li>
                Có chiến dịch từ tháng 5/2026 yêu cầu các bộ, ngành, địa phương kiểm tra và xử nghiêm
                vi phạm.
              </li>
              <li>
                Bộ Văn hóa, Thể thao và Du lịch được giao đi kiểm tra việc tuân thủ bản quyền, trong
                đó có <b>bản quyền phần mềm máy tính tại doanh nghiệp</b>.
              </li>
              <li>Có yêu cầu phải tăng số vụ xử lý vi phạm trong đợt cao điểm.</li>
            </ul>
          </div>
        </div>

        <h3>Vì sao công ty vừa và nhỏ dễ "dính"</h3>
        <div className="plain">
          <span className="plabel">Hiểu nôm na</span> SME là <b>doanh nghiệp vừa và nhỏ</b> — quán
          ăn, công ty 20–200 người, chuỗi cửa hàng nhỏ — chứ không phải tập đoàn lớn. Đây chính là
          nhóm khách hàng chính của Software Radar.
        </div>
        <p className="muted">Công ty vừa và nhỏ thường có 4 điểm yếu:</p>
        <ul className="clean bad">
          <li>Không có danh sách đầy đủ máy móc và phần mềm công ty đang có.</li>
          <li>Nhân viên dùng máy cá nhân của mình hoặc tự cài phần mềm lung tung.</li>
          <li>Không có gì để chứng minh là công ty đã chủ động đi rà soát.</li>
          <li>
            Khi bị hỏi, chủ doanh nghiệp thường chỉ biết trả lời <b>"không biết"</b>.
          </li>
        </ul>
        <p className="muted" style={{ marginTop: 14 }}>
          Software Radar không thay thế luật sư hay hệ thống quản lý phần mềm cỡ tập đoàn, nhưng giúp
          công ty có bước kiểm soát đầu tiên:
        </p>
        <ul className="clean">
          <li>Biết máy nào đang chạy phần mềm thương mại hoặc phần mềm có rủi ro.</li>
          <li>Có một màn hình tổng quan để IT/admin rà soát định kỳ.</li>
          <li>Có lịch sử quan sát để chứng minh công ty không hề thờ ơ.</li>
          <li>Có cơ sở để lên kế hoạch mua bản quyền, gỡ phần mềm thừa, hoặc siết quy định nội bộ.</li>
        </ul>

        <div className="quote orange">
          <span className="qlabel">Cách nói với khách</span>
          <em>
            "Điều quan trọng không phải là phần mềm này kết luận ai vi phạm. Điều quan trọng là công
            ty bắt đầu có một quy trình để nhìn thấy rủi ro, rà soát và xử lý. Trong lúc cả Việt Nam
            và Mỹ đều đang chú ý mạnh hơn tới bản quyền, việc công ty không nhìn thấy gì mới là rủi ro
            lớn."
          </em>
        </div>

        <h3 className="alt">Cách nghĩ kiểu "thuê tư vấn để yên tâm"</h3>
        <p className="muted">
          Nhiều công ty không chỉ mua phần mềm vì tính năng. Họ mua{' '}
          <b>sự yên tâm là mình đã làm tròn trách nhiệm quản lý</b>. Một phần giá trị của các công ty
          tư vấn lớn, kiểm toán, luật sư là: khi có chuyện xảy ra, công ty chứng minh được rằng mình
          đã có cố vấn, có quy trình, có ghi chép, có hành động. Software Radar đi theo đúng logic đó
          nhưng ở quy mô công ty nhỏ:
        </p>
        <div className="plain">
          <span className="plabel">Hiểu nôm na</span> "Soi kỹ rủi ro trước khi ra quyết định" (tiếng
          chuyên môn gọi là <b>due diligence</b>) giống như <b>soi kỹ một căn nhà trước khi mua</b>:
          xem giấy tờ, kiểm tra thấm dột — để sau này không "mua hớ" và có cái mà nói lại khi bị hỏi.
        </div>
        <ul className="clean">
          <li>Không bán lời hứa "miễn trách nhiệm tuyệt đối".</li>
          <li>
            Bán khả năng chứng minh công ty <b>không thờ ơ</b> với rủi ro phần mềm.
          </li>
          <li>Bán quy trình: quan sát → rà soát → xử lý → lưu lại lịch sử.</li>
          <li>
            Khi bị thanh tra hoặc tranh chấp, công ty có thể nói:{' '}
            <b>
              "Chúng tôi có hệ thống theo dõi, có màn hình tổng quan, có lịch sử phát hiện và đã yêu
              cầu IT xử lý."
            </b>
          </li>
        </ul>

        <FlowChips />
        <p className="muted">
          Hiểu đơn giản: đây là vòng việc lặp đi lặp lại — quan sát mạng, rà soát những gì thấy được,
          xử lý phần rủi ro, rồi ghi lại lịch sử để có bằng chứng. Làm đều đặn thì công ty luôn có cái
          để trình ra khi bị hỏi.
        </p>

        <div className="quote">
          <span className="qlabel">Câu sale nên dùng</span>
          <em>
            "Cái khách mua không chỉ là một màn hình đẹp. Họ mua một lớp bằng chứng rằng công ty đã
            chủ động quản lý rủi ro phần mềm, giống như cách doanh nghiệp thuê tư vấn hay kiểm toán để
            chứng minh mình đã làm việc cẩn thận."
          </em>
        </div>

        <h3>Nguồn để sale tham khảo</h3>
        <div className="sources">
          <div className="src">
            <span className="si">USTR</span>
            <span>Báo cáo Special 301 năm 2026 (báo cáo bản quyền của cơ quan thương mại Mỹ).</span>
          </div>
          <div className="src">
            <span className="si">USTR</span>
            <span>Thông cáo công bố báo cáo Special 301 2026 về bảo hộ và thực thi bản quyền.</span>
          </div>
          <div className="src">
            <span className="si">VN GOV</span>
            <span>
              Cổng Thông tin Chính phủ, tin về tăng cường xử lý vi phạm sở hữu trí tuệ, tháng 5/2026.
            </span>
          </div>
          <div className="src">
            <span className="si">PRESS</span>
            <span>
              Vietnam News / VietnamNet, tin về chiến dịch kiểm tra bản quyền phần mềm tại doanh
              nghiệp, tháng 5/2026.
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

        <h3>Tại sao làm sản phẩm này</h3>
        <p className="muted">
          Phần lớn công ty vừa và nhỏ ở Việt Nam không có công cụ đơn giản để biết trong văn phòng
          đang chạy phần mềm gì. Các giải pháp lớn thì đòi cài phần mềm theo dõi lên từng máy — tốn
          tiền, khó làm, nhất là khi nhân viên dùng máy cá nhân. Các công cụ giám sát mạng cỡ doanh
          nghiệp thì rất mạnh nhưng quá rộng, quá đắt, và không tập trung vào đúng bài toán: nhìn ra
          phần mềm để rà soát bản quyền.
        </p>
        <p className="lead-strong">
          Software Radar được làm để lấp chỗ trống đó:{' '}
          <span style={{ color: 'var(--cobalt)' }}>
            một công cụ nhẹ, chạy ngay tại công ty khách, không cài gì lên máy nhân viên
          </span>
          , giúp công ty nhỏ nhìn thấy phần mềm đang chạy qua dấu vết trên mạng.
        </p>
        <div className="plain">
          <span className="plabel">Hiểu nôm na</span> "Không cài lên máy nhân viên" (tiếng chuyên môn
          gọi là <b>agentless</b>) giống như đặt <b>camera ở hành lang</b> để quan sát chung — không
          cần gắn thiết bị theo dõi lên người từng nhân viên. Vì vậy triển khai nhanh và nhân viên
          không thấy phiền.
        </div>

        <div className="grid2">
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--cobalt)' }}></span> Sản phẩm làm gì
            </div>
            <ul className="clean">
              <li>Nhận một bản sao dữ liệu mạng từ hộp chia mạng (switch/router) của công ty.</li>
              <li>Đọc phần tên website mà mỗi máy đang truy cập để đoán đang dùng app gì.</li>
              <li>Gắn từng dấu vết đó về đúng từng máy.</li>
              <li>So tên website với danh mục phần mềm để biết đó là app nào.</li>
              <li>Hiển thị màn hình theo thời gian thực: Máy, Sự kiện trực tiếp, Phần mềm, Độ phủ, Cài đặt.</li>
              <li>Bản Pro cho cập nhật mẫu nhận diện, dùng trợ lý AI, và gửi báo cáo hằng tuần.</li>
            </ul>
          </div>
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--green)' }}></span> Dùng được việc gì
              thực tế
            </div>
            <ul className="clean">
              <li>IT biết máy nào đang dùng phần mềm gì.</li>
              <li>Quản lý thấy phần mềm lạ, VPN, tải lậu, công cụ điều khiển từ xa chưa được duyệt.</li>
              <li>Công ty có lịch sử quan sát để rà soát quy định và bản quyền.</li>
              <li>Công ty dịch vụ IT có thể dùng làm công cụ kiểm tra nhẹ cho nhiều khách.</li>
              <li>
                Sau khi chạy thử, khách có một danh sách việc cần làm: gỡ app, mua bản quyền, cho vào
                danh sách cho phép, cập nhật quy định.
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
                <th>Có lợi gì cho khách</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row-em">
                <td>Không cài lên máy nhân viên</td>
                <td>Hợp với cả khi nhân viên dùng máy cá nhân, không phiền ai</td>
              </tr>
              <tr className="row-em">
                <td>Chạy ngay tại công ty khách</td>
                <td>Dữ liệu ở lại trong công ty, không gửi lên đám mây</td>
              </tr>
              <tr className="row-em">
                <td>Chỉ đứng nhìn</td>
                <td>Không chen vào giữa mạng, không làm gián đoạn hay chậm mạng</td>
              </tr>
              <tr className="row-em">
                <td>Triển khai nhanh</td>
                <td>Một máy chủ, một bản sao dữ liệu mạng, mở trình duyệt là dùng</td>
              </tr>
              <tr className="row-em">
                <td>Dành cho công ty nhỏ</td>
                <td>Màn hình đơn giản, không cần đội IT chuyên sâu</td>
              </tr>
              <tr className="row-em">
                <td>Nói rõ điểm mù</td>
                <td>Thẳng thắn nói chỗ không nhìn thấy: VPN, mạng di động, app cài lậu ngay trên máy</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="alt">So sánh nhanh với các giải pháp khác</h3>
        <div className="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Nhóm giải pháp</th>
                <th>Ví dụ</th>
                <th>Mạnh ở đâu</th>
                <th>Software Radar khác chỗ nào</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Quản lý bản quyền cỡ tập đoàn</b>
                </td>
                <td>Flexera, Snow, ServiceNow</td>
                <td>Quản lý bản quyền rất sâu, đối chiếu chặt chẽ</td>
                <td>Rất đắt, nặng, thường phải cài lên máy và cần đội IT mạnh</td>
              </tr>
              <tr>
                <td>
                  <b>Quản lý từng máy</b>
                </td>
                <td>Intune, ManageEngine, Jamf</td>
                <td>Quản lý máy chính xác hơn, biết app đã cài trên ổ cứng</td>
                <td>Phải cài phần mềm lên từng máy, khó khi nhân viên dùng máy cá nhân</td>
              </tr>
              <tr>
                <td>
                  <b>Giám sát mạng tổng quát</b>
                </td>
                <td>ntopng, Cisco, Darktrace</td>
                <td>Nhìn mạng rất rộng, mạnh về bảo mật</td>
                <td>Không tập trung vào bài toán rà soát phần mềm cho công ty nhỏ</td>
              </tr>
              <tr>
                <td>
                  <b>Bắt phần mềm lậu trên máy</b>
                </td>
                <td>Ping32</td>
                <td>Bắt phần mềm lậu sâu hơn nhờ cài lên máy</td>
                <td>Phải cài lên máy, thị trường hẹp, không phải kiểu chỉ quan sát mạng</td>
              </tr>
              <tr className="row-self">
                <td>
                  <b>Software Radar</b>
                </td>
                <td>Software Radar / NCR</td>
                <td>Nhìn phần mềm qua mạng cho công ty nhỏ, không cài lên máy</td>
                <td>Nhẹ, chạy tại chỗ, tập trung rà soát phần mềm và quy trình tuân thủ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="quote">
          <span className="qlabel">Câu chốt giới thiệu</span>
          <em>
            "Software Radar không cố thay các hệ thống lớn. Nó là lớp nhìn đầu tiên cho công ty nhỏ:
            triển khai nhẹ, thấy nhanh, đủ để IT và chủ doanh nghiệp bắt đầu quản lý rủi ro phần mềm
            một cách có quy trình."
          </em>
        </div>
      </section>

      {/* ============ 4. PAINS ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">04</span>
          <h2>Vấn đề khách đang gặp</h2>
        </div>
        <h3>Khó khăn chính</h3>
        <ul className="clean bad">
          <li>Chủ doanh nghiệp không biết nhân viên đang dùng phần mềm gì trong văn phòng.</li>
          <li>
            IT không có công cụ nào để nhìn nhanh: ai đang dùng Zoom, TeamViewer, AnyDesk, phần mềm
            tải lậu, VPN cá nhân, hay phần mềm thiết kế/kế toán.
          </li>
          <li>
            Công ty nhỏ không muốn cài phần mềm theo dõi lên từng máy, vì vướng máy cá nhân, quyền
            riêng tư, thiếu người IT, hoặc nhân viên phản đối.
          </li>
          <li>Các công cụ cỡ tập đoàn thì quá đắt và quá nặng cho công ty nhỏ.</li>
        </ul>
        <div className="plain">
          <span className="plabel">Hiểu nôm na</span> Công cụ điều khiển từ xa (như TeamViewer,
          AnyDesk) cho phép <b>điều khiển máy từ nơi khác</b>, giống như <b>đưa chìa khóa nhà cho
          người ở xa</b> ra vào. Tiện nhưng cũng là rủi ro, cần biết ai đang cầm chìa.
        </div>
        <div className="quote">
          <span className="qlabel">Cách nói với khách</span>
          <em>
            "Hiện giờ nếu anh/chị không cài phần mềm lên từng máy, gần như không nhìn thấy gì.
            Software Radar chọn cách nhẹ hơn: chỉ nhìn dấu vết trên mạng để vẽ ra bản đồ phần mềm đang
            chạy. Nó không đọc file, không chụp màn hình, không lấy dữ liệu cá nhân."
          </em>
        </div>
      </section>

      {/* ============ 5. ICP ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">05</span>
          <h2>Khách phù hợp</h2>
        </div>
        <div className="plain">
          <span className="plabel">Hiểu nôm na</span> "Khách phù hợp" là <b>chân dung khách hàng lý
          tưởng</b> — kiểu khách hợp nhất với sản phẩm, dễ chốt và dùng lâu. Biết rõ tiêu chí thì khỏi
          mất thời gian với khách không hợp.
        </div>
        <h3>Khách hợp nhất</h3>
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
                <td>Đủ lớn để có rủi ro, nhưng chưa đủ lớn để mua hệ thống cỡ tập đoàn</td>
              </tr>
              <tr className="row-em">
                <td>Thiết kế, xây dựng, kiến trúc, in ấn</td>
                <td>Dùng nhiều phần mềm đắt tiền như Adobe, Autodesk, Corel, phần mềm vẽ kỹ thuật</td>
              </tr>
              <tr className="row-em">
                <td>Kế toán, dịch vụ, giáo dục, đào tạo</td>
                <td>Nhiều máy văn phòng, nhân viên dùng máy cá nhân, hay điều khiển từ xa</td>
              </tr>
              <tr className="row-em">
                <td>Công ty dịch vụ IT thuê ngoài</td>
                <td>Một bên có thể triển khai cho nhiều khách công ty nhỏ cùng lúc</td>
              </tr>
              <tr className="row-em">
                <td>Công ty sắp bị kiểm tra hoặc đang muốn tự rà soát phần mềm</td>
                <td>Cần nhìn thấy thực trạng và cần bằng chứng đã có quy trình</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="alt">Chưa phù hợp ở giai đoạn này</h3>
        <ul className="clean bad">
          <li>Nhà riêng hoặc mạng không có hộp chia mạng đủ tốt để lấy bản sao dữ liệu.</li>
          <li>Khách muốn nghe kết luận pháp lý "máy này chắc chắn dùng phần mềm lậu".</li>
          <li>Khách yêu cầu gỡ app từ xa, chặn mạng, hoặc quét ổ cứng từng máy.</li>
          <li>
            Khách cỡ tập đoàn cần đăng nhập một lần, nhiều chi nhánh tách biệt, tích hợp hệ thống an
            ninh lớn ngay từ đầu.
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
              <li>Một công cụ lặng lẽ quan sát phần mềm qua mạng.</li>
              <li>Chạy ngay trong mạng của khách.</li>
              <li>Đọc phần tên website mỗi máy truy cập để đoán app.</li>
              <li>Gắn dấu vết về đúng từng máy.</li>
              <li>Hiển thị màn hình: Máy, Sự kiện trực tiếp, Phần mềm, Độ phủ, Cài đặt.</li>
              <li>Bản Pro có trợ lý AI và báo cáo hằng tuần.</li>
            </ul>
          </div>
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--red)' }}></span> Software Radar
              KHÔNG phải gì
            </div>
            <ul className="clean bad">
              <li>Không phải phần mềm cài lên từng máy.</li>
              <li>Không đọc file, không quét ổ cứng.</li>
              <li>Không phải công cụ kết luận vi phạm pháp lý.</li>
              <li>Không thay thế hoàn toàn hệ thống quản lý phần mềm cỡ tập đoàn.</li>
              <li>
                Không nhìn được dữ liệu đi qua VPN cá nhân, mạng di động 4G, hoặc app lậu chạy ngay
                trên máy.
              </li>
            </ul>
          </div>
        </div>
        <div className="plain">
          <span className="plabel">Hiểu nôm na</span> Software Radar đọc phần <b>tên trang web mà máy
          định vào</b> (ví dụ zoom.us) để đoán app, giống <b>nhìn địa chỉ ghi trên bì thư</b> để biết
          thư gửi đi đâu — chứ <b>không mở thư ra đọc</b> nội dung bên trong.
        </div>
        <div className="quote">
          <span className="qlabel">Câu bắt buộc khi nói về bản quyền</span>
          <em>
            "Software Radar báo cáo dấu vết trên mạng liên quan tới phần mềm đang chạy. Nó giúp công
            ty rà soát và chứng minh có quy trình giám sát, nhưng không tự kết luận là bản quyền hợp
            lệ hay không nếu thiếu hồ sơ mua hàng và bản quyền."
          </em>
        </div>
      </section>

      {/* ============ 7. VALUE PROP ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">07</span>
          <h2>Giá trị cốt lõi — bán cái gì</h2>
        </div>
        <div className="plain">
          <span className="plabel">Hiểu nôm na</span> "Giá trị cốt lõi" là câu trả lời cho{' '}
          <b>"mua cái này thì được lợi gì"</b> — lý do chính khiến khách móc ví, giống câu chốt "mua
          bảo hiểm này để đêm ngủ ngon".
        </div>
        <div className="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Giá trị</th>
                <th>Giải thích cho khách</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row-em">
                <td>Không cần cài lên máy</td>
                <td>Không đụng máy nhân viên, hợp cả khi dùng máy cá nhân, lắp nhanh</td>
              </tr>
              <tr className="row-em">
                <td>Dữ liệu ở lại nội bộ</td>
                <td>Chạy tại công ty khách, dữ liệu thô không gửi lên đám mây</td>
              </tr>
              <tr className="row-em">
                <td>Dễ triển khai</td>
                <td>Một máy chủ trong văn phòng, lấy một bản sao dữ liệu mạng là chạy</td>
              </tr>
              <tr className="row-em">
                <td>Thấy kết quả nhanh</td>
                <td>Sau vài phút đã bắt đầu thấy máy nào, phần mềm nào đang chạy</td>
              </tr>
              <tr className="row-em">
                <td>Chi phí vừa với công ty nhỏ</td>
                <td>Nhẹ hơn nhiều so với hệ thống cỡ tập đoàn</td>
              </tr>
              <tr className="row-em">
                <td>Có quy trình rà soát</td>
                <td>Người phụ trách thấy dấu hiệu, xem lại, gắn nhãn máy, xử lý theo quy định</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============ 8. DEMO SCRIPT ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">08</span>
          <h2>Kịch bản demo 10 phút</h2>
        </div>
        <div className="quote">
          <span className="qlabel">0–1 phút: mở vấn đề</span>
          <em>
            "Em demo theo góc nhìn người quản lý IT: sáng mở màn hình lên xem hôm qua / hôm nay mạng
            công ty có phần mềm gì mới, máy nào phát sinh rủi ro, và hệ thống có đang quan sát đầy đủ
            không."
          </em>
        </div>
        <Timeline />
        <p className="muted">
          Hiểu đơn giản: đây là trình tự 10 phút demo — mở màn hình tổng quan, chỉ cho khách thấy
          từng máy và phần mềm đang chạy, rồi điểm qua các rủi ro cần chú ý. Bám theo các mốc thời
          gian này là buổi demo gọn và đủ ý.
        </p>
      </section>

      {/* ============ 9. DISCOVERY ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">09</span>
          <h2>Câu hỏi để hiểu khách</h2>
        </div>
        <div className="plain">
          <span className="plabel">Hiểu nôm na</span> Mục đích là hỏi vài câu để{' '}
          <b>biết khách có hợp và đáng theo đuổi không</b> (tiếng chuyên môn gọi là sàng lọc khách),
          giống hỏi vài câu trước khi mai mối — hợp gu mới giới thiệu, đỡ mất thời gian đôi bên.
        </div>
        <div className="grid2">
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--cobalt)' }}></span> Câu hỏi để sàng
              lọc nhanh
            </div>
            <ul className="clean">
              <li>Công ty hiện có khoảng bao nhiêu máy tính / laptop trong văn phòng?</li>
              <li>Nhân viên có dùng máy cá nhân để làm việc không?</li>
              <li>Công ty có hộp chia mạng đủ tốt để lấy được một bản sao dữ liệu mạng không?</li>
              <li>
                Hiện anh/chị có cách nào biết nhân viên đang dùng TeamViewer, VPN, phần mềm tải lậu,
                hay phần mềm thiết kế / kế toán không?
              </li>
              <li>Công ty từng bị kiểm tra bản quyền chưa, hoặc có kế hoạch tự rà soát không?</li>
              <li>Ai sẽ là người xem màn hình hằng ngày: IT, admin, chủ doanh nghiệp, hay đối tác dịch vụ?</li>
              <li>Dữ liệu có được phép gửi lên đám mây không, hay bắt buộc phải giữ trong công ty?</li>
            </ul>
          </div>
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--green)' }}></span> Dấu hiệu khách có
              nhu cầu mạnh
            </div>
            <ul className="clean">
              <li>"Không muốn cài gì lên máy nhân viên."</li>
              <li>"Không biết nhân viên dùng app gì."</li>
              <li>"Nhân viên hay dùng máy cá nhân."</li>
              <li>"Sợ bị kiểm tra bản quyền phần mềm."</li>
              <li>"Đang dùng TeamViewer / AnyDesk lung tung."</li>
              <li>"Muốn có báo cáo định kỳ để trình sếp."</li>
              <li>"Có nhiều chi nhánh hoặc nhiều khách (nếu là công ty dịch vụ IT)."</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ 10. OBJECTIONS ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">10</span>
          <h2>Xử lý khi khách phản đối</h2>
        </div>
        <div className="obj">
          <div className="q">
            <span className="mark">“</span>Không cài lên máy thì có chính xác không?
          </div>
          <div className="a">
            "Không chính xác bằng cách cài lên máy để biết app nào đã có trên ổ cứng. Nhưng Software
            Radar không cố thay cách đó. Nó cho cái nhìn nhanh về phần mềm đang chạy qua mạng, lắp đặt
            nhẹ hơn rất nhiều. Với công ty nhỏ, đây thường là bước đầu đủ giá trị trước khi đầu tư hệ
            thống lớn."
          </div>
        </div>
        <div className="obj">
          <div className="q">
            <span className="mark">“</span>Có phát hiện được phần mềm lậu không?
          </div>
          <div className="a">
            "Sản phẩm phát hiện dấu hiệu rủi ro qua mạng, ví dụ trang web của phần mềm thương mại,
            công cụ điều khiển từ xa, phần mềm tải lậu, VPN, một số dấu hiệu liên quan đến kích hoạt /
            cập nhật bản quyền. Nó không kết luận pháp lý là phần mềm lậu. Kết quả dùng để IT đối
            chiếu với hồ sơ bản quyền và quy định nội bộ."
          </div>
        </div>
        <div className="obj">
          <div className="q">
            <span className="mark">“</span>Nếu nhân viên dùng VPN thì sao?
          </div>
          <div className="a">
            "Khi dùng VPN, dữ liệu thật chạy trong một đường ống bịt kín nên hệ thống không đọc được
            tên website bên trong. Software Radar vẫn ghi nhận là có VPN và đưa vào danh sách điểm mù
            / rủi ro. Đây là giới hạn cố hữu của cách không cài lên máy."
          </div>
        </div>
        <div className="plain">
          <span className="plabel">Hiểu nôm na</span> VPN tạo một <b>đường hầm riêng bịt kín</b> giấu
          dữ liệu đi, giống đi <b>cửa sau bí mật</b> thay vì cửa chính có camera. Vì vậy đó là một
          điểm mù — chỗ camera không quay tới — và mình nên nói thật để khách biết.
        </div>
        <div className="obj">
          <div className="q">
            <span className="mark">“</span>Có làm chậm mạng không?
          </div>
          <div className="a">
            "Không. Hệ thống không nằm chen giữa mạng, không chặn dữ liệu. Nó chỉ nhận một bản sao của
            dữ liệu mạng, nên kể cả khi tắt hệ thống thì mạng vẫn chạy bình thường."
          </div>
        </div>
        <div className="obj">
          <div className="q">
            <span className="mark">“</span>Có xâm phạm quyền riêng tư của nhân viên không?
          </div>
          <div className="a">
            "Hệ thống không đọc nội dung bên trong, không chụp màn hình, không quét file. Nó chỉ lưu
            thông tin bên ngoài như tên website, phần mềm khớp được, máy nào, lúc nào. Dù vậy công ty
            vẫn nên thông báo trước cho nhân viên rằng mạng nội bộ được giám sát."
          </div>
        </div>
        <div className="obj">
          <div className="q">
            <span className="mark">“</span>Tại sao không dùng ntopng (công cụ miễn phí)?
          </div>
          <div className="a">
            "ntopng là công cụ giám sát mạng tổng quát. Software Radar tập trung vào đúng việc nhìn ra
            phần mềm và rà soát bản quyền cho công ty nhỏ: có sẵn danh mục phần mềm, chấm rủi ro theo
            quy định, màn hình đơn giản, hướng dẫn triển khai, và sau này có báo cáo cho quản lý."
          </div>
        </div>
      </section>

      {/* ============ 11. USER GUIDE ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">11</span>
          <h2>User guide cho khách</h2>
        </div>
        <p className="muted">Phần này dùng khi khách hỏi: "Cài xong rồi thì dùng thế nào?"</p>
        <h3>Đăng nhập</h3>
        <div className="login-box">
          <span className="lt">Mở trình duyệt và vào địa chỉ:</span>
          <code>{'http://<server-ip>:8080'}</code>
        </div>
        <p className="muted">
          (Trong đó <code>{'<server-ip>'}</code> là địa chỉ của máy chủ chạy Software Radar trong
          công ty.) Lần đầu hệ thống yêu cầu tạo mật khẩu quản trị. Sau đó dùng mật khẩu này để vào
          màn hình.
        </p>

        <div className="guide">
          <div className="gcard">
            <div className="gt">
              <span className="pin">THẺ</span> Máy (Hosts)
            </div>
            <div className="gd">Xem danh sách các máy đã phát hiện trong mạng.</div>
            <ul className="clean">
              <li>
                <code>Số định danh máy</code> — số cố định gắn liền với mỗi máy, như số khung của xe.
              </li>
              <li>
                <code>Địa chỉ hiện tại</code> — địa chỉ máy gần nhất, có thể đổi theo ngày như biển
                số xe.
              </li>
              <li>
                <code>Tên / nhãn</code> — tên máy hoặc nhãn do người quản trị tự đặt.
              </li>
              <li>
                <code>Số phần mềm</code> — máy đó đang khớp với bao nhiêu phần mềm.
              </li>
              <li>
                <code>Lần cuối thấy</code> — lần gần nhất máy có hoạt động trên mạng.
              </li>
            </ul>
            <p className="muted" style={{ fontSize: 13, margin: '8px 0 0' }}>
              <b>Cách làm:</b> vào thẻ Máy → tìm máy có nhiều phần mềm hoặc hoạt động lạ → đặt nhãn →
              mở chi tiết xem phần mềm và trang web liên quan.
            </p>
          </div>
          <div className="gcard">
            <div className="gt">
              <span className="pin">THẺ</span> Sự kiện trực tiếp (Live Feed)
            </div>
            <div className="gd">Xem những gì vừa xảy ra theo thời gian thực.</div>
            <ul className="clean">
              <li>
                <span className="badge b-green">Xanh</span> phần mềm / rủi ro thấp.
              </li>
              <li>
                <span className="badge b-yellow">Vàng</span> cần chú ý.
              </li>
              <li>
                <span className="badge b-red">Đỏ</span> rủi ro cao theo quy định nội bộ.
              </li>
            </ul>
            <p className="muted" style={{ fontSize: 13, margin: '8px 0 0' }}>
              <b>Cách làm:</b> mỗi sáng mở thẻ này → ưu tiên xem việc đỏ / vàng → xem là máy nào, phần
              mềm gì → sang thẻ Máy để đặt nhãn hoặc xử lý.
            </p>
          </div>
          <div className="gcard">
            <div className="gt">
              <span className="pin">THẺ</span> Phần mềm (Software)
            </div>
            <div className="gd">Xem toàn mạng đang chạy những phần mềm nào.</div>
            <ul className="clean">
              <li>Tên phần mềm · Hãng · Loại.</li>
              <li>Mức rủi ro.</li>
              <li>Bao nhiêu máy đang dùng.</li>
            </ul>
            <p className="muted" style={{ fontSize: 13, margin: '8px 0 0' }}>
              <b>Cách làm:</b> vào thẻ Phần mềm → sắp xếp theo số máy hoặc mức rủi ro → chọn phần mềm
              cần rà soát → đối chiếu với quy định và hồ sơ bản quyền của công ty.
            </p>
          </div>
          <div className="gcard">
            <div className="gt">
              <span className="pin">THẺ</span> Độ phủ (Coverage)
            </div>
            <div className="gd">Kiểm tra hệ thống có đang nhìn mạng đầy đủ như mong đợi không.</div>
            <ul className="clean">
              <li>Số lượng dữ liệu thu được · Tỉ lệ bị sót.</li>
              <li>Đang quan sát ở cổng mạng nào.</li>
              <li>Điểm mù: VPN, kỹ thuật che tên web, mạng di động, dữ liệu chỉ chạy trong máy.</li>
            </ul>
            <p className="muted" style={{ fontSize: 13, margin: '8px 0 0' }}>
              <b>Cách làm:</b> sau khi lắp đặt, kiểm tra thẻ này trước → nếu không thấy máy / sự kiện
              thì kiểm tra lại bản sao dữ liệu mạng → nếu tỉ lệ sót cao thì đổi máy chủ hoặc giảm bớt
              nguồn dữ liệu.
            </p>
          </div>
        </div>
        <div className="gcard" style={{ marginTop: 14 }}>
          <div className="gt">
            <span className="pin">THẺ</span> Cài đặt (Settings)
          </div>
          <div className="gd">Bật các tính năng nâng cao.</div>
          <ul className="clean">
            <li>
              <b>Tài khoản AI riêng:</b> khách tự dùng tài khoản AI của mình (OpenAI / Anthropic /
              Gemini), như quán cho mang rượu của mình vào.
            </li>
            <li>
              <b>Cập nhật mẫu nhận diện:</b> kiểm tra bản cập nhật, xem khác gì, rồi duyệt.
            </li>
            <li>
              <b>Trợ lý AI:</b> đề xuất thêm mẫu nhận diện phần mềm mới.
            </li>
            <li>
              <b>Báo cáo hằng tuần:</b> tự động tạo bản tóm tắt mỗi tuần bằng AI.
            </li>
          </ul>
        </div>
      </section>

      {/* ============ 12. PILOT ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">12</span>
          <h2>Đề xuất chạy thử</h2>
        </div>
        <div className="plain">
          <span className="plabel">Hiểu nôm na</span> Chạy thử (tiếng chuyên môn gọi là{' '}
          <b>pilot</b>) là cho khách <b>dùng thử có giới hạn</b> trong 7–14 ngày để thấy hiệu quả
          trước khi mua hẳn, giống lái thử xe vài ngày trước khi xuống tiền.
        </div>
        <div className="grid2">
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--cobalt)' }}></span> Mục tiêu chạy
              thử (7–14 ngày)
            </div>
            <ul className="clean">
              <li>Hệ thống nhận được dữ liệu mạng ổn định.</li>
              <li>Màn hình phát hiện được máy và phần mềm thực tế.</li>
              <li>IT / admin hiểu và dùng được quy trình hằng ngày.</li>
              <li>Ghi nhận danh sách phần mềm cần bổ sung cho đúng ngành của khách.</li>
            </ul>
          </div>
          <div className="ctx">
            <div className="flag">
              <span className="fdot" style={{ background: 'var(--orange)' }}></span> Khách cần chuẩn
              bị gì
            </div>
            <ul className="clean warn">
              <li>1 máy chủ (máy tính / máy ảo / mini PC) đặt trong văn phòng.</li>
              <li>Phần mềm đóng gói sẵn để chạy (Docker), giống mì ăn liền — mở ra là chạy.</li>
              <li>1 bản sao dữ liệu mạng lấy từ hộp chia mạng.</li>
              <li>1 người IT / admin phụ trách.</li>
              <li>Cho phép vào màn hình quản trị nội bộ qua trình duyệt.</li>
            </ul>
          </div>
        </div>
        <h3>Coi là thành công khi nào</h3>
        <div className="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Tiêu chí</th>
                <th>Cách kiểm tra</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row-em">
                <td>Thấy được máy trong mạng</td>
                <td>Thẻ Máy có thiết bị sau 1–2 giờ</td>
              </tr>
              <tr className="row-em">
                <td>Thấy phần mềm phổ biến</td>
                <td>
                  Thẻ Phần mềm có các app như Zoom, Teams, Google, Microsoft, công cụ điều khiển từ xa
                </td>
              </tr>
              <tr className="row-em">
                <td>IT hiểu rủi ro và điểm mù</td>
                <td>Thẻ Độ phủ được đọc và xác nhận</td>
              </tr>
              <tr className="row-em">
                <td>Có việc cần làm rõ ràng</td>
                <td>Ít nhất 3 máy / phần mềm được rà soát hoặc gắn nhãn</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="quote">
          <span className="qlabel">Câu chốt sau khi chạy thử</span>
          <em>
            "Sau 7 ngày, nếu màn hình giúp anh/chị nhìn được phần mềm, công cụ điều khiển từ xa, VPN,
            phần mềm tải lậu trong mạng mà trước đây không thấy, mình có thể chuyển sang gói theo dõi
            định kỳ không?"
          </em>
        </div>
      </section>

      {/* ============ 13. PRICING ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">13</span>
          <h2>Cách nói về giá</h2>
        </div>
        <p className="muted">Khi chưa công bố giá chính thức thì nói theo hướng chạy thử:</p>
        <div className="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Gói</th>
                <th>Dành cho ai</th>
                <th>Có gì</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Miễn phí / Cộng đồng</b>
                </td>
                <td>Nhóm nhỏ, tự cài tự dùng</td>
                <td>Màn hình cơ bản, danh mục phần mềm có sẵn</td>
              </tr>
              <tr>
                <td>
                  <b>Chạy thử</b>
                </td>
                <td>Công ty nhỏ muốn thử nghiêm túc</td>
                <td>Hỗ trợ lắp đặt, cùng xem kết quả 7–14 ngày, bổ sung phần mềm theo ngành</td>
              </tr>
              <tr className="row-self">
                <td>
                  <b>Pro / NCR</b>
                </td>
                <td>Khách cần quy trình tuân thủ bản quyền</td>
                <td>Báo cáo bằng AI, trợ lý AI, cập nhật có xác thực, báo cáo định kỳ, hỗ trợ ưu tiên</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="quote">
          <span className="qlabel">Câu nói an toàn</span>
          <em>
            "Giai đoạn đầu mình ưu tiên cho chạy thử để chứng minh hiệu quả trước. Sau khi chạy thử
            mới chốt gói theo số máy / số chi nhánh và mức hỗ trợ."
          </em>
        </div>
      </section>

      {/* ============ 14. LEAVE-BEHIND ============ */}
      <section className="block reveal">
        <div className="sec-head">
          <span className="sec-num">14</span>
          <h2>Tài liệu để lại cho khách</h2>
        </div>
        <p className="muted">Gửi cho khách sau buổi gặp:</p>
        <div className="quote">
          <em>
            Software Radar là công cụ giám sát phần mềm qua mạng cho công ty vừa và nhỏ. Hệ thống chạy
            ngay trong văn phòng khách, nhận một bản sao dữ liệu mạng từ hộp chia mạng, đọc phần tên
            website mỗi máy truy cập để nhận ra phần mềm đang chạy trên từng máy. Sản phẩm không cần
            cài lên máy nhân viên, không đọc file cá nhân, không gửi dữ liệu thô lên đám mây. Kết quả
            dùng để IT / admin rà soát quy định, công cụ điều khiển từ xa, VPN, phần mềm tải lậu, và
            các phần mềm thương mại cần kiểm tra bản quyền.
          </em>
        </div>
        <h3>Tài liệu nội bộ kèm theo</h3>
        <ul className="clean">
          <li>
            Hướng dẫn cài đặt: <code>DEPLOYMENT.md</code>
          </li>
          <li>
            Hướng dẫn sử dụng: <code>USER_GUIDE.md</code>
          </li>
          <li>
            Trang tài liệu giới thiệu: <code>landing/docs.html</code>
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
          Các hình dưới đây là minh hoạ để đưa vào bộ slide bán hàng, đề xuất hoặc email gửi sau buổi
          gặp. Khi có ảnh chụp thật từ lúc chạy thử, nên thay hình màn hình mẫu bằng ảnh chụp sản phẩm
          đang chạy thật.
        </p>

        <PipelineDiagram />
        <p className="muted">
          Hiểu đơn giản: dữ liệu chạy trong công ty được sao một bản cho Software Radar xem để biết
          máy nào đang dùng app gì — hệ thống không đụng vào máy nhân viên, không đọc nội dung.
        </p>

        <h3 className="alt">Giao diện màn hình minh hoạ</h3>
        <DashboardMock />
        <p className="muted">
          Hiểu đơn giản: đây là màn hình tổng quan, liếc một cái là thấy bao nhiêu máy, phần mềm gì,
          rủi ro nào — giống bảng đồng hồ trên xe cho biết xăng, tốc độ, có đèn báo lỗi không.
        </p>

        <h3>Vòng lặp "rà soát để yên tâm"</h3>
        <LoopDiagram />
        <p className="muted">
          Hiểu đơn giản: làm đi làm lại theo vòng — quan sát, rà soát, xử lý, ghi lại lịch sử. Lặp đều
          thì công ty luôn có bằng chứng đã chủ động lo bản quyền phần mềm.
        </p>
      </section>

      {/* footer */}
      <footer className="foot">
        <div className="fbrand">Software Radar — Sales Kit (bản dễ đọc)</div>
        <div>Nhìn phần mềm qua mạng cho công ty nhỏ · không cài lên máy · chạy tại chỗ · 2026</div>
      </footer>

      <DownloadPdfButton filename="Software-Radar-Ban-de-doc" />
    </div>
  );
}
