// 데이터 타입 연산자 실습
1+1
// 2
1+"만원"
// '1만원'
1+"1"
// '11'
1-"1"
// 0
1-1
// 0
"코드"+"캠프"
// '코드캠프'
"123"==123
// true
"123"===123
// false
true && true
// true
true && false
// false

true||false
// true
!true
// false

// 조건문 실습

if(true) {
  3+3
}
else {
  2-4}
6
if(false) {
  3+3
}
else {
  2-4}
-2
if(password1 ==password2) {
  alert("회원가입을 축하합니다.");
} else {
  alert("비밀번호가 다릅니다. 다시 한번 확인해 주세요.");
}
// VM962:1 Uncaught ReferenceError: password1 is not defined
  // at <anonymous>:1:1
// (익명) @ VM962:1
if(3===3) {
  alert("회원가입을 축하합니다.");
} else {
  alert("비밀번호가 다릅니다. 다시 한번 확인해 주세요.");
}
undefined
if(1+1 ===2) {
  console.log("정답입니다.")
} else {
  console.log("틀렸습니다.") }
// VM1275:2 정답입니다.
undefined
if(true) {
  console.log("정답입니다.")
} else {
  console.log("틀렸습니다.") }
// VM1317:2 정답입니다.
undefined
if(!true) {
  console.log("정답입니다.")
} else {
  console.log("틀렸습니다.") }

// 조건문 실습 2

// const profile = {
//   name:"철수",
//   age: 12,
//   school:"다람쥐초등학교"
// }
// if(profile.age >= 20) {
//   console.log("성인입니다.") }
// else if(profile.age>=8) {
//   console.log("학생입니다.") } 
// else {
//   console.log("어린이입니다.") }
// VM2038:9 학생입니다.
// undefined
// const profile = {
//   name:"철수",
//   age: 12,
//   school:"다람쥐초등학교"
// }
// if(profile.age >= 20) {
//   console.log("성인입니다.") }
// else if(profile.age>=8 && profile.age <=19) {
//   console.log("학생입니다.") } 
// else {
//   console.log("어린이입니다.") }
// VM2103:9 학생입니다.
// undefined
// const profile = {
//   name:"철수",
//   age: 12,
//   school:"다람쥐초등학교"
// }
// if(profile.age >= 20) {
//   console.log("성인입니다.") }
// else if(profile.age>=8 && profile.age <=19) {
//   console.log("학생입니다.") } 
// else if(profile.age > 0) {
//   console.log("어린이입니다.") }
// else {
//   console.log("잘못 입력하셨습니다.") }
// VM2335:9 학생입니다.
// undefined
// const profile = {
//   name:"철수",
//   age: -2,
//   school:"다람쥐초등학교"
// }
// if(profile.age >= 20) {
//   console.log("성인입니다.") }
// else if(profile.age>=8 && profile.age <=19) {
//   console.log("학생입니다.") } 
// else if(profile.age > 0) {
//   console.log("어린이입니다.") }
// else {
//   console.log("잘못 입력하셨습니다.") }
// // VM2349:13 잘못 입력하셨습니다.
