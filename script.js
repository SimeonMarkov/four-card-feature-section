document.querySelectorAll(".card-container-topline").forEach(element => {
    const color = element.getAttribute("class").match(/bg-[a-z]+/)[0].split("-")[1];
    element.style.backgroundColor = `var(--${color})`;
})