document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    button.textContent = "DONE";
    button.className = "click-me-btn"; // Add this line

    button.addEventListener("click", () => {
        alert("Thanks for visiting my portfolio!");
    });

    document.body.appendChild(button);
});
