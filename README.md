# vite-plugin-pages-router

**vite-plugin-pages-router**는 Vite와 React 프로젝트에서 Next.js와 유사한 페이지 기반 라우팅을 손쉽게 구현할 수 있도록 도와주는 플러그인입니다.  
플러그인은 `src/pages` 폴더 내부의 모든 `.tsx` 페이지 파일을 자동으로 스캔하여, 가상 모듈을 통해 라우팅 구성을 생성합니다.  
또한, 사용자가 옵션으로 전달한 **404 페이지**와 **로딩 컴포넌트**를 자동으로 import하여 적용합니다.

> **주의:**  
> 이 플러그인은 실제로 `RouterConfig.tsx` 파일을 디스크에 생성하지 않습니다.  
> 대신 Vite의 가상 모듈 시스템을 활용하여, 플러그인 내부에서 `<RouterConfig />` React 구성 요소를 제공하므로  
> 별도의 라우터 설정 파일 없이도 파일 기반 라우팅을 구현할 수 있습니다.

---

## 설치

```bash
# npm 설치
npm install vite-plugin-pages-router
```

---

## 사용법

### 1. Vite 설정 파일 구성

`vite.config.ts` 파일에서 플러그인을 import한 후, 플러그인 옵션과 함께 등록합니다.  
플러그인은 두 가지 역할을 수행합니다.

- **Vite 플러그인:**
  - `vite-plugin-pages-router/plugin` 경로에서 플러그인 함수를 import하여 사용합니다.
- **React 라우터 구성 컴포넌트:**
  - 기본 모듈(`vite-plugin-pages-router`)로부터 가상 모듈을 import하여 앱 내에서 `<RouterConfig />` 구성 요소로 사용합니다.

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import createFileRouterPlugin from "vite-plugin-pages-router/plugin";

export default defineConfig({
  plugins: [
    react(),
    createFileRouterPlugin({
      pagesDir: "src/pages", // 페이지 파일들이 위치한 디렉토리
      notFoundPage: "src/pages/404.tsx", // 404 에러 페이지 컴포넌트 경로
      loadingComponent: "src/components/Loading.tsx", // 로딩 시 보여줄 컴포넌트 경로
    }),
  ],
  // 필요에 따라 alias 설정 (예: "src" 경로 매핑)
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
```

---

### 2. 페이지 컴포넌트 작성

`src/pages` 디렉토리 내부에 페이지 컴포넌트를 작성합니다.  
예를 들어, 홈 페이지와 소개 페이지를 아래와 같이 작성할 수 있습니다.

#### 홈 페이지 예시 (`src/pages/index.tsx`)

```tsx
// src/pages/index.tsx
import React from "react";

function HomePage(): JSX.Element {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">홈 페이지</h1>
      <p>환영합니다!</p>
    </div>
  );
}

export default HomePage;
```

#### 소개 페이지 예시 (`src/pages/about.tsx`)

```tsx
// src/pages/about.tsx
import React from "react";

function AboutPage(): JSX.Element {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">소개 페이지</h1>
      <p>이 플러그인을 사용한 파일 기반 라우팅 예시입니다.</p>
    </div>
  );
}

export default AboutPage;
```

---

### 3. 404 페이지 및 로딩 컴포넌트 작성

#### 404 페이지 예시 (`src/pages/404.tsx`)

```tsx
// src/pages/404.tsx
import React from "react";

function NotFoundPage(): JSX.Element {
  return (
    <div className="p-4 text-center text-red-500">
      <h1 className="text-2xl font-bold">404 - 페이지를 찾을 수 없습니다.</h1>
      <p>죄송합니다. 요청하신 페이지는 존재하지 않습니다.</p>
    </div>
  );
}

export default NotFoundPage;
```

#### 로딩 컴포넌트 예시 (`src/components/Loading.tsx`)

```tsx
// src/components/Loading.tsx
import React from "react";

function Loading(): JSX.Element {
  return (
    <div className="p-4 text-center">
      <p className="text-lg">로딩 중...</p>
    </div>
  );
}

export default Loading;
```

---

### 4. App 컴포넌트에서 사용

앱에서는 플러그인이 제공하는 가상 모듈로부터 `<RouterConfig />` React 구성 요소를 import하여 사용합니다.

```tsx
// src/App.tsx
import React from "react";
import RouterConfig from "vite-plugin-pages-router"; // 가상 모듈에서 제공됨

function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50">
      <RouterConfig />
    </div>
  );
}

export default App;
```

---

### 5. 프로젝트 실행

Vite 개발 서버를 실행하여 정상 동작하는지 확인합니다.

```bash
npm run dev
```

브라우저에서 [http://localhost:5173](http://localhost:5173) 등 해당 주소로 접속하면,  
파일 기반 라우팅에 따라 `/` (홈 페이지), `/about` (소개 페이지) 등 페이지가 정상적으로 렌더링되고,  
존재하지 않는 경로로 접근할 경우 404 페이지가 표시되며, 페이지 전환 시 로딩 컴포넌트가 적용됩니다.

---

## 플러그인 동작 방식

- **자동 파일 스캔:**  
  플러그인은 `src/pages` 폴더 내의 모든 `.tsx` 파일을 자동으로 스캔하여 라우트 경로를 생성합니다.  
  예를 들어,

  - `index.tsx` → `/`
  - `about.tsx` → `/about`
  - `[id].tsx` → `/:id`

- **로딩 및 404 처리:**

  - 옵션으로 전달한 `loadingComponent`가 있으면 `<Suspense fallback={...}>`에 적용되고,  
    없으면 기본 `<div>Loading...</div>`가 사용됩니다.
  - 옵션으로 전달한 `notFoundPage`가 있으면 404 라우트의 요소로 사용되며,  
    없으면 기본 `<div>404 Not Found</div>`가 사용됩니다.

- **가상 모듈 제공:**  
  플러그인은 실제 파일을 생성하지 않고, Vite의 가상 모듈 시스템을 통해 `<RouterConfig />` 구성 요소를 제공합니다.  
  이 구성 요소는 `<BrowserRouter>`, `<Suspense>`, `<Routes>` 및 404 라우트를 포함하며, 페이지 파일이 추가/삭제될 때마다 라우트 구성이 자동으로 업데이트됩니다.

---

이와 같이 플러그인을 설치하고 구성하면, 별도의 라우팅 설정 없이 파일 기반 라우팅을 쉽게 구현할 수 있습니다.

추가 질문이나 문제가 있으시면 [GitHub Issues](https://github.com/chickengir1/vite-plugin-pages-router/issues)에 남겨주세요.

---

> **Tip:** 파일 기반 라우팅은 파일 및 디렉토리 구조를 그대로 반영하므로,  
> 페이지 파일을 추가/삭제할 때마다 라우트가 자동으로 갱신되어 개발 효율성을 높입니다.
