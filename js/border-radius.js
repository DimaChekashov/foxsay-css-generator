const inputs = document.querySelectorAll(".border-radius__input"),
    box = document.querySelector(".border-radius-result");

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
    });
});
