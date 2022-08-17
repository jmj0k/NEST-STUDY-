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
