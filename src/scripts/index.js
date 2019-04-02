import '../styles/index.scss';
import 'bootstrap';

console.log('webpack starterkit');

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("img-selected");
  });
});
