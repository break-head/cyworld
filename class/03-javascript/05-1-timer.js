const timer = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, 0);
  document.getElementById("number").innerText = token;

  let count = 10;

  setInterval(() => {
    if (count > 0) {
      count = count - 1;
      document.getElementById("count").innerText = count;
    }
    if (count === 0) {
      document.getElementById("btn").setAttribute("disabled", true);
    }
  }, 100);
};
