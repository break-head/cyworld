f(x) = x + 3

function add(x, y) {
  console.log(x + y + 3);
}
f(3)

add(10, 5);

function helllo() {
  alert("안녕하세용");
}

helllo();

if ("철수" === "철수") {
  console.log("같음");
} else {
  console.log("다름");
}

const name = (aaa) => {
  if (aaa === "철수") {
    console.log("같음");
  } else {
    console.log("다름");
  }
};
name("철수");

const child = (age) => {
  if (age < 13) {
    console.log("어린이");
  } else {
    console.log("청소년");
  }
};

child(14);
child(12);

const age = (x) => {
  if (x >= 20) {
    console.log("성인입니다");
  } else if (x >= 8) {
    console.log("학생입니다");
  } else {
    console.log("어린이입니다");
  }
};
age(5);
