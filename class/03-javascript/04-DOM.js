//TODO 1. 자바스크립트에서 html에 접속
//TODO 2. html 문서에 있는 태그를 선택
//TODO 3. 태그의 내용을 가져온다
//TODO 4. 그 내용에 원하는 데이터를 덮어쓰기 한다

// const abc = () => {
//   // const = 0;
//   const count = document.getElementById("number").innerText;
//   document.getElementById("number").innerText = Number(count) + 1;
// };

const aaa = () => {
  // 랜덤번호
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, 0);
  document.getElementById("ramdom").innerText = token;
};
