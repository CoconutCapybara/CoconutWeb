document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const panels = document.querySelectorAll(".panel");

    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();

        panels.forEach(panel => {
            const panelTitle = panel.querySelector("h2").textContent.toLowerCase();
            const panelTags = Array.from(panel.querySelectorAll(".tag")).map(tag => tag.textContent.toLowerCase()).join(" ");

            if (panelTitle.includes(searchText) || panelTags.includes(searchText)) {
                panel.style.display = "block";
            } else {
                panel.style.display = "none";
            }
        });
    });
});
