export type CatKey = 'net' | 'biz' | 'sec' | 'prod' | 'abbr';

export interface Term {
  cat: CatKey;
  name: string;
  full?: string;
  /** Nghĩa dễ hiểu — có thể chứa <b> để in đậm. */
  mean: string;
  /** Ví dụ so sánh đời thường — có thể chứa <b>. */
  ex: string;
}

export interface Category {
  key: CatKey;
  label: string;
  short: string;
  /** Tailwind classes cho badge (text + bg). */
  badge: string;
}

export const CATEGORIES: Category[] = [
  { key: 'net', label: 'Mạng & Kỹ thuật', short: 'Mạng', badge: 'text-cobalt bg-cobalt-wash' },
  { key: 'biz', label: 'Bán hàng & Business', short: 'Business', badge: 'text-orange bg-orange-wash' },
  { key: 'sec', label: 'Bảo mật', short: 'Bảo mật', badge: 'text-green bg-green-wash' },
  { key: 'prod', label: 'Tính năng sản phẩm', short: 'Tính năng', badge: 'text-purple bg-purple-wash' },
  { key: 'abbr', label: 'Viết tắt', short: 'Viết tắt', badge: 'text-[#9A7B12] bg-yellow-wash' },
];

export const TERMS: Term[] = [
  /* ---------- MẠNG & KỸ THUẬT ---------- */
  { cat: 'net', name: 'port mirror', full: 'còn gọi: SPAN', mean: 'Là cách bảo thiết bị mạng (switch) <b>sao chép lại</b> dữ liệu đang chạy trong công ty rồi gửi một bản cho Software Radar xem, mà không làm gián đoạn gì.', ex: 'Như bưu điện <b>photo lại bì thư</b> đi qua để thống kê — chỉ nhìn bên ngoài để đếm, không bóc đọc nội dung.' },
  { cat: 'net', name: 'LAN', full: 'Local Area Network', mean: 'Mạng nội bộ trong một văn phòng/công ty — tất cả máy trong cùng toà nhà nối với nhau.', ex: 'Như <b>hệ thống điện thoại nội bộ</b> của một khách sạn: gọi nhau trong nhà thì miễn phí và không ra ngoài.' },
  { cat: 'net', name: 'traffic', full: 'lưu lượng mạng', mean: 'Toàn bộ dữ liệu đang chạy qua lại trên mạng — ai mở web gì, app nào gửi gì ra Internet.', ex: 'Như <b>dòng xe cộ</b> chạy trên đường: Software Radar đứng bên lề đếm xe, không chặn đường.' },
  { cat: 'net', name: 'sensor', full: 'bộ cảm biến', mean: 'Phần mềm của Software Radar đặt trong mạng để <b>quan sát</b> traffic và nhận ra đang có phần mềm gì chạy.', ex: 'Như <b>camera quan sát</b> đặt ở sảnh: chỉ nhìn và ghi nhận, không sờ vào ai.' },
  { cat: 'net', name: 'switch / router', full: 'thiết bị chia mạng', mean: 'Cái <b>hộp chia mạng</b> mọi máy cắm vào. Lấy bản sao traffic ngay từ đây nên gắn 1 chỗ là thấy cả công ty.', ex: 'Như đặt camera ngay <b>cửa ra vào duy nhất</b> của toà nhà — ai đi qua cũng thấy.' },
  { cat: 'net', name: 'MAC address', full: 'địa chỉ MAC', mean: '<b>Số định danh cứng</b> gắn liền với mỗi thiết bị (laptop, điện thoại). Mỗi máy một số riêng, không trùng.', ex: 'Như <b>số khung số máy</b> của xe — đổi biển số (IP) được, nhưng số khung thì cố định để nhận ra đúng chiếc xe đó.' },
  { cat: 'net', name: 'IP / IP address', full: 'địa chỉ IP', mean: '<b>Địa chỉ</b> tạm của một máy trên mạng để gửi/nhận dữ liệu. Có thể đổi theo thời gian.', ex: 'Như <b>biển số xe</b>: dùng để nhận diện trên đường, nhưng có thể được cấp lại số khác.' },
  { cat: 'net', name: 'DHCP', full: 'cơ chế tự cấp IP', mean: 'Hệ thống tự động <b>phát địa chỉ IP</b> cho máy mỗi khi vào mạng — nên IP một máy có thể đổi qua các ngày.', ex: 'Như quầy <b>phát số thứ tự</b> ở ngân hàng: hôm nay bạn số 12, mai vào lại có thể là số 47.' },
  { cat: 'net', name: 'DNS / TLS SNI', full: 'tên miền khi truy cập web', mean: 'Khi máy mở một website, nó để lộ <b>tên trang định vào</b> (vd: zoom.us). Software Radar đọc phần tên này để đoán đang dùng app gì — <b>không</b> đọc nội dung.', ex: 'Như nhìn <b>địa chỉ ghi trên bì thư</b> để biết thư gửi tới đâu, nhưng không mở thư ra đọc.' },
  { cat: 'net', name: 'payload', full: 'nội dung dữ liệu', mean: 'Phần <b>ruột</b> bên trong gói tin — nội dung thật sự (tin nhắn, file). Software Radar <b>không đọc</b> phần này để bảo vệ riêng tư.', ex: 'Là <b>lá thư bên trong</b> phong bì. Ta chỉ nhìn ngoài bì, không bóc ruột thư.' },
  { cat: 'net', name: 'packet drop', full: 'tỉ lệ mất gói', mean: 'Tỉ lệ dữ liệu bị <b>rớt/bỏ sót</b> khi quan sát. Số càng thấp (vd 0.1%) nghĩa là hệ thống nhìn càng đầy đủ.', ex: 'Như <b>nhân viên đếm xe</b> lỡ tay sót vài chiếc — sót càng ít thì thống kê càng chính xác.' },
  { cat: 'net', name: 'nDPI', full: 'thư viện nhận diện ứng dụng', mean: 'Bộ <b>“từ điển nhận dạng”</b> giúp Software Radar nhìn traffic và đoán ra đó là Zoom, TeamViewer hay BitTorrent…', ex: 'Như người <b>sành nhạc</b> nghe vài giây là biết bài gì, ban nào — dù chưa thấy mặt ca sĩ.' },
  { cat: 'net', name: 'Docker', full: 'đóng gói phần mềm', mean: 'Cách <b>đóng gói sẵn</b> phần mềm vào một “hộp” chạy được ngay trên máy chủ, không phải cài lằng nhằng.', ex: 'Như <b>mì ăn liền</b>: mở hộp, đổ nước sôi là xong — không cần đi chợ nấu từng nguyên liệu.' },
  { cat: 'net', name: 'interface', full: 'cổng mạng đang quan sát', mean: 'Cái <b>“cửa”</b> trên máy chủ mà Software Radar đang lắng nghe traffic.', ex: 'Như chọn <b>kênh TV</b> nào để xem — chọn đúng cổng thì mới thấy đúng luồng dữ liệu.' },
  { cat: 'net', name: 'tunnel', full: 'đường hầm dữ liệu', mean: 'Một <b>“đường ống bịt kín”</b> mà dữ liệu chui qua — bên ngoài không nhìn vào trong được. VPN tạo ra tunnel.', ex: 'Như xe chạy trong <b>đường hầm</b>: đứng ngoài chỉ biết có xe vào, không thấy bên trong chở gì.' },
  { cat: 'net', name: 'on-premise / self-hosted', full: 'đặt tại chỗ', mean: 'Phần mềm chạy <b>ngay trên máy chủ của khách</b>, dữ liệu ở lại trong công ty — không gửi lên đám mây nhà cung cấp.', ex: 'Như <b>nấu ăn tại nhà</b> thay vì đặt ngoài: nguyên liệu (dữ liệu) không rời khỏi bếp của bạn.' },

  /* ---------- BẢO MẬT ---------- */
  { cat: 'sec', name: 'agentless', full: 'không cần cài agent', mean: '<b>Không phải cài phần mềm</b> lên từng máy nhân viên. Chỉ quan sát qua mạng nên triển khai nhanh, nhân viên không thấy phiền.', ex: 'Như <b>camera ở hành lang</b> quan sát chung — không cần gắn thiết bị theo dõi vào người từng nhân viên.' },
  { cat: 'sec', name: 'agent', full: 'phần mềm cài trên máy', mean: 'Một phần mềm nhỏ phải <b>cài vào từng máy</b> để theo dõi. Software Radar cố tình <b>không</b> dùng cách này.', ex: 'Như phải <b>dán chip định vị</b> lên mỗi nhân viên — phiền và dễ bị phản đối. Software Radar tránh điều đó.' },
  { cat: 'sec', name: 'BYOD', full: 'Bring Your Own Device', mean: 'Nhân viên <b>dùng máy của chính mình</b> (laptop, điện thoại cá nhân) để làm việc, thay vì máy công ty cấp.', ex: 'Như nhân viên <b>tự mang dao, thớt của nhà</b> vào bếp nhà hàng — tiện cho họ, nhưng công ty khó kiểm soát hơn.' },
  { cat: 'sec', name: 'passive', full: 'giám sát thụ động', mean: 'Chỉ <b>đứng nhìn và ghi nhận</b>, không can thiệp, không chặn, không làm chậm mạng.', ex: 'Như <b>bảo vệ đứng quan sát</b> trong cửa hàng: thấy hết nhưng không níu kéo hay kiểm tra túi khách.' },
  { cat: 'sec', name: 'blindspot', full: 'điểm mù', mean: 'Những chỗ Software Radar <b>không nhìn thấy được</b> — vd khi nhân viên dùng VPN, 4G điện thoại, hoặc mạng riêng.', ex: 'Như <b>góc khuất camera</b> không quay tới: cần nói thật với khách để họ biết giới hạn.' },
  { cat: 'sec', name: 'VPN', full: 'Virtual Private Network', mean: 'Công cụ tạo <b>“đường hầm riêng”</b> giấu traffic đi. Nhân viên dùng VPN thì Software Radar không nhìn được họ làm gì.', ex: 'Như đi <b>cửa sau bí mật</b> thay vì cửa chính có camera — nên đó là điểm mù.' },
  { cat: 'sec', name: 'DoH / ECH', full: 'DNS over HTTPS / Encrypted ClientHello', mean: 'Các kỹ thuật <b>che giấu tên website</b> khi truy cập, khiến hệ thống khó đoán app đang dùng. Là điểm mù kỹ thuật.', ex: 'Như <b>dán băng keo che địa chỉ</b> trên bì thư — biết có thư đi nhưng không biết gửi đâu.' },
  { cat: 'sec', name: 'P2P', full: 'Peer-to-Peer', mean: 'Kiểu chia sẻ dữ liệu <b>máy-nối-máy trực tiếp</b>, hay dùng để tải lậu (BitTorrent). Software Radar nhận ra loại traffic này.', ex: 'Như mọi người <b>chuyền tay nhau đĩa phim</b> thay vì mua ở cửa hàng — khó kiểm soát, dễ vi phạm bản quyền.' },
  { cat: 'sec', name: 'remote access tool', full: 'công cụ điều khiển từ xa', mean: 'Phần mềm cho phép <b>điều khiển máy từ xa</b> (TeamViewer, AnyDesk). Tiện nhưng cũng là rủi ro bảo mật cần theo dõi.', ex: 'Như <b>đưa chìa khoá nhà cho người ở xa</b> vào ra điều khiển — cần biết ai đang cầm chìa.' },
  { cat: 'sec', name: 'piracy / pirated', full: 'phần mềm lậu', mean: 'Dùng phần mềm <b>không có bản quyền</b> (crack, lậu). Đây chính là rủi ro pháp lý mà Software Radar giúp phát hiện.', ex: 'Như xài <b>hàng nhái không hoá đơn</b> — rẻ trước mắt nhưng bị kiểm tra thì phạt nặng.' },
  { cat: 'sec', name: 'risk level', full: 'mức độ rủi ro', mean: 'Cách Software Radar <b>chấm điểm nguy hiểm</b> của một phần mềm/hành vi: thấp (xanh), cần chú ý (vàng), cao (đỏ).', ex: 'Như <b>đèn giao thông</b>: xanh đi thoải mái, vàng cẩn thận, đỏ phải xử lý ngay.' },

  /* ---------- BÁN HÀNG & BUSINESS ---------- */
  { cat: 'biz', name: 'SME', full: 'Small & Medium Enterprise', mean: '<b>Doanh nghiệp vừa và nhỏ</b> — không phải tập đoàn lớn. Đây là nhóm khách hàng chính của Software Radar.', ex: 'Như <b>quán ăn, công ty 20–200 người</b>, cửa hàng chuỗi nhỏ — chứ không phải Vingroup hay ngân hàng lớn.' },
  { cat: 'biz', name: 'service provider', full: 'nhà cung cấp dịch vụ', mean: 'Công ty <b>làm dịch vụ IT thuê</b> cho doanh nghiệp khác. Họ có thể là đối tác bán lại / triển khai Software Radar.', ex: 'Như <b>công ty vệ sinh thuê ngoài</b>: nhiều toà nhà thuê họ lo. Họ chăm IT cho nhiều công ty cùng lúc.' },
  { cat: 'biz', name: 'MSP', full: 'Managed Service Provider', mean: 'Một dạng service provider <b>quản lý IT trọn gói</b> cho khách theo tháng. Đối tác lý tưởng để bán kèm Software Radar.', ex: 'Như <b>dịch vụ quản gia</b> lo trọn việc nhà cho nhiều gia đình — họ thêm Software Radar vào gói dịch vụ của mình.' },
  { cat: 'biz', name: 'ICP', full: 'Ideal Customer Profile', mean: '<b>Chân dung khách hàng lý tưởng</b> — kiểu khách hợp nhất với sản phẩm, dễ chốt và dùng lâu.', ex: 'Như <b>“gu người yêu lý tưởng”</b>: biết rõ tiêu chí thì khỏi mất thời gian với người không hợp.' },
  { cat: 'biz', name: 'value proposition', full: 'giá trị cốt lõi', mean: 'Câu trả lời cho <b>“mua cái này thì được lợi gì”</b> — lý do chính khiến khách móc ví.', ex: 'Như <b>câu chốt của một món hàng</b>: “mua bảo hiểm này để đêm ngủ ngon, không lo cháy nhà”.' },
  { cat: 'biz', name: 'due diligence', full: 'thẩm định kỹ lưỡng', mean: 'Việc <b>soi kỹ mọi rủi ro</b> trước khi ra quyết định lớn (đầu tư, mua bán, sáp nhập công ty).', ex: 'Như <b>soi kỹ căn nhà</b> trước khi mua: kiểm tra giấy tờ, thấm dột, hàng xóm — để không “mua hớ”.' },
  { cat: 'biz', name: 'compliance', full: 'tuân thủ', mean: 'Làm <b>đúng luật và quy định</b> — ở đây là dùng phần mềm có bản quyền để khỏi bị phạt khi kiểm tra.', ex: 'Như <b>đóng thuế, đăng ký kinh doanh đầy đủ</b>: làm đúng để không lo bị “sờ gáy”.' },
  { cat: 'biz', name: 'remediation / remediate', full: 'khắc phục', mean: 'Bước <b>xử lý sau khi phát hiện vấn đề</b>: gỡ phần mềm lậu, mua bản quyền, hoặc cho vào danh sách cho phép.', ex: 'Như <b>sửa lỗi sau khi đi khám</b>: bác sĩ chỉ ra bệnh (phát hiện) rồi mình uống thuốc, đổi thói quen (khắc phục).' },
  { cat: 'biz', name: 'whitelist', full: 'danh sách cho phép', mean: 'Danh sách phần mềm được <b>duyệt là OK</b>, không cần cảnh báo nữa. Ngược với danh sách cấm.', ex: 'Như <b>danh sách khách quen được vào thẳng</b> không cần kiểm tra ở cổng.' },
  { cat: 'biz', name: 'audit / license review', full: 'kiểm tra bản quyền', mean: 'Đợt <b>thanh/kiểm tra</b> xem công ty có dùng phần mềm lậu không. Bị audit mà sai là phạt rất nặng.', ex: 'Như <b>quản lý thị trường kiểm tra cửa hàng</b>: có hoá đơn đầy đủ thì yên tâm, không thì bị phạt.' },
  { cat: 'biz', name: 'pilot', full: 'chạy thử', mean: 'Giai đoạn <b>dùng thử có giới hạn</b> (vd 7–14 ngày) để khách thấy hiệu quả trước khi mua hẳn.', ex: 'Như <b>lái thử xe</b> vài ngày trước khi quyết định xuống tiền.' },
  { cat: 'biz', name: 'qualify', full: 'sàng lọc khách', mean: 'Hỏi vài câu để <b>xác định khách có hợp và đáng theo đuổi</b> không, khỏi tốn công với khách không tiềm năng.', ex: 'Như <b>hỏi vài câu trước khi mai mối</b>: hợp gu mới giới thiệu, đỡ mất thời gian đôi bên.' },
  { cat: 'biz', name: 'reputational risk', full: 'rủi ro danh tiếng', mean: 'Nguy cơ công ty bị <b>mất uy tín, mang tiếng xấu</b> — vd bị bêu tên vì dùng phần mềm lậu.', ex: 'Như <b>quán ăn bị phốt mất vệ sinh</b>: mất khách không phải vì tiền phạt mà vì mất hình ảnh.' },
  { cat: 'biz', name: 'asset inventory', full: 'kiểm kê tài sản', mean: 'Bản <b>danh sách đầy đủ</b> mọi thiết bị/phần mềm công ty đang có. Software Radar giúp dựng phần phần mềm.', ex: 'Như <b>sổ kiểm kê kho hàng</b>: biết chính xác đang có gì, ở đâu, bao nhiêu.' },
  { cat: 'biz', name: 'reconciliation', full: 'đối soát', mean: '<b>So khớp hai danh sách</b> — vd số bản quyền đã mua so với số đang thực dùng — để tìm chênh lệch.', ex: 'Như <b>đối chiếu sổ sách với tiền trong két</b>: lệch chỗ nào lôi ra chỗ đó.' },

  /* ---------- TÍNH NĂNG SẢN PHẨM ---------- */
  { cat: 'prod', name: 'dashboard', full: 'bảng điều khiển', mean: '<b>Màn hình tổng quan</b> hiển thị mọi con số quan trọng một chỗ: bao nhiêu máy, phần mềm gì, rủi ro nào.', ex: 'Như <b>bảng đồng hồ trên xe</b>: liếc một cái biết xăng, tốc độ, có đèn báo lỗi không.' },
  { cat: 'prod', name: 'Live Feed', full: 'dòng sự kiện trực tiếp', mean: 'Khu vực <b>cập nhật theo thời gian thực</b> những gì vừa xảy ra trong mạng (máy nào vừa mở app gì).', ex: 'Như <b>bảng tin chạy chữ</b> ở sân bay: sự kiện mới nhất hiện liên tục.' },
  { cat: 'prod', name: 'Hosts / Software / Coverage tab', full: 'các thẻ trong dashboard', mean: 'Các <b>“ngăn”</b> trong giao diện: <b>Hosts</b> = danh sách máy, <b>Software</b> = phần mềm phát hiện, <b>Coverage</b> = mức độ phủ sóng quan sát.', ex: 'Như các <b>tab trong file Excel</b>: mỗi tab một mảng thông tin, bấm qua lại để xem.' },
  { cat: 'prod', name: 'pattern', full: 'mẫu nhận diện', mean: '<b>“Dấu hiệu nhận dạng”</b> giúp hệ thống biết một traffic là phần mềm nào. Cập nhật pattern = dạy thêm phần mềm mới.', ex: 'Như <b>bộ ảnh nhận diện tội phạm</b> của cảnh sát: thêm ảnh mới thì nhận ra được nhiều đối tượng hơn.' },
  { cat: 'prod', name: 'weekly digest', full: 'báo cáo tuần', mean: 'Bản <b>tóm tắt tự động gửi hằng tuần</b>: tuần này phát hiện gì, rủi ro nào, thay đổi ra sao.', ex: 'Như <b>bản tin tổng kết cuối tuần</b> gửi vào email — đọc 2 phút nắm cả tuần.' },
  { cat: 'prod', name: 'MCP', full: 'Model Context Protocol', mean: 'Chuẩn cho phép <b>trợ lý AI (như Claude) đọc dữ liệu</b> của Software Radar để hỏi-đáp bằng lời thường.', ex: 'Như <b>cắm trợ lý AI vào hệ thống</b> rồi hỏi “tuần này máy nào rủi ro nhất?” và nó trả lời ngay.' },
  { cat: 'prod', name: 'BYO-key', full: 'Bring Your Own Key', mean: 'Khách <b>tự dùng tài khoản AI của mình</b> (OpenAI/Anthropic/Gemini) — không phụ thuộc và không tốn thêm phí qua nhà cung cấp.', ex: 'Như <b>quán cho mang rượu của mình vào</b>: bạn tự lo chai rượu, quán chỉ phục vụ.' },

  /* ---------- VIẾT TẮT ---------- */
  { cat: 'abbr', name: 'SAM / ITAM', full: 'Software / IT Asset Management', mean: 'Phần mềm <b>quản lý tài sản phần mềm/CNTT</b> quy mô lớn (Flexera, Snow…). Software Radar nhẹ hơn, không thay thế hẳn loại này.', ex: 'Như <b>phần mềm kế toán cỡ tập đoàn</b> so với cuốn sổ thu chi gọn nhẹ: Software Radar là “sổ gọn” dễ dùng.' },
  { cat: 'abbr', name: 'SIEM', full: 'Security Information & Event Management', mean: 'Hệ thống <b>gom và phân tích log bảo mật</b> cỡ doanh nghiệp lớn. Khách lớn mới cần tích hợp loại này.', ex: 'Như <b>trung tâm chỉ huy an ninh</b> gom camera toàn thành phố — Software Radar lo phần phần mềm nhỏ gọn.' },
  { cat: 'abbr', name: 'SSO', full: 'Single Sign-On', mean: '<b>Đăng nhập một lần</b> dùng chung cho nhiều phần mềm trong công ty, khỏi nhớ nhiều mật khẩu.', ex: 'Như <b>một thẻ ra vào</b> mở được mọi cửa trong toà nhà thay vì mỗi cửa một chìa.' },
  { cat: 'abbr', name: 'NDR / NTA', full: 'Network Detection / Traffic Analysis', mean: 'Dòng sản phẩm <b>phân tích traffic mạng cỡ lớn</b> cho doanh nghiệp. Software Radar là phiên bản nhẹ, tập trung phần mềm.', ex: 'Như <b>radar quân sự</b> so với <b>app báo tốc độ trên điện thoại</b>: cùng nguyên lý, khác quy mô và giá.' },
  { cat: 'abbr', name: 'USTR / Special 301', full: 'cơ quan thương mại Mỹ & báo cáo bản quyền', mean: 'USTR là <b>cơ quan thương mại Mỹ</b>; báo cáo Special 301 <b>nêu tên nước vi phạm bản quyền</b> — tạo áp lực buộc doanh nghiệp dùng phần mềm chính hãng.', ex: 'Như <b>bảng “danh sách đen” quốc tế</b>: bị nêu tên thì cả nước chịu áp lực phải làm đúng luật.' },
  { cat: 'abbr', name: 'IP / SHTT', full: 'Intellectual Property / Sở hữu trí tuệ', mean: '<b>Tài sản trí tuệ</b>: phần mềm, sáng chế, thương hiệu… có chủ và được luật bảo vệ. Dùng lậu là vi phạm.', ex: 'Như <b>bản quyền bài hát</b>: hát kinh doanh mà không trả phí là vi phạm, có thể bị kiện.' },
];
