const messages = document.getElementById("messages");
const textbox = document.getElementById("textbox");
const textForm = document.getElementById("textform");

textForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newContainer = document.createElement("div");
  newContainer.classList.add("message");
  const newMessage = `<div class="message" >
                        <a href="index.html">
                          <img src="img/user.jpeg" alt="portrait" class="img-circle">
                        </a>
                        <div class="bubble left "><p> ${textbox.value} </p></div>
                      </div>`;
  messages.insertAdjacentHTML("beforeend", newMessage);
  messages.lastElementChild.scrollIntoView();
  textbox.value = "";

});

setTimeout(() => {
  const fakeMessage = `<div class="message right" >
                          <i class="fas fa-circle small"></i>
                          <a href="index.html">
                            <img src="img/profpic.jpg" alt="portrait" class="img-circle">
                          </a>
                          <div class="bubble right "><p>Mauris et arcu erat. Nulla ac accumsan risus. </p></div>
                      </div>`
  messages.insertAdjacentHTML("beforeend", fakeMessage);
}, 1500)

