const menus = document.querySelectorAll(".accordion-header");
menus.forEach((menu) => {
    menu.addEventListener("click", () => {
        const content = menu.nextElementSibling;
        const icon = menu.querySelector(".accordion-icon")

        if (content.style.display === "block") {
            content.style.display = "none";
            icon.textContent = "+";
            menu.style.borderBottom = "none";
        } else {
            menus.forEach((item) => {
                if (item !== menu) {
                    item.nextElementSibling.style.display = "none";
                    item.querySelector(".accordion-icon").textContent = "+";
                    item.style.borderBottom = "none";
                }
            });
            content.style.display = "block";
            icon.textContent = "-";
            menu.style.borderBottom = "1px solid black";
        }
    })
})