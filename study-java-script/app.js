const colors = ["green", "red", "black", "rgba(133,132,200)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = color[randomNumber];
});

getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}