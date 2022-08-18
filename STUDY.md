AOP란 관점 지향 프로그래밍으로 모듈성을 높이는 것을 목표로 한다.

Dry 원칙 (don't repeat yourself) : 두 번 같은 코드를 짜지 말자
Kiss 원칙 (Keep it simple, stuipd) : 큰 프로젝트를 최소한 작은 단위로 쪼개서, 이를 합친다.
Yagni 원칙(You ain't gonna need it) : 결국 쓸데 없을 테니 간단한 기능으로 적은 컴포넌트로 문제를 해결하자

0. 요청
1. middleware (미들웨어)
2. guards (가드)
   - 주로 permission (인증) 처리를 할 때 사용합니다.
3. pre-interceptors (인터셉터)
   - 주로 post-interceptor를 위한 변수 선언, 함수 실행을 합니다. (선택)
4. Pipes (파이프)
   - 변환(요청 바디를 원하는 형식으로 변환), 유효성 검사를 합니다.
5. Controller (컨트롤러)
   - 라우터 역할을 수행합니다. (서비스 로직의 결과를 응답합니다.)
6. Service (서비스 ; 컨트롤러 안에 정의되어 있다면)
   - 해당 요청에 대한 핵심 로직이 수행됩니다.
7. post-interceptor (인터셉터)
   - 주로 pre-interceptor 로직을 가지고 응답한 데이터를 가공하거나 전체 로직의 속도를 측정합니다. 최종적으로 성공적인 응답 데이터를 보냅니다.
8. exception filters (필터)
   - 예외 처리를 담당합니다. 에러 메세지를 원하는 형태로 가공해서 응답합니다.
9. 응답

미들웨어와 인터셉터의 차이는 실행 순서가 다르다는 점,

error: 'NestJS/cats-community/' does not have a commit checked out
fatal: adding files failed
=> 상위 폴더에 .git 폴더가 있는데 하위 폴더에 .git 폴더가 또 있을 때 발생함, .git 폴더 제거하면 정상 작동

#### 레포지토리 패턴

clinet -> service1, service2, service3 -> data source

=> service1에 db에 접근을 한 로직이 있는데 service2에서 그것을 가져온다면
=> 근데 service1에서도 service2를 참조하고 있다면 순환 참조가 된다.
=> 이 경우 가독성이 굉장히 떨어지게 된다.

레포지토리 패턴으로 db와 직접적으로 연결하는 로직들을 분리하면 다른 모듈에서 접근할 때 이 레포지토리에만 접근을 하면 된다. 그러면 각각의 모듈에서 비지니스 로직에 더 집중할 수 있게 되고 모듈 간의 책임 분리도 확실하게 된다.

레포지토리 패턴은 서비스 레이어에서 데이터의 출처와 관계없이 동일한 방식으로 접근을 가능하게 한다. 일종의 데이터 베이스 캡슐화, db 중앙 통제실
