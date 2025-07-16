# 🚀 신세계 상담신청 시스템 설정 가이드

## 📋 개요
상담신청폼이 제출되면:
1. 구글 스프레드시트에 자동으로 데이터 저장
2. 지정한 이메일로 즉시 알림 발송
3. 사용자에게 접수완료 메시지 표시

## 🛠️ 설정 단계

### 1️⃣ Google Sheets 생성
1. [Google Sheets](https://sheets.google.com) 접속
2. **새 시트 생성**
3. **첫 번째 행에 헤더 입력**:
   ```
   A1: 접수일시
   B1: 이름  
   C1: 연락처
   D1: 숙소유형
   E1: 객실수
   F1: 문의사항
   ```
4. **스프레드시트 ID 복사** (URL에서 확인):
   ```
   https://docs.google.com/spreadsheets/d/[이부분이ID]/edit
   ```

### 2️⃣ Google Apps Script 설정
1. [Google Apps Script](https://script.google.com) 접속
2. **새 프로젝트** 클릭
3. 프로젝트 이름: **"신세계 상담신청 처리기"**
4. `Code.gs` 파일에 아래 코드 붙여넣기:

```javascript
function doPost(e) {
  try {
    // ⚠️ 여기 수정 필요: 생성한 스프레드시트 ID
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
    // ⚠️ 여기 수정 필요: 알림받을 이메일 주소  
    const NOTIFICATION_EMAIL = 'your-email@gmail.com';
    
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getActiveSheet();
    const timestamp = new Date();
    
    // 스프레드시트에 데이터 추가
    sheet.appendRow([
      timestamp,
      data.name,
      data.phone,
      data.propertyType,
      data.roomCount,
      data.message || ''
    ]);
    
    // 이메일 알림 발송
    const emailSubject = '🏨 신세계 입점 상담신청이 접수되었습니다';
    const emailBody = `
새로운 상담신청이 접수되었습니다.

📋 신청 정보:
• 접수시간: ${timestamp.toLocaleString('ko-KR')}
• 이름: ${data.name}
• 연락처: ${data.phone}  
• 숙소유형: ${data.propertyType}
• 객실수: ${data.roomCount}
• 문의사항: ${data.message || '없음'}

스프레드시트 확인: https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}
    `;
    
    GmailApp.sendEmail(NOTIFICATION_EMAIL, emailSubject, emailBody);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: '상담신청이 성공적으로 접수되었습니다'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({success: false, message: '처리 중 오류가 발생했습니다'}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 3️⃣ Apps Script 배포
1. 우상단 **"배포"** → **"새 배포"** 클릭
2. 유형: **"웹 앱"** 선택
3. 배포 설정:
   - 설명: "신세계 상담신청 API"
   - 실행 계정: **"나"**
   - 액세스 권한: **"모든 사용자"**
4. **"배포"** 클릭
5. **⚠️ 중요: 웹 앱 URL 복사 보관**

### 4️⃣ React 프로젝트 설정

#### 방법 1: 환경변수 사용 (권장)
1. 프로젝트 루트에 `.env.local` 파일 생성
2. 다음 내용 추가:
```bash
REACT_APP_GOOGLE_APPS_SCRIPT_URL=복사한_웹앱_URL
```

#### 방법 2: 코드 직접 수정
`src/pages/Shinsegae.tsx` 파일에서:
```typescript
const APPS_SCRIPT_URL = process.env.REACT_APP_GOOGLE_APPS_SCRIPT_URL || 'YOUR_APPS_SCRIPT_URL_HERE';
```
`YOUR_APPS_SCRIPT_URL_HERE` 부분을 복사한 웹앱 URL로 교체

### 5️⃣ 테스트
1. 웹사이트에서 상담신청 폼 작성
2. 제출 후 확인사항:
   - ✅ 스프레드시트에 데이터 저장 확인
   - ✅ 이메일 알림 수신 확인
   - ✅ 웹사이트에서 성공 메시지 표시

## 🔧 문제해결

### 오류가 발생하는 경우:
1. **CORS 오류**: Apps Script 배포 시 "모든 사용자" 권한 설정 확인
2. **권한 오류**: Gmail 및 Sheets 권한 승인 필요
3. **스프레드시트 접근 불가**: SPREADSHEET_ID 정확성 확인

### 추가 기능:
- 📊 데이터 분석을 위한 스프레드시트 차트 생성
- 📧 자동 응답 이메일 설정
- 📱 Slack/Discord 알림 연동 가능

## 🎯 완료!
설정이 완료되면 실시간으로 상담신청을 받고 관리할 수 있습니다! 🚀 