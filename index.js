/* var */
const input1 = document.querySelector("#angle-1");
const input2 = document.querySelector("#angle-2");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");
/* var */

/* func */
function angleAxis(a, b) {
  return a - (a - b) / 2;
}

/*  */
button.addEventListener("click", () => {
  const angle1 = input1.value;
  const angle2 = input2.value;
  const func = angleAxis(angle1, angle2);
  result.value = func;
});
