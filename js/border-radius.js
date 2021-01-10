const inputs = document.querySelectorAll(".border-radius__input"),
    box = document.querySelector(".border-radius-result"),
    output = document.querySelector(".border-radius-output");

inputs.forEach((item) => {
    console.log(item.getAttribute("data-toggle"));
    item.addEventListener("input", (e) => {
        e.preventDefault();
        item.value = item.value.replace(/[^+\d]/g, "");
        if (item.getAttribute("data-toggle") === "border-top-left") {
            box.style.borderTopLeftRadius = item.value + "px";
        } else if (item.getAttribute("data-toggle") === "border-top-right") {
            box.style.borderTopRightRadius = item.value + "px";
        } else if (item.getAttribute("data-toggle") === "border-bottom-left") {
            box.style.borderBottomLeftRadius = item.value + "px";
        } else if (item.getAttribute("data-toggle") === "border-bottom-right") {
            box.style.borderBottomRightRadius = item.value + "px";
        } else if (item.getAttribute("data-toggle") === "border-width") {
            box.style.border = item.value + "px solid #000000";
        }
        output.innerHTML = "";
        renderOutput();
    });
});

function renderOutput() {
    output.innerHTML += `
        border:  ${
            box.style.borderWidth ? box.style.borderWidth : "0px"
        } solid #000000;<br>
        border-top-left-radius: ${
            box.style.borderTopLeftRadius
                ? box.style.borderTopLeftRadius
                : "10px"
        };<br>
        border-top-right-radius: ${
            box.style.borderTopRightRadius
                ? box.style.borderTopRightRadius
                : "10px"
        };<br>
        border-bottom-left-radius: ${
            box.style.borderBottomLeftRadius
                ? box.style.borderBottomLeftRadius
                : "10px"
        };<br>
        border-bottom-right-radius: ${
            box.style.borderBottomRightRadius
                ? box.style.borderBottomRightRadius
                : "10px"
        };<br>
    `;
}
renderOutput();
