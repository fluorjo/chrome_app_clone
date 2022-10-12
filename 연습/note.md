1.5.  
- 리액트 네이티브- 자바스크립트만으로 앱 만들 수 있게 해준다.  

- 일렉트론 - 데스크탑 앱 제작.  

- socket.io 채팅, 실시간 기능들 제작.  

- ml5.js - 머신러닝  

2.0.  
브라우저는 html을 열고 html은 css와 자바스크립트를 가져온다.  

- const:constant. 바뀌지 않는 상수.  

- let: 바꿀 수 있는 변수.  
const를 기본으로 하고 나중에 바꿀 일이 있는 변수를 let으로 지정할 것.  

- var는 옛날 방식. 이것도 업데이트 가능함. 쓰지 말 것. 다른 사람들이 봤을 때 코드를 이해, 짐작하기 힘드니까.

- 변수명 지정할 때 띄어쓸 부분을 대문자로 쓴다. veryLongVariableName 이런 식으로.  
(파이썬에서는 _ 이거 씀.)  

2.4.  
boolean 사용처 예시-사용자가 로그인 했는지 안 했는지,비디오가 재생되고 있는지, 사이트가 로딩되고 있는지 여부.  

- null과 undefined는 다름. null은 빈값을 준 거고 undefined는 아예 지금 값이 없고 정의가 안 된 것임.  

- ★★★null은 절대 자연적으로 발생하지 않는다. null은 변수 안에 어떤 것이 없다는 걸 확실히 하기 위해 쓴다. 

- undefined은 변수를 선언하고 값을 할당하지 않은 상태, null은 변수를 선언하고 빈 값을 할당한 상태(빈 객체)이다. 즉, undefined는 자료형이 없는 상태이다.
따라서 typeof를 통해 자료형을 확인해보면 null은 object로, undefined는 undefined가 출력된다.  

typeof undefined는 출력하면 undefined이다.
typeof null은 출력하면 object이다. 하지만 이는 여전히 원시 타입(primitive value)로, JavaScript에서는 구현 버그로 간주한다.
undefined == null은 true이다.  

2.13.  
- prompt 더 이상 안 쓴다? 자바 스크립트 실행을 멈추게 하고, 메세지도 안 예쁘고, css 적용도 못 시키기 때문. 심지어 어떤 브라우저에선 금지시키기도 함. 

- prompt 이용해서 값 입력받으면 뭘 받든 기본적으로 string 타입이다. 

- parseInt:string을 number로 바꿈.  

- function을 이중으로 쓰면 내부에 있는 것부터 실행된다.  

- NaN-숫자가 아니면 trun, 숫자면 false 반환.

- 조건문 기본 틀:if(condition){
    //true일 때 실행
    } else {
    //false일 때 실행
    }  

- condition은 boolean으로 판별 가능한 것이어야 한다.  

- 논리 AND	&&	example1 && example2	example1 AND example2	example1 이 true 인 경우 example2 을 반환하고 그렇지 않은 경우 example1을 반환  

논리 OR	||	example1 || example2	example1 OR example2	example1 이 true 인 경우 example1 을 반환하고 그렇지 않은 경우 example2을 반환  

논리 NOT !	!example1	NOT example1	example1 이 true 인 경우 false를 반환하고 그렇지 않은 경우 true 를 반환   


- === 등호표 3개 = 일치.  
- !== !랑 == 두 개. 불일치.

3.0.

- 자바스크립트로 html의 정보를 가져올 수도 있고 바꿀 수도 있다.

3.2.

- querySelector=element를 css 방식으로 검색하게 함. 

3.4.

- web apis | MDN

- console.dir 쳐서 나온 것들 중 property 이름 앞에 on이 붙어있으면 그게 event listener.

  실제 사용할 때는 on 빼고 입력함.

