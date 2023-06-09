export const marketingData = [
  {
    id: 1,
    title: '개인신용정보의 수집/이용동의(필수)',
    label: 'select-1',
    name: 'required1',
    required: '필수 체크사항은 모두 동의해주세요',
    textArea: `
      
        <p>[개인정보보호법] 및 [신용정보의 이용 및 보호에 관한 법률]에 따라 아래와 같은 내용으로 본인의 개인(신용)정보의 수집, 이용하는 것에 동의합니다.</p>
        <ul>
          <li>
            <p>1.개인 정보의 수집 및 이용</p>
            <ul>
              <li>
                <p>1)수집하는 개인정보 항목 및 수집 방법</p>
                <div>
                  ① 수집, 이용할 개인정보 항목<br />
                  - 계약자 정보 : 계약자 성명(상호), 주민등록번호(외국인등록번호), 휴대폰번호, 이메일<br />
                  - 피보험자 정보 : 피보험자의 성명, 주민등록번호(외국인등록번호), 휴대폰번호, 상호, 사업자번호, 사업장 주소, 기타 사업장 정보(업종, 층수, 평수)<br />
                  ② 수집 방법 : 인터넷 전용페이지, 전화
                </div>
              </li>
              <li>
                <p>2) 개인정보 수집 및 이용 목적</p>
                <div>
                  보험 가입 계약체결, 유지, 보험금 등 지급/심사, 민원처리 및 분쟁 대응, 보험사고조사, 보험모집질서 유지, 보험가입 안내 및 기타 상품 안내
                </div>
              </li>
              <li>
                <p>3) 개인정보의 보유 및 이용기간</p>
                <div>
                  위 수집/이용 목적 달성 시까지(최대 가입일로부터 3년)
                </div>
              </li>
            </ul>
          </li>
          <li>
            <p>2. 개인 정보의 조회</p>
            <ul>
              <li>
                <p>1) 조회할 개인(신용)정보</p>
                <div>
                  본인 확인 정보 및 연계정보 확인
                </div>
              <li>
              <li>
                <p>2) 개인(신용)정보 조회목적</p>
                <div>
                  보험계약의 인수심사/체결/유지/관리(갱신 포함), 보험금 등 지급/심사, 보험사고조사, 보험상품 추천안내
                </div>
              <li>
              <li>
                <p>3) 조회동의 유효기간</p>
                <div>
                  위 조회 목적 달성 시까지
                </div>
              <li>
              <li>
                <p>4) 조회자[개인(신용)정보를 제공받는 자]의 개인(신용)정보의 보유, 이용기간</p>
                <div>
                  정보를 제공받은 날로부터 개인(신용)정보의 조회 목적 달성 시까지
                </div>
              <li>
            </ul>
          </li>
          <li>
            <p>3. 민감 정보 및 고유식별정보의 처리에 관한 사항</p>
            <div>당사는 개인정보보호법 제23조 및 제24조에 따라 본 계약과 관련하여 상기의 개인(신용)정보에 대한 개별 동의 사항에 대하여 고객님의 민감정보(질병•상해정보) 및 고유식별정보(주민등록번호•외국인등록번호)를 처리(수집/이용, 제공 등)함</div>
          </li>
        </ul>
      
    `
  },
  {
    id: 2,
    title: '제3자 정보 제공 동의(필수)',
    label: 'select-2',
    name: 'required2',
    required: '필수 체크사항은 모두 동의해주세요',
    textArea: `
      <p>[개인정보보호법] 및 [신용정보의 이용 및 보호에 관한 법률]에 따라 아래와 같은 내용으로 본인의 개인(신용) 정보 제공에 동의합니다.</p>
      <div>
        <h2>
          현대해상화재보험(주)<br />
          <span>
            제공목적: 보험 가입, 보험계약의 인수심사/체결/유지/관리, 보험금 등 지급/심사, 보험사고조사<br />
            제공정보: 피보험자의 성명, 주민등록번호<br />
            보유기간: 5년
          </span>
        </h2>
      </div>
    `
  },
  {
    id: 3,
    title: '보험약관 동의(필수)',
    label: 'select-3',
    name: 'required3',
    required: '필수 체크사항은 모두 동의해주세요',
    textArea: `
      <a href='../../assets/windstormclause.pdf'>소상공인 풍수해보험VI약관.pdf</a>
    `
  },
  {
    id: 4,
    title: '마케팅 활용동의(선택)',
    label: 'select-4',
    name: 'marketing_option',
    textArea: `
      <ul>
        <li>
          <p>1.개인 정보의 수집 및 이용</p>
          <div>전화, 문자, 온라인를 활용한 보험상품 및 보험가입안내, 유익한 정보 및 서비스의 제공, 사은판촉행사안내 (문자, 전화 등), 증권 배송업무, 회원유치, 상품 권유 업무, 전화상담 업무, 인터넷 관련 서비스 업무 등</div>
        </li>
        <li>
          <p>2. 수집이용 할 개인(신용)정보의 내용</p>
          <div>계약자 정보 (성명, 주민등록번호, 휴대폰번호, 상호, 사업장 주소, 기타 사업장정보(업종, 층수, 면적))</div>
        </li>
        <li>
          <p>3. 개인(신용)정보의 보유, 이용기간</p>
          <div>수집, 이용 동의일로부터 고객님의 동의 철회시까지 보관하며, 070-4126-3333로 전화 주시면 철회가능(단, 최대 2년)</div>
        </li>
        <li>
          <p>4. 수집자 : (주)인슈로보</p>
        </li>
        <li>
          <p>5. 마케팅 목적의 제 3자 개인정보 제공</p>
          <table>
            <tr>
              <th>제공받는자</th>
              <th>이용목적</th>
              <th>제공하는 정보</th>
              <th>제공기간</th>
            </tr>
            <tr>
              <td>ITX마케팅㈜, 인카금융서비스㈜, 메트라이프금융서비스㈜, ㈜세안뱅크, 에이티에셋㈜, 메가㈜, 한국보험금융㈜</td>
              <td>상증권전달, 보장내용안내, 보장분석, 기타보험서비스</td>
              <td>개인식별정보</td>
              <td>목적달성시까지</td>
            </tr>
            <tr>
              <td>지엔터프라이즈㈜</td>
              <td>소상공인 세금환급 서비스</td>
              <td>개인식별정보</td>
              <td>목적달성시까지</td>
            </tr>
            <tr>
              <td>로제타텍㈜</td>
              <td>화재경보시스템등 위험관리 서비스</td>
              <td>개인식별정보</td>
              <td>목적달성시까지</td>
            </tr>
            <tr>
              <td>㈜세원폴리텍</td>
              <td>누수방지 사업장 유지관리 서비스</td>
              <td>개인식별정보</td>
              <td>목적달성시까지</td>
            </tr>
            <tr>
              <td>㈜한성로하스</td>
              <td>소상공인 생활서비스</td>
              <td>개인식별정보</td>
              <td>목적달성시까지</td>
            </tr>
          </table>
          <span>※ 상품권유 중지청구(Do-Not Call) 개인(신용)정보 제공 및 이용에 동의한 이후에도 전화[070-4126-3333], 서면 등을 통해 언제든지 마케팅활동에 대한 중지를 요청할 수 있습니다.</span>
        </li>
      </ul>
    `
  },
]