
const btnAdd = document.querySelector("#add");
const wrapper = document.querySelector(".wrapper");

let colorState = 0;

btnAdd.addEventListener("click", () => {
  if (colorState == 0) {
    btnAdd.style.backgroundColor = "#d38da3";
    wrapper.style.backgroundColor = "#d8f3dc";
    colorState = 1;
  } else {
    btnAdd.style.backgroundColor = "#3c3c3c";
    wrapper.style.backgroundColor = "#e8e8e8";
    colorState = 0;
  }
});


