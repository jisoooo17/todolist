## To do List
#### 사용자가 해야 할 일을 쉽게 관리할 수 있도록 도와주는 앱입니다.
#### 직관적인 UI와 간단한 기능을 통해 할 일 추가, 수정, 삭제가 가능합니다.
---





### 주요 기능
* 할 일 목록 보기: 사용자가 추가한 모든 할 일 목록을 볼 수 있습니다.

* 할 일 추가: 새로운 할 일 항목을 작성하여 목록에 추가할 수 있습니다.

* 할 일 수정 및 완료 처리: 기존 항목의 내용을 수정하거나 완료 상태로 표시할 수 있습니다.

* 할 일 삭제: 할 일 항목을 삭제할 수 있습니다.

* 로컬 스토리지 저장: 할 일 목록이 브라우저의 로컬 스토리지에 저장되며, 새로고침해도 데이터가 유지됩니다.

---
### 소스 빌드 및 실행 방법 
1. 소스를 다운로드한 후 압축을 해제합니다.
2. 터미널에서 npm install 명령어로 필요한 모듈을 설치합니다.
3. 터미널에서 npm start 명령어로 앱을 실행합니다.

---
### 컴포넌트 설명 및 사용 이유
* **TodoList 컴포넌트**
  * 설명: 전체 할 일 목록을 관리하는 컴포넌트입니다. 할 일 목록을 추가, 수정, 삭제하는 작업을 처리합니다. useEffect를 사용하여 목록이 변경될 때마다 로컬스토리지에 데이터를 저장해 새로고침 후에도 목록이 유지되도록 합니다.

  * 사용 이유: 전반적인 할 일 목록 관리 로직을 구현하여, 상태 및 로컬스토리지 동기화를 처리합니다. 앱의 메인 로직을 중앙에서 관리할 수 있는 구조로 작성해 관리와 유지보수가 용이합니다.


* **TodoItem 컴포넌트**
  * 설명: 개별 할 일 항목을 보여주고 관리하는 컴포넌트입니다. 각 항목은 텍스트를 수정하거나, 삭제하거나, 완료 여부를 표시할 수 있습니다. 완료 상태를 토글하거나 수정 모드를 처리하며, react-icons를 사용해 직관적인 UI를 제공합니다.

  * 사용 이유: 할 일 항목을 재사용 가능한 컴포넌트로 분리하여 유지보수가 쉬운 구조를 만들었습니다. 이를 통해 개별 항목의 상태 관리와 관련된 로직을 독립적으로 처리할 수 있으며 사용자 경험을 높였습니다.

* **CreateTodo 컴포넌트**
  * 설명: 새로운 할 일 항목을 추가하는 입력 폼을 제공하는 컴포넌트입니다. 사용자는 텍스트 입력 필드를 통해 새로운 할 일을 작성하고 추가할 수 있으며, 등록 버튼을 통해 할 일을 목록에 추가합니다.

  * 사용 이유: 새로운 할 일을 입력받는 기능을 독립적인 컴포넌트로 분리하여 코드의 가독성을 높였습니다. 사용자 인터페이스의 입력 기능을 단순하게 관리하며, 할 일을 추가할 수 있는 방법을 제공합니다.
