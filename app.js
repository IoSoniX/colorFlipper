const colors = ["blue", "red", "green", "#f42356", "#d59a69", "rgba(165,251,179)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}