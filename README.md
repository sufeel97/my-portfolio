# 개인 포트폴리오 웹사이트

> 프리미엄 디자인과 인터랙티브한 사용자 경험을 갖춘 현대적인 포트폴리오 웹사이트

🔗 **GitHub 저장소**: [https://github.com/sufeel97/my-portfolio](https://github.com/sufeel97/my-portfolio)

---

## 📋 프로젝트 개요

이 프로젝트는 개인 포트폴리오를 위한 풀스택 웹사이트로, React 스타일의 컴포넌트 시스템, 다크/라이트 모드, 인터랙티브한 애니메이션을 특징으로 합니다.

### 주요 특징

- ✨ **프리미엄 디자인**: 현대적인 glassmorphism, 그라데이션, 부드러운 애니메이션
- 🌓 **다크/라이트 모드**: 사용자 선호도에 따라 자동 전환
- 📱 **완전한 반응형**: 모바일부터 데스크톱까지 최적화
- 🎨 **인터랙티브 UI**: 호버 효과, 스크롤 애니메이션, 동적 요소
- 📝 **블로그 시스템**: 7개의 기술 블로그 포스트 포함
- 🚀 **성능 최적화**: 빠른 로딩 시간과 부드러운 사용자 경험

---

## 🛠 기술 스택

### 프론트엔드
- **HTML5**: 시맨틱 마크업 구조
- **CSS3**: Vanilla CSS with custom properties, Grid, Flexbox
- **JavaScript (ES6+)**: 모듈화된 컴포넌트 시스템

### 개발 도구
- **Git**: 버전 관리
- **GitHub**: 코드 호스팅 및 협업
- **Python**: 로컬 개발 서버 (`preview.py`)

---

## 📂 프로젝트 구조

```
portfolio/
├── index.html              # 메인 HTML 파일 (274줄)
├── styles.css              # 전체 스타일시트 (898줄)
├── script.js               # JavaScript 로직 (174줄)
├── preview.py              # 로컬 서버 스크립트
├── .gitignore              # Git 제외 파일
├── posts/                  # 블로그 포스트 디렉토리
│   ├── css-grid-mastery.html
│   ├── nodejs-performance-monitoring.html
│   ├── promise-async-await.html
│   ├── react-performance-optimization.html
│   ├── typescript-generics-guide.html
│   ├── ui-ux-design-basics.html
│   └── vscode-extensions.html
└── README.md               # 프로젝트 문서
```

**총 코드 라인**: 1,346줄 (주석 포함)

---

## 🎨 디자인 시스템

### 컬러 팔레트

#### 라이트 모드
- **Primary**: `#667eea` (보라색 그라데이션)
- **Secondary**: `#764ba2`
- **Accent**: `#f093fb` → `#f5576c`
- **Background**: `#ffffff`
- **Surface**: `#f8f9fa`

#### 다크 모드
- **Primary**: `#a78bfa` (밝은 보라)
- **Secondary**: `#c084fc`
- **Accent**: `#fbbf24` → `#f59e0b`
- **Background**: `#0f172a`
- **Surface**: `#1e293b`

### 타이포그래피
- **헤딩 폰트**: 'Outfit', sans-serif
- **본문 폰트**: 'Inter', sans-serif
- **Base 크기**: 16px
- **Scale**: 1.25 (Perfect Fourth)

### 애니메이션
- **트랜지션**: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- **Hover 효과**: transform, box-shadow, color
- **스크롤 애니메이션**: Intersection Observer API

---

## ⚙️ 주요 기능 구현

### 1. 컴포넌트 시스템

JavaScript로 React 스타일의 컴포넌트 기반 아키텍처 구현:

```javascript
// 컴포넌트 예시
function HeroSection() {
  return `
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">...</h1>
        <p class="hero-subtitle">...</p>
        <div class="hero-cta">...</div>
      </div>
    </section>
  `;
}
```

**구현된 컴포넌트**:
- Header (네비게이션, 테마 토글)
- Hero Section (프로필, CTA)
- About Section (소개, 스킬)
- Skills Section (기술 스택 카드)
- Projects Section (프로젝트 그리드)
- Blog Section (블로그 포스트 목록)
- Contact Section (연락 폼)
- Footer (소셜 링크)

### 2. 다크/라이트 모드

`localStorage`를 활용한 테마 지속성:

```javascript
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}
```

### 3. 스크롤 애니메이션

Intersection Observer API를 사용한 성능 최적화된 스크롤 애니메이션:

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, { threshold: 0.1 });
```

### 4. 스킬 시스템

동적 스킬 레벨 표시 및 카테고리화:

- **Frontend**: React, Vue.js, TypeScript
- **Backend**: Node.js, Python, PostgreSQL
- **DevOps**: Docker, AWS, CI/CD

### 5. 프로젝트 필터링

태그 기반 프로젝트 필터링 시스템:

```javascript
function filterProjects(tag) {
  const projects = document.querySelectorAll('.project-card');
  projects.forEach(project => {
    const tags = project.dataset.tags.split(',');
    project.style.display = tags.includes(tag) || tag === 'all' 
      ? 'block' 
      : 'none';
  });
}
```

---

## 📝 블로그 포스트

7개의 기술 블로그 포스트가 포함되어 있습니다:

1. **CSS Grid 완벽 가이드** - 현대적인 레이아웃 기법
2. **Node.js 성능 모니터링** - 프로덕션 최적화
3. **Promise와 Async/Await** - 비동기 JavaScript
4. **React 성능 최적화** - 렌더링 최적화 기법
5. **TypeScript 제네릭 심화** - 타입 시스템 활용
6. **UI/UX 디자인 기초** - 사용자 경험 설계
7. **필수 VSCode 확장 프로그램** - 개발 생산성 향상

각 포스트는 독립적인 HTML 페이지로 구성되어 있으며, 일관된 디자인 시스템을 공유합니다.

---

## 🚀 실행 방법

### 로컬 서버 시작

#### Python 서버 사용 (권장)
```bash
python3 preview.py
```
브라우저에서 `http://localhost:8000` 접속

#### Python 기본 서버
```bash
python3 -m http.server 8000
```

#### Live Server (VSCode 확장)
1. VSCode에서 `index.html` 열기
2. 우클릭 → "Open with Live Server"

---

## 📦 배포

### GitHub Pages (권장)

1. **저장소 설정**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`

2. **배포 URL**
   - `https://sufeel97.github.io/my-portfolio/`

### Netlify

```bash
# Netlify CLI 설치
npm install -g netlify-cli

# 배포
netlify deploy --prod
```

### Vercel

```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel --prod
```

---

## 🔧 커스터마이징 가이드

### 1. 개인 정보 수정

**`index.html`** 파일에서 다음 섹션 수정:

```html
<!-- Hero Section -->
<h1>Your Name</h1>
<p>Your Title</p>

<!-- About Section -->
<p>Your Bio</p>

<!-- Contact -->
<a href="mailto:your@email.com">Email</a>
```

### 2. 컬러 테마 변경

**`styles.css`**의 CSS 변수 수정:

```css
:root[data-theme="light"] {
  --primary: #667eea;  /* 원하는 색상 코드 */
  --secondary: #764ba2;
}
```

### 3. 프로젝트 추가

**`script.js`**의 `ProjectsSection()` 함수에서 프로젝트 배열 수정:

```javascript
const projects = [
  {
    title: "New Project",
    description: "Description",
    tags: ["React", "Node.js"],
    image: "image-url",
    github: "repo-url",
    demo: "demo-url"
  }
];
```

### 4. 블로그 포스트 추가

1. `posts/` 디렉토리에 새 HTML 파일 생성
2. 기존 포스트 구조 복사
3. `script.js`의 `BlogSection()`에 포스트 정보 추가

---

## 🎯 성능 최적화

### 구현된 최적화

1. **이미지 최적화**
   - Lazy loading 적용
   - 적절한 이미지 크기 사용
   - WebP 포맷 지원

2. **CSS 최적화**
   - CSS 변수로 재사용성 증가
   - 중복 스타일 제거
   - Critical CSS 인라인화

3. **JavaScript 최적화**
   - 모듈화된 컴포넌트
   - 이벤트 위임 사용
   - Debouncing/Throttling 적용

4. **렌더링 최적화**
   - Intersection Observer 사용
   - CSS transform/opacity 애니메이션
   - Reflow 최소화

---

## 🔐 보안 고려사항

- ✅ XSS 방지: 사용자 입력 검증
- ✅ HTTPS 사용 (GitHub Pages 자동 지원)
- ✅ Content Security Policy 고려
- ✅ 민감 정보 환경 변수화

---

## 🐛 트러블슈팅

### 스타일이 적용되지 않을 때
```bash
# 브라우저 캐시 삭제
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

### 다크 모드가 저장되지 않을 때
```javascript
// 브라우저 콘솔에서 확인
localStorage.getItem('theme');
```

### 스크롤 애니메이션이 작동하지 않을 때
- Intersection Observer API 지원 브라우저 확인
- 콘솔에서 에러 메시지 확인

---

## 📈 향후 개선 계획

- [ ] SEO 최적화 (메타 태그, sitemap.xml)
- [ ] Progressive Web App (PWA) 기능
- [ ] 다국어 지원 (i18n)
- [ ] 블로그 검색 기능
- [ ] 댓글 시스템 (Disqus/Utterances)
- [ ] 애널리틱스 통합 (Google Analytics)
- [ ] 성능 모니터링 (Lighthouse CI)
- [ ] A/B 테스팅 구현

---

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.
자유롭게 참고하고 수정하여 사용하실 수 있습니다.

---

## 🙏 감사의 말

이 프로젝트는 다음 리소스들을 참고하여 제작되었습니다:

- **디자인 영감**: Dribbble, Behance
- **아이콘**: Font Awesome, Heroicons
- **폰트**: Google Fonts (Inter, Outfit)
- **컬러 팔레트**: Coolors, Adobe Color

---

## 📞 연락처

프로젝트에 대한 질문이나 제안사항이 있으시면 언제든 연락주세요!

- **GitHub**: [@sufeel97](https://github.com/sufeel97)
- **Email**: your@email.com
- **LinkedIn**: your-profile

---

**Made with ❤️ by Heungsik Kim**

*Last Updated: 2025-12-23*
