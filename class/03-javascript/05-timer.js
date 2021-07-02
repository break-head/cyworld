// const timer = () => {
//   setTimeout(() => {
//     console.log("hello");
//   }, 2000);
// };
//*setTimeout => 몇초 뒤에 우리가 만든 기능 실행

const timer = () => {
  let count = 180;

  setInterval(() => {
    count = count - 1;
    let min = Math.floor(count / 60);
    let sec = count % 60;
    let time = Math.floor(min) + ":" + sec;
    if (count >= 0) {
      document.getElementById("number").innerText = time;
    }
  }, 1000);
};

//*setInterval => 몇초 마다 우리가 만든 기능 실행
