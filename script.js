
const btnAdd = document.querySelector("#add");
const wrapper = document.querySelector(".wrapper");


btnAdd.addEventListener("click", () => {
  btnAdd.classList.toggle("btnChangeColor");
  wrapper.classList.toggle("wrapperChangeColor");
});
