let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let div = document.querySelector(".inner");

btn.addEventListener("click",function(){
    let getrandomcolor = randomcolor();
    h3.innerHTML = getrandomcolor;
    h4.style.opacity = "1"
    div.style.backgroundColor = getrandomcolor;
})

function randomcolor(){
    let red = Math.floor(Math.random() *255) + 1;
    let blue = Math.floor(Math.random() *255) + 1;
    let green = Math.floor(Math.random() *255) + 1;

    let color = `rgb(${red},${blue},${green})`;
    return color;
}
